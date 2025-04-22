import React from "react";
import { Button } from "../../components/ui/button";

export const Review = (): JSX.Element => {
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
        {/* Review Header */}
        <h1 className="text-[#101828] text-2xl font-semibold mb-4">Review</h1>
        
        {/* Interview Details */}
        <div className="flex gap-4 items-center text-sm text-[#475467] mb-8">
          <span>Interview type: <span className="text-[#101828]">Product Thinking</span></span>
          <span>|</span>
          <span>Company: <span className="text-[#101828]">Paytm</span></span>
          <span>|</span>
          <span>Date: <span className="text-[#101828]">18/04/2023 6:00:00 pm</span></span>
          <span>|</span>
          <span>Score: <span className="text-[#101828]">8/10</span></span>
        </div>

        {/* Audio Notice */}
        <div className="bg-white rounded-lg border border-[#EAECF0] p-4 mb-8">
          <div className="flex items-center gap-2">
            <span>🎵</span>
            <span className="text-[#475467]">Audio recording of the interview is coming soon...</span>
          </div>
        </div>

        {/* Transcript and Feedback Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Transcript */}
          <div className="border border-[#EAECF0] rounded-lg p-4">
            <h2 className="text-[#101828] font-medium mb-4">Transcript</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-[#101828]">Interviewer:</p>
                <p className="text-[#475467]">Hello Sriram, this is Sam, and I will be your interviewer today. How are you?</p>
              </div>
              <div>
                <p className="font-medium text-[#101828]">You:</p>
                <p className="text-[#475467]">Hey Sam, I am great! Good to meet you. How are you?</p>
              </div>
              <div>
                <p className="font-medium text-[#101828]">Interviewer:</p>
                <p className="text-[#475467]">As you already know, this interview will be on Product thinking, and we will introduce ourselves and jump straight into the interview</p>
              </div>
              {/* Repeat pattern for more conversation */}
            </div>
          </div>

          {/* Feedback */}
          <div className="border border-[#EAECF0] rounded-lg p-4">
            <h2 className="text-[#101828] font-medium mb-4">Feedback</h2>
            
            {/* Summary */}
            <div className="mb-6">
              <h3 className="text-[#101828] font-medium mb-2">📋 Summary</h3>
              <p className="text-[#475467] text-sm">
                You demonstrated a thoughtful approach to product decision-making and user-centered thinking. Throughout the interview, your responses showed clarity in identifying root problems and prioritizing features based on impact and feasibility. In particular, your scenario around redesigning the onboarding experience highlighted your ability to balance business goals with user experience. However, certain answers could benefit from more quantification and structured framing. Your communication style was professional and articulate, though at times slightly verbose under open-ended questions.
              </p>
            </div>

            {/* Positive Feedback */}
            <div>
              <h3 className="text-[#101828] font-medium mb-2">✅ Positive Feedback</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#475467]">
                <li>Your breakdown of the onboarding funnel into awareness, activation, and retention phases was both strategic and clear.</li>
                <li>You did a great job considering edge cases, especially when discussing trade-offs between speed and user control.</li>
                <li>You tied decisions back to metrics (e.g., drop-off rates, conversion), which is critical in a PM role.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};