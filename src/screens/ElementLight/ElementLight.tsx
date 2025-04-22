import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const ElementLight = (): JSX.Element => {
  const navigate = useNavigate();
  
  // Feature cards data
  const features = [
    {
      title: "Real-time Feedback",
      description:
        "Get instant, detailed, and actionable feedback after your interviews, along with relevant resources.",
      icon: "/component-2-2.svg",
    },
    {
      title: "Industry-specific Questions",
      description: "Practice with curated questions from your target industry.",
      icon: "/component-2-6.svg",
    },
    {
      title: "Memory",
      description:
        "Remembers all your interviews, and ask you questions testing your capabilities to the limits",
      icon: "/component-2-4.svg",
    },
    {
      title: "JD upload",
      description:
        "Prepare for a specific company and role, to simulate actual interview",
      icon: "/component-2-7.svg",
    },
    {
      title: "Interview Recording",
      description:
        "Review your recorded sessions with AI-powered insights and annotations.",
      icon: "/component-2-1.svg",
    },
    {
      title: "Human like",
      description:
        "Your AI interviewer has got the personality that is more human than most humans :)",
      icon: "/man.svg",
    },
  ];

  // Job modules data
  const jobModules = [
    { status: "LIVE", name: "PRODUCT MANAGER", isActive: true },
    { status: "COMING SOON", name: "DATA ANALYST", isActive: false },
    { status: "COMING SOON", name: "SOFTWARE ENGINEER", isActive: false },
    { status: "COMING SOON", name: "DATA SCIENTIST", isActive: false },
  ];

  // Footer links
  const footerLinks = ["About", "Terms", "Privacy", "Contact Us"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 w-full bg-transparent backdrop-blur-md z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-14 px-4">
          <div className="flex items-center gap-1.5">
            <img className="w-6 h-6" alt="Logo" src="/frame.svg" />
            <h1 className="font-bold text-xl font-['Urbanist',Helvetica] text-neutral-950">
              AI Mock Interview
            </h1>
          </div>
          <Button className="bg-neutral-900 rounded-xl" size="sm">
            <span>Sign In</span>
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="font-['Inter'] text-[32px] leading-[38px] tracking-[-0.64px] text-center text-black mb-4">
                Ace Your Interviews
                <br />
                with <span className="text-[#4285F4]">AI</span>
              </h2>
              <p className="max-w-2xl text-base font-['Inter'] text-neutral-500 leading-6">
                AI mock interviews you'll swear are human. Curated specifically
                for your job role, with actionable feedback.
              </p>
              <Button 
                className="mt-8 bg-neutral-900 rounded-xl px-8 py-2.5 h-11"
                onClick={() => navigate('/onboarding')}
              >
                <span>Start Mock Interview</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                className="w-full max-w-[884px] h-auto"
                alt="Person doing interview"
                src="/clip-path-group.png"
              />
            </div>
          </div>
        </section>

        {/* Stats and Modules Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Card */}
              <Card className="rounded-2xl border border-neutral-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative pt-20 pb-8 px-4 text-center">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-100 to-transparent opacity-25 blur-md"></div>
                    <div className="relative">
                      <div className="flex justify-center mb-6">
                        <div className="bg-[url(/component-2-5.svg)] bg-no-repeat bg-contain w-[263px] h-24 flex items-center justify-center">
                          <span className="text-[41.2px] font-bold bg-gradient-to-r from-[#4285F4] to-[#4DBAED] bg-clip-text text-transparent">
                            5000+
                          </span>
                        </div>
                      </div>
                      <h3 className="text-[35.8px] font-medium text-neutral-950">
                        Interview Questions
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Modules Card */}
              <Card className="rounded-2xl border border-neutral-200 overflow-hidden md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-base font-normal text-black mb-6">
                    MODULES
                  </h3>
                  <div className="space-y-4">
                    {jobModules.map((module, index) => (
                      <div key={index} className="flex items-center gap-6">
                        <Badge
                          variant={module.isActive ? "outline" : "secondary"}
                          className={`px-5 py-2.5 rounded-lg ${
                            module.isActive ? "border-[#b3b3b3]" : "bg-[#f5f5f54c] border-neutral-200"
                          }`}
                        >
                          {module.status}
                        </Badge>
                        <span
                          className={`text-2xl font-bold ${
                            module.isActive
                              ? "bg-gradient-to-r from-[#4285F4] to-[#4DBAED] bg-clip-text text-transparent"
                              : "bg-gradient-to-r from-[rgba(10,10,10,0.6)] to-[rgba(112,112,112,0.6)] bg-clip-text text-transparent"
                          }`}
                        >
                          {module.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <span className="text-base font-normal bg-gradient-to-r from-[#4285F4] to-[#4DBAED] bg-clip-text text-transparent">
              Features
            </span>
            <h2 className="text-[37px] font-normal text-neutral-950 mt-2 mb-4">
              Explore AI Mock Interview Features
            </h2>
            <p className="text-lg text-neutral-500 mb-12">
              Everything you need to ace your interviews and get that dream job.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-neutral-200 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative pt-16 px-8 pb-8">
                      <div className="absolute top-0 left-0 w-full h-[206px] rounded-full border border-neutral-200 blur-[20px] bg-gradient-to-b from-[rgba(77,186,237,1)] to-white opacity-25"></div>
                      <div className="relative">
                        <div className="flex items-center justify-center w-12 h-12 p-px bg-[#ffffff01] rounded-2xl border border-solid border-neutral-200 shadow-[0px_1px_2px_#0000000d] mb-4">
                          <img
                            className="w-6 h-6"
                            alt={feature.title}
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-base text-neutral-500 leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 h-24 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-neutral-500 hover:text-neutral-700"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-sm text-neutral-500">
            Built by Summer Projects
          </div>
        </div>
      </footer>
    </div>
  );
};