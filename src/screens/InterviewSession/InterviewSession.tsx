import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { MicIcon, MicOffIcon, SendIcon, PlayIcon, PauseIcon } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "../../components/ui/dialog";
import { ReactMic } from "react-mic";
// import { OpenAI } from "openai";

export const InterviewSession = (): JSX.Element => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [timer, setTimer] = useState("00:00:00");
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: 'Hello! I\'m Sam, and I\'ll be conducting your interview today. How are you doing?' }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isGeneratingSpeech, setIsGeneratingSpeech] = useState(false);
  
  // Refs for audio recording
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<Date | null>(null);
  
  // Initialize audio recording
  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.src = '';
      }
    };
  }, []);

  const requestAudioPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      return stream;
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setPermissionError('Please allow microphone access to record audio.');
      return null;
    }
  };

  const startRecording = async () => {
    const stream = await requestAudioPermission();
    if (stream) {
      setPermissionError(null);
      setIsRecording(true);
    }
  };
  const stopRecording = () => setIsRecording(false);
  
  const onData = (recordedBlob: any) => {
    // You can log live data if needed
  };
  
  const onStop = async (recordedBlob: any) => {
    setIsProcessing(true);
    try {
      // Create FormData for the audio file
      const formData = new FormData();
      
      // Convert WAV to M4A using FFmpeg in the browser
      const audioContext = new AudioContext();
      const audioData = await recordedBlob.blob.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(audioData);
      
      // Create a new audio buffer with M4A format
      const m4aBlob = await convertToM4A(audioBuffer);
      
      // Append the M4A file to FormData
      formData.append("audio", m4aBlob, "recording.m4a");

      // Send to backend for Whisper processing
      const response = await fetch("http://localhost:3001/api/process-audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to process audio");

      const data = await response.json();
      setTranscript(data.transcript);
      setMessages(prev => [...prev, { role: 'user', content: data.transcript }]);
      await getAIResponse(data.transcript);
    } catch (error) {
      console.error("Error processing audio:", error);
      alert("There was an error processing your audio. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Helper function to convert AudioBuffer to M4A
  const convertToM4A = async (audioBuffer: AudioBuffer): Promise<Blob> => {
    // Create a WAV blob from the audio buffer
    const wavBlob = await audioBufferToWav(audioBuffer);
    
    // For now, return WAV blob since browser M4A encoding is not widely supported
    // In production, you would want to do the M4A conversion on the server side
    return wavBlob;
  };

  // Helper function to convert AudioBuffer to WAV
  const audioBufferToWav = async (buffer: AudioBuffer): Promise<Blob> => {
    const numberOfChannels = buffer.numberOfChannels;
    const length = buffer.length * numberOfChannels * 2;
    const view = new DataView(new ArrayBuffer(44 + length));

    // Write WAV header
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + length, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 2 * numberOfChannels, true);
    view.setUint16(32, numberOfChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, length, true);

    // Write audio data
    const offset = 44;
    const channelData = new Float32Array(buffer.length);
    let pos = 0;
    
    for (let i = 0; i < buffer.numberOfChannels; i++) {
      buffer.copyFromChannel(channelData, i, 0);
      for (let j = 0; j < channelData.length; j++) {
        const sample = Math.max(-1, Math.min(1, channelData[j]));
        view.setInt16(offset + pos * 2, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        pos++;
      }
    }

    return new Blob([view], { type: 'audio/wav' });
  };

  const writeString = (view: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  
  const getAIResponse = async (userMessage: string) => {
    setIsSending(true);
    try {
      const response = await fetch("http://localhost:3001/api/get-ai-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      if (!response.ok) throw new Error("Failed to get AI response");
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      
      // Generate speech for the AI response
      await generateSpeech(data.response);
    } catch (error) {
      alert("There was an error getting the AI response. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const generateSpeech = async (text: string) => {
    setIsGeneratingSpeech(true);
    try {
      const response = await fetch("http://localhost:3001/api/generate-speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      
      if (!response.ok) throw new Error("Failed to generate speech");
      
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Stop any currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      
      const audio = new Audio(audioUrl);
      audio.onended = () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      };
      
      setCurrentAudio(audio);
      audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error generating speech:", error);
      alert("There was an error generating speech. Please try again.");
    } finally {
      setIsGeneratingSpeech(false);
    }
  };

  const toggleAudioPlayback = () => {
    if (currentAudio) {
      if (isPlaying) {
        currentAudio.pause();
      } else {
        currentAudio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLeaveInterview = () => {
    navigate('/feedback');
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col">
      {/* Header */}
      <header className="absolute top-4 right-4 z-10">
        <Button 
          onClick={() => setShowLeaveDialog(true)}
          className="bg-white hover:bg-gray-100 text-black rounded-lg px-4 py-2 text-sm font-medium"
        >
          Leave Interview
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Permission Error */}
        {permissionError && (
          <div className="mb-8 text-red-500 text-center">
            {permissionError}
          </div>
        )}
        
        {/* Listening Indicator */}
        <div className="mb-8">
          <div className={`w-32 h-32 rounded-full ${isRecording ? 'bg-green-500' : 'bg-[#E5E5E5]'} flex items-center justify-center`}>
            <span className={`font-medium ${isRecording ? 'text-white' : 'text-black'}`}>
              {isRecording ? "Listening..." : "Click to speak"}
            </span>
          </div>
        </div>

        {/* Transcript */}
        {transcript && (
          <div className="text-center mb-8 max-w-2xl">
            <p className="text-white">{transcript}</p>
          </div>
        )}
        
        {/* Processing indicators */}
        {isProcessing && (
          <div className="text-center mb-8">
            <p className="text-white">Processing your audio...</p>
          </div>
        )}
        
        {isSending && (
          <div className="text-center mb-8">
            <p className="text-white">Getting AI response...</p>
          </div>
        )}

        {isGeneratingSpeech && (
          <div className="text-center mb-8">
            <p className="text-white">Generating speech...</p>
          </div>
        )}

        {/* Conversation */}
        <div className="w-full max-w-2xl mb-8 overflow-y-auto max-h-[300px] p-4 bg-[#2F2F2F] rounded-lg">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-[#3F3F3F] ml-auto max-w-[80%]' 
                  : 'bg-[#4F4F4F] mr-auto max-w-[80%]'
              }`}
            >
              <p className="text-white">{message.content}</p>
              {message.role === 'assistant' && index === messages.length - 1 && currentAudio && (
                <Button
                  onClick={toggleAudioPlayback}
                  className="mt-2 bg-[#2F2F2F] hover:bg-[#3F3F3F] text-white rounded-full p-2"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-4 h-4" />
                  ) : (
                    <PlayIcon className="w-4 h-4" />
                  )}
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span className="text-sm text-white">Good Network</span>
        </div>

        <ReactMic
          record={isRecording}
          onStop={onStop}
          mimeType="audio/wav"
          style={{ display: "none" }}
        />

        <Button
          onClick={() => setIsRecording((r) => !r)}
          disabled={isProcessing || isSending}
          className="w-12 h-12 rounded-full bg-[#2F2F2F] flex items-center justify-center"
        >
          {isRecording ? (
            <MicOffIcon className="w-6 h-6 text-white" />
          ) : (
            <MicIcon className="w-6 h-6 text-white" />
          )}
          {isRecording ? "Stop" : "Start"} Recording
        </Button>

        <span className="text-sm text-white">{timer}</span>
      </footer>

      {/* Leave Interview Dialog */}
      <Dialog open={showLeaveDialog} onOpenChange={setShowLeaveDialog}>
        <DialogContent className="bg-white rounded-[20px] p-6 w-[448px]">
          <h2 className="text-[22px] font-semibold text-black">
            Are you sure you want to Leave Meeting?
          </h2>
          <p className="text-[#667085] text-base mt-2 mb-6">
            Please note that, if you quit post 10 minutes of the meeting, your credit will be consumed, but feedback wont be provided.
          </p>
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="text-[#344054] hover:bg-transparent hover:text-[#101828]"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={handleLeaveInterview}
              className="bg-[#101828] hover:bg-[#000000] text-white"
            >
              Leave Interview
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};