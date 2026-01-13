import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Cards.css";
import "./App.tsx";
import MoodCard from "../components/Card";

export default function Gallery() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState({
    sadCard: false,
    boredCard: false,
    lonelyCard: false,
    angryCard: false,
  });

  function handleGoBack() {
    navigate("/");
  }

  const cards: ("sadCard" | "boredCard" | "lonelyCard" | "angryCard")[] = [
    "sadCard",
    "boredCard",
    "lonelyCard",
    "angryCard",
  ];

  const isCardSelected = cards.some((card) => selected[card]);

  return (
    <div id="Display">
      <h2 id="GalleryTitle">Choose your mood,</h2>

      <section id="GalleryRow">
        {cards.map((card) =>
          !isCardSelected || selected[card] ? (
            <MoodCard
              id={card}
              selected={selected[card]}
              onClick={() =>
                setSelected((prevSelected) => ({
                  ...prevSelected,
                  [card]: !prevSelected[card as keyof typeof prevSelected],
                }))
              }
            />
          ) : undefined
        )}
      </section>

      <button id="GoBackButton" onClick={handleGoBack}>
        {"<"}
      </button>
    </div>
  );
}
