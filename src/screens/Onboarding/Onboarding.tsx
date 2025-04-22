import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "lucide-react";

export const Onboarding = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    role: "Product Management",
    experience: "Fresher / Intern Experience",
    resume: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/interview-selection');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[360px]">
        <h1 className="text-[18px] font-['Inter'] font-medium text-[#101828] mb-8">
          Quickly tell us about you
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="block text-sm font-['Inter'] text-[#344054]">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-[44px] px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-base font-['Inter'] text-[#101828]"
              placeholder="Vecham Sriram"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-['Inter'] text-[#344054]">
              Role you are looking for
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.role}
                readOnly
                className="w-full h-[44px] px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-base font-['Inter'] text-[#101828]"
              />
              <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-['Inter'] text-[#344054]">
              Relevant Experience
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.experience}
                readOnly
                className="w-full h-[44px] px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-base font-['Inter'] text-[#101828]"
              />
              <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-['Inter'] text-[#344054]">
              Upload Master resume
            </label>
            <div className="w-full h-[140px] border border-dashed border-[#EAECF0] rounded-lg flex flex-col items-center justify-center bg-white">
              <div className="w-10 h-10 rounded-full bg-[#F9FAFB] flex items-center justify-center mb-3">
                <UploadIcon className="w-5 h-5 text-[#475467]" />
              </div>
              <div className="text-sm font-['Inter'] text-[#475467]">
                <span className="text-[#6941C6]">Click to upload</span>
                {' '}or drag and drop
              </div>
              <div className="text-sm font-['Inter'] text-[#475467]">
                PDF (max. 5MB)
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#101828] text-white rounded-lg px-[18px] py-2.5 text-base font-['Inter'] font-semibold"
          >
            Done
          </Button>
        </form>
      </div>
    </div>
  );
};