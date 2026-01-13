import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const [dark, setDark] = React.useState(false);
  const [inputValid, setInputValid] = React.useState<string | undefined>(
    undefined
  ); // inputValid

  const navigate = useNavigate();

  // conditions here from onSubmit
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleGoToCards() {
    navigate("/cards");
  }

  const setError = (message: string | undefined) => {
    setInputValid(message);
  };

  //inputValid?
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!name) {
        setError("Enter your name!");
        return;
      } else if (name.length <= 1) {
        setError("The name is too short!");
        return;
      } else if (name.trim() !== "" && Number.isFinite(Number(name.trim()))) {
        setError("Your name must have letters!");
        return;
      } else {
        setError(undefined);
        handleGoToCards();
      }
    },
    [name, handleGoToCards] // name? debug
  );

  /*function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name) {
      setError("Enter your name!");
      return;
    }
    if (name.length <= 1) {
      setError("The name is too short!");
      setName("");
      return;
    }
    if (name.trim() !== "" && Number.isFinite(Number(name.trim()))) {
      setError("Your name must have letters!");
      setName("");
      return;
    }
    setError(undefined);
    handleGoToCards();
  } */

  // onSubmit?
  return (
    <div id="display" className={dark ? "dark" : ""}>
      <div id="InputContainer" className={dark ? "dark" : ""}>
        <h1>Hi {name || "stranger"}! What&apos;s your name?</h1>

        <form onSubmit={handleSubmit}>
          <input
            id="NameInput"
            className={inputValid ? "error" : "noerror"}
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          <p id="InputParagraph" className={inputValid ? "error" : "noerror"}>
            {inputValid}
          </p>
          <button // create a form, type submit onSubmit, if inputError, useCallback (handle), inputError dependency
            id="GreetingButton"
            // type="submit"
            // disabled={Boolean(inputValid)}
          >
            {`Click me, ${name || "stranger"}!`}
          </button>
        </form>

        <button id="ToggleButton" onClick={() => setDark((prev) => !prev)}>
          Change Mode
        </button>
      </div>
    </div>
  );
}

export default App;
