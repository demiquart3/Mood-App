import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const [dark, setDark] = React.useState(false);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleGoToCards() {
    navigate("/cards");
  }

  return (
    <div id="display" className={dark ? "dark" : ""}>
      <div id="InputContainer" className={dark ? "dark" : ""}>
        <h1>Hi {name || "stranger"}! What's your name?</h1>
        <input
          id="NameInput"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button
          id="GreetingButton"
          onClick={() =>
            !name ? window.alert("Enter your name!") : handleGoToCards()
          }
        >
          Click me, {name || "stranger"}!
        </button>
        <button id="ToggleButton" onClick={() => setDark((prev) => !prev)}>
          Change Mode
        </button>
      </div>
    </div>
  );
}

export default App;
