import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";

export const Interview = (): JSX.Element => {
  const navigate = useNavigate();

  const handleStartInterview = () => {
    navigate('/interview-session');
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
      <main className="max-w-[1280px] mx-auto px-8 py-8">
        <div className="max-w-[800px] mx-auto">
          {/* Title and Meta */}
          <div className="mb-6">
            <h1 className="text-[30px] font-semibold text-[#101828] mb-2">Product Thinking</h1>
            <div className="flex items-center gap-4 text-sm text-[#475467]">
              <span>Estimated Duration: 30-45 min</span>
              <span>|</span>
              <span>Company: Paytm</span>
              <span>|</span>
              <span>Credits: 1 Credit</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#475467] mb-8">
            Product Thinking interviews test your ability to think like a product manager. You'll tackle real-world scenarios, identifying user needs, prioritizing solutions, and balancing user experience with business impact. You may be asked to design a new product or improve an existing one.
          </p>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Skills Tested */}
            <div className="border border-[#EAECF0] rounded-lg p-4">
              <h2 className="font-semibold text-[#101828] mb-4">Skills Tested</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F63D68]">❤</span>
                  <div>
                    <span className="font-medium">User-centric Thinking:</span>
                    <span className="text-[#475467]"> Identifying user problems and motivations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#039855]">◆</span>
                  <div>
                    <span className="font-medium">Structured Problem-Solving:</span>
                    <span className="text-[#475467]"> Breaking down complex challenges</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#444CE7]">■</span>
                  <div>
                    <span className="font-medium">Prioritization:</span>
                    <span className="text-[#475467]"> Balance user, business & constraints</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span>○</span>
                  <div>
                    <span className="font-medium">Product Sense:</span>
                    <span className="text-[#475467]"> Evaluating trade-offs and making impactful decisions.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Structure of Interview */}
            <div className="border border-[#EAECF0] rounded-lg p-4">
              <h2 className="font-semibold text-[#101828] mb-4">Structure of Interview</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>▶</span>
                  <div>
                    <span className="font-medium">Introduction (2-3 min):</span>
                    <span className="text-[#475467]"> Brief overview based on your resume</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span>↗</span>
                  <div>
                    <span className="font-medium">Scenario Question (10-15 min):</span>
                    <span className="text-[#475467]"> Open ended challenge</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span>↘</span>
                  <div>
                    <span className="font-medium">Follow-up Discussion (10-15 min):</span>
                    <span className="text-[#475467]"> Deep dive, metrics, etc.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Job Description */}
          <div className="border border-[#EAECF0] rounded-lg p-4 mb-8">
            <h2 className="font-semibold text-[#101828] mb-2">Job Description (Optional)</h2>
            <textarea 
              className="w-full h-[100px] p-3 border border-[#D0D5DD] rounded-lg text-[#475467] resize-none"
              placeholder="Paste the job description here..."
            ></textarea>
          </div>

          {/* Interview Guidelines */}
          <div className="border border-[#EAECF0] rounded-lg p-4 mb-8">
            <h2 className="font-semibold text-[#101828] mb-4">Important Interview Guidelines</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span>□</span>
                <span className="text-[#475467]">Real Simulation: You cannot pause or restart once the interview begins.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>■</span>
                <span className="text-[#475467]">Commitment Matters: Exiting after 10 minutes will consume your interview credit without feedback.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span className="text-[#475467]">Maintain Realism: We did our best to simulate a real interview, but it won't be successful unless you believe it too.</span>
              </li>
            </ul>
          </div>

          {/* Start Interview Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleStartInterview}
              className="bg-[#2E90FA] hover:bg-[#1570CD] text-white rounded-lg px-4 py-2.5 flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Start Interview
            </Button>
          </div>

          {/* Resources Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#101828] mb-8">Resources for Preperation</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Books */}
              <div className="border border-[#EAECF0] rounded-lg p-4">
                <h3 className="font-semibold text-[#101828] mb-4">Books</h3>
                <ul className="space-y-2 text-[#475467]">
                  <li>• Lean Product Playbook</li>
                  <li>• Decode & Conquer</li>
                  <li>• Inspired - Marty Cagan</li>
                </ul>
              </div>

              {/* Videos and Blogs */}
              <div className="border border-[#EAECF0] rounded-lg p-4">
                <h3 className="font-semibold text-[#101828] mb-4">Videos and Blogs</h3>
                <ul className="space-y-2 text-[#475467]">
                  <li>• How to Think Like a PM</li>
                  <li>• Product Teardowns</li>
                  <li>• Google PM Guide</li>
                </ul>
              </div>

              {/* Sample Interview Questions */}
              <div className="border border-[#EAECF0] rounded-lg p-4">
                <h3 className="font-semibold text-[#101828] mb-4">Sample Interview Questions</h3>
                <ul className="space-y-2 text-[#475467]">
                  <li>• YouTube Shorts Improvement</li>
                  <li>• Food Delivery App</li>
                  <li>• Engagement Drop RCA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};