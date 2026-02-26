import React from "react";
import "./Cards.css";
import "./App.tsx";
import "./App.tsx";
import QuizInput from "../components/QuizInput.tsx";
import "./Quiz-page.css";
import Header from "../components/Header";

export default function QuizPage() {
  type Question = {
    id: number;
    text: string;
    options: {
      id: number;
      text: string;
      value: number;
    }[];
  };

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
      id: 1,
      text: "How are you feeling right now?",
      options: [
        { id: 1, text: "Good, full of energy", value: 1 },
        { id: 2, text: "Neutral", value: 2 },
        { id: 3, text: "Tired or low", value: 3 },
        { id: 4, text: "Exhausted or unwell", value: 4 },
      ],
    },
    {
      id: 2,
      text: "Which option best describes your mood today?",
      options: [
        { id: 1, text: "Happy or inspired", value: 1 },
        { id: 2, text: "Calm", value: 2 },
        { id: 3, text: "Anxious or sad", value: 3 },
        { id: 4, text: "Very distressed or overwhelmed", value: 4 },
      ],
    },
    {
      id: 3,
      text: "What is your energy level today?",
      options: [
        { id: 1, text: "High", value: 1 },
        { id: 2, text: "Medium", value: 2 },
        { id: 3, text: "Low", value: 3 },
        { id: 4, text: "Very low or drained", value: 4 },
      ],
    },
    {
      id: 4,
      text: "How do you react to things around you right now?",
      options: [
        { id: 1, text: "Positively", value: 1 },
        { id: 2, text: "Neutrally", value: 2 },
        { id: 3, text: "Irritated", value: 3 },
        { id: 4, text: "Highly reactive or overwhelmed", value: 4 },
      ],
    },
  ];

  const [result, setResult] = React.useState(0);

  const [activeQuestion, setActiveQuestion] = React.useState(0); // (0)

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    /* const index = questions.findIndex(
      (question) => question.id === activeQuestion,
    ); */
    setActiveQuestion((prev) => prev + 1);

    console.log("index:", setActiveQuestion);

    const values = questions[0].options.map((opt) => opt.value);

    console.log("values:", values);

    /* setResult((prev) => prev + values)

    console.log("result:", totalResult); 
    */

    /* const isLast = index === questions.length - 1;
    if (!isLast) {
      setActiveQuestion(questions[index + 1].id);
    } else {
    }*/

    /* console.log("isLast:", isLast);

    const points = Number(e.currentTarget.value);
    setResult((prev) => prev + points);
    console.log("points (number):", points);
    setFinished((prev) => ({ ...prev, [activeQuestion]: true })); */

    /*if (points <= 10) {
      alert("You're doing okay");
    } else {
      alert("You need help");
    }
      */
  }

  const question = questions[activeQuestion];

  return (
    <div className="quiz-wrapper">
      <Header></Header>

      <div>
        {activeQuestion < questions.length ? (
          <div key={question.id}>
            <h3 className="question-text">{question.text}</h3>
            {question.options.map((opt) => (
              <QuizInput
                key={opt.id}
                text={opt.text}
                value={opt.value}
                onChange={handleClick}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2>Fertig!</h2>
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}
