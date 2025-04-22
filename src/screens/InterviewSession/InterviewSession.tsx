import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { MicIcon } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "../../components/ui/dialog";

export const InterviewSession = (): JSX.Element => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [timer, setTimer] = useState("00:05:34");
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);

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
        {/* Listening Indicator */}
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-[#E5E5E5] flex items-center justify-center">
            <span className="text-black font-medium">
              {isListening ? "Listening.." : "Click to speak"}
            </span>
          </div>
        </div>

        {/* Transcript */}
        {transcript && (
          <div className="text-center mb-8 max-w-2xl">
            <p className="text-white">{transcript}</p>
          </div>
        )}

        {/* AI Message */}
        <div className="text-center mb-16 max-w-2xl">
          <p className="text-white">
            Hello How are you? This is Sam, and Today I am going to take your interview
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span className="text-sm text-white">Good Network</span>
        </div>

        <button
          className="w-12 h-12 rounded-full bg-[#2F2F2F] flex items-center justify-center"
          onClick={() => setIsListening(!isListening)}
        >
          <MicIcon className="w-6 h-6 text-white" />
        </button>

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