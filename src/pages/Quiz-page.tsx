import { useNavigate } from "react-router-dom";
import React from "react";
import "./Cards.css";
import "./App.tsx";
import Button from "../components/Button";
import "./App.tsx";
import QuizInput from "../components/QuizInput.tsx";
import "./Quiz-page.css";
import Header from "../components/Header";

export default function QuizPage() {
  const [score, setScore] = React.useState(0);
  const navigate = useNavigate();

  const [color, setColor] = React.useState("green");

  function handleSelect() {
    setColor("pink");
  }

  const [selected, setSelected] = React.useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  });

  const [activeQuestion, setActiveQuestion] = React.useState<
    "q1" | "q2" | "q3" | "q4"
  >("q1");

  const questions: ("q1" | "q2" | "q3" | "q4")[] = ["q1", "q2", "q3", "q4"];

  function handleClick() {
    const index = questions.indexOf(activeQuestion);
    const next = questions[index + 1];
    if (next) {
      setActiveQuestion(next);
    } else {
    }
  }

  return (
    <div>
      {" "}
      <Header></Header>
      <div className="quiz-wrapper">
        {activeQuestion === "q1" && (
          <div className="firstQuestion">
            <h2>How are you feeling right now?</h2>
            <QuizInput
              text="Good, full of energy"
              questionId="q1"
              count={1}
              onSelect={handleClick}
            />
            <QuizInput
              text="Neutral"
              questionId="q1"
              count={2}
              onSelect={handleClick}
            />
            <QuizInput
              text="Tired or low"
              questionId="q1"
              count={3}
              onSelect={handleClick}
            />
          </div>
        )}
        {activeQuestion === "q2" && (
          <div className="secondQuestion">
            <h2>Which option best describes your mood today?</h2>
            <QuizInput
              text="Happy or inspired"
              questionId="q2"
              count={1}
              onSelect={handleSelect}
            />
            <QuizInput
              text="Calm"
              questionId="q2"
              count={2}
              onSelect={handleSelect}
            />
            <QuizInput
              text="Anxious or sad"
              questionId="q2"
              count={3}
              onSelect={handleSelect}
            />
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
}
