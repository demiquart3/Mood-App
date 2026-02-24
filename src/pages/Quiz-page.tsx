import React from "react";
import "./Cards.css";
import "./App.tsx";
import "./App.tsx";
import QuizInput from "../components/QuizInput.tsx";
import "./Quiz-page.css";
import Header from "../components/Header";

export default function QuizPage() {
  type Question = {
    id: "q1" | "q2" | "q3" | "q4";
    text: string;
    options: {
      id: "o1" | "o2" | "o3";
      text: string;
      value: number;
    }[];
  };
  const [activeQuestion, setActiveQuestion] =
    React.useState<Question["id"]>("q1");

  const [result, setResult] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  /*const questions2 = {
    q1: {
      text: "daf",
      options: {
        o1: {
          text: "ssf",
          value: 1
        }
      }
    }
  }*/

  const questions: Question[] = [
    {
      id: "q1",
      text: "How are you feeling right now?",
      options: [
        { id: "o1", text: "Good, full of energy", value: 1 },
        { id: "o2", text: "Neutral", value: 2 },
        { id: "o3", text: "Tired or low", value: 3 },
      ],
    },
    {
      id: "q2",
      text: "Which option best describes your mood today?",
      options: [
        { id: "o1", text: "Happy or inspired", value: 1 },
        { id: "o2", text: "Calm", value: 2 },
        { id: "o3", text: "Anxious or sad", value: 3 },
      ],
    },
  ];

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    const index = questions.findIndex(
      (question) => question.id === activeQuestion,
    );
    const next = questions[index + 1];

    const isLast = index === questions.length - 1;
    if (!isLast) {
      setActiveQuestion(questions[index + 1].id);
    } else {
    }

    setActiveQuestion(next.id);
    const points = Number(e.currentTarget.value);
    setResult((prev) => prev + points);

    if (result >= 10) {
      alert("You're doung okay");
    } else {
      alert("You need help");
    }
  }

  const question = questions.find((q) => q.id === activeQuestion);
  if (!question) {
    return <div>No question found</div>;
  }

  return (
    <div className="quiz-wrapper">
      <Header></Header>
      <div>
        <div key={question.id}>
          <h3>{question.text}</h3>
          {question.options.map((opt) => (
            <QuizInput
              key={opt.id}
              text={opt.text}
              value={opt.value}
              onChange={handleClick}
            />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}
