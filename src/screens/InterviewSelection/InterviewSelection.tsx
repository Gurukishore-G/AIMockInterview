import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

export const InterviewSelection = (): JSX.Element => {
  const navigate = useNavigate();
  const [roundType, setRoundType] = useState("");
  const [company, setCompany] = useState("");

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
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <h1 className="text-[30px] font-semibold text-[#101828] mb-8">Product Management</h1>
          
          <div className="w-full space-y-4">
            <Select value={roundType} onValueChange={setRoundType}>
              <SelectTrigger className="w-full h-[44px] px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-base">
                <SelectValue placeholder="Select Round type (Mandatory)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product-thinking">Product Thinking</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="behavioral">Behavioral</SelectItem>
              </SelectContent>
            </Select>

            <Select value={company} onValueChange={setCompany}>
              <SelectTrigger className="w-full h-[44px] px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-base">
                <SelectValue placeholder="Company Name (Optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="meta">Meta</SelectItem>
                <SelectItem value="amazon">Amazon</SelectItem>
                <SelectItem value="microsoft">Microsoft</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={() => navigate('/interview')}
              className="w-full bg-[#2E90FA] hover:bg-[#1570CD] text-white rounded-lg px-4 py-2.5 flex items-center gap-2 justify-center"
              disabled={!roundType}
            >
              <PlusIcon className="w-5 h-5" />
              Take Interview
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};