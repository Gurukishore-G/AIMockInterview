import React from "react";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { useNavigate } from "react-router-dom";

export const Feedback = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/review');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#EAECF0]">
        <div className="max-w-[1280px] mx-auto px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/frame.svg" alt="Logo" className="w-5 h-5" />
            <span className="text-sm font-medium text-[#101828]">AI Mock Interview</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-6">
              <a href="#" className="text-sm text-[#344054]">Home</a>
              <a href="#" className="text-sm text-[#344054]">Profile</a>
            </nav>
            <div className="h-6 w-[1px] bg-[#EAECF0]"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#475467]">1 credit</span>
              <a href="#" className="text-sm text-[#6941C6]">(Get credits)</a>
            </div>
            <Button
              variant="ghost"
              className="text-sm text-[#344054] hover:bg-transparent hover:text-[#101828]"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-8 py-8">
        {/* Processing Section */}
        <div className="bg-white rounded-lg border border-[#EAECF0] p-6 mb-8">
          <h2 className="text-[#101828] font-medium mb-4">Processing Interview... (Might take 2-3 minutes)</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#F63D68]">❤</span>
              <span className="text-[#475467]">Analyzing Responses: We're reviewing what you said to understand clarity, depth, and structure.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#039855]">◆</span>
              <span className="text-[#475467]">Scoring Performance: We're measuring how your answers align with real-world expectations.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#444CE7]">■</span>
              <span className="text-[#475467]">Compiling Feedback: Personalized insights are being prepared to help you grow.</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <span className="text-[#2E90FA]">Meanwhile Share us Some Feedback</span>
        </div>

        {/* Feedback Form */}
        <div className="space-y-8">
          {/* Human Likeness */}
          <div>
            <h3 className="text-[#101828] font-medium mb-2">Human Likeness</h3>
            <p className="text-[#475467] mb-4">On a scale from Siri (0) to an adult human (10), how human-like did the interview feel? Please share a brief reason for your rating.</p>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(11)].map((_, i) => (
                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Your Reason"
                className="w-full p-3 border border-[#D0D5DD] rounded-lg"
              />
            </div>
          </div>

          {/* Interviewer Skill */}
          <div>
            <h3 className="text-[#101828] font-medium mb-2">Interviewer Skill</h3>
            <p className="text-[#475467] mb-4">On a scale from a worse-than-average friend interview (0) to a professional interview expert (10), how would you rate the interviewer's skill level?</p>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(11)].map((_, i) => (
                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Your Reason"
                className="w-full p-3 border border-[#D0D5DD] rounded-lg"
              />
            </div>
          </div>

          {/* Voice Capabilities */}
          <div>
            <h3 className="text-[#101828] font-medium mb-2">Voice Capabilities</h3>
            <p className="text-[#475467] mb-4">How would you rate the model's overall voice capabilities on a scale of 1-10? What was the best part, and what was the worst part of the interview?</p>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(11)].map((_, i) => (
                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Your Reason"
                className="w-full p-3 border border-[#D0D5DD] rounded-lg"
              />
            </div>
          </div>

          {/* Improvement Suggestion */}
          <div>
            <h3 className="text-[#101828] font-medium mb-2">Improvement Suggestion</h3>
            <p className="text-[#475467] mb-4">If you could add or change one thing to make the interview better, what would it be and why? Rate its importance too.</p>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(11)].map((_, i) => (
                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Your Reason"
                className="w-full p-3 border border-[#D0D5DD] rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleSubmit}
              className="bg-[#2E90FA] hover:bg-[#1570CD] text-white px-4 py-2.5"
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};