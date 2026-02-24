import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Cards.css";
import "./App.tsx";
import MoodCard from "../components/Card";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Diary() {
  type Question = {
    id: "q1" | "q2" | "q3";
    text: string;
  }[];

  const [diary, setDiary] = React.useState([""]);
  const [newDiary, setNewDiary] = React.useState("");

  const [activeQuestion, setActiveQuestion] =
    React.useState<Question["id"]>("q1");

  React.useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(diary));
  }, [diary]);

  const questions: Question[] = [
    {
      id: "q1",
      text: "What did you feel today?",
    },
    {
      id: "q2",
      text: "What did you do today?",
    },
    {
      id: "q3",
      text: "Is there is something that made you feel better today?",
    },
  ];

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNewDiary(e.currentTarget.value);
  }

  function addDiaryLog() {
    setDiary((prev) => [...prev, newDiary]);
    setNewDiary("");
  }

  function deleteDiaryLog() {
    setDiary([]);
  }

  function changeDiaryLog() {}

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

          <label htmlFor="feelings" className="label">
            What did you feel?
          </label>

          <input
            id="feelings"
            type="text"
            className="input"
            value={newDiary}
            onChange={handleSubmit}
            placeholder="Write a short note…"
          />

          <ul>
            {" "}
            {diary.map((d, index) => (
              <li key={index}>
                <span>{d}</span>
              </li>
            ))}
          </ul>

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
