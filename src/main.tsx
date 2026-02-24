import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Cards from "./pages/Cards";
import "./index.css";
import QuizPage from "./pages/Quiz-page";
import HomePage from "./pages/HomePage";
import Diary from "./pages/Diary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<App />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
