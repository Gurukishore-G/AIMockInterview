import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight";
import { Interview } from "./screens/Interview";
import { InterviewSession } from "./screens/InterviewSession";
import { Onboarding } from "./screens/Onboarding";
import { InterviewSelection } from "./screens/InterviewSelection";
import { Feedback } from "./screens/Feedback";
import { Review } from "./screens/Review";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/interview-selection" element={<InterviewSelection />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/interview-session" element={<InterviewSession />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);