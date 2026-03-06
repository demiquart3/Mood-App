import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Cards.css";
import "./App.tsx";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Diary() {
  type Question = {
    text: string;
    key: number;
  };

  const questions: Question[] = [
    {
      key: 1,
      text: "What did you feel today?",
    },
    {
      key: 2,
      text: "What did you do today?",
    },
    {
      key: 3,
      text: "Is there is something that made you feel better today?",
    },
  ];
  const [diary, setDiary] = React.useState([""]);
  const [newDiary, setNewDiary] = React.useState("");

  const [question, setQuestion] = React.useState([]);

  (Array.from({ length: questions.length }, () => null), []);

  const [activeQuestion, setActiveQuestion] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(diary));
  }, [diary]);

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNewDiary(e.currentTarget.value);
    setActiveQuestion(activeQuestion + 1);
  }

  console.log("active question", activeQuestion);
  console.log("diary", diary);

  function addDiaryLog() {
    setDiary((prev) => [...prev, newDiary]);
    setNewDiary("");
  }

  console.log("new diary", newDiary);

  function deleteDiaryLog() {
    setDiary([]);
  }

  function changeDiaryLog() {}

  const isQuestionActive = questions[activeQuestion];

  return (
    <div className="diary">
      <Header />

      <div className="diary-grid">
        <h2 className="title">Welcome to your Diary</h2>

        <p className="subtitle">
          Here you can add the date and what you felt on a particular day and
          save it to track changes.
        </p>

        {}
        <form className="form">
          <label htmlFor="start" className="label">
            Today's date:
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            defaultValue="2026-07-22"
            min="2026-01-01"
            max="2026-12-31"
            className="input"
          />

          {activeQuestion < questions.length ? (
            <label htmlFor="feelings" className="label">
              What did you feel?
            </label>
          ) : null}

          <input
            id="feelings"
            type="text"
            className="input"
            value={newDiary}
            onChange={handleSubmit}
            placeholder="Write a short note…"
          />
          <div>
            <div className="diaryTextQuestion1">
              <p>{diary}</p>
            </div>
            <div className="diaryTextQuestion2">
              <p></p>
            </div>
            <div className="diaryTextQuestion3">
              <p></p>
            </div>
          </div>

          {}
          <div className="actions">
            <Button size="large" buttonName="Save" onClick={addDiaryLog} />
            <Button size="large" buttonName="Delete" onClick={deleteDiaryLog} />
          </div>
        </form>
      </div>
    </div>
  );
}
