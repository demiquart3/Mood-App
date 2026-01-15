import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Cards.css";
import "./App.tsx";
import MoodCard from "../components/Card";

export default function Gallery() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name") ?? "stranger";
  // const cardSelected = localStorage.getItem("selected") ??

  // one value from localStorage
  const [selected, setSelected] = React.useState({
    sadCard: false,
    boredCard: false,
    happyCard: false,
    angryCard: false,
  });

  function handleGoBack() {
    navigate("/");
  }

  const cards: ("sadCard" | "boredCard" | "happyCard" | "angryCard")[] = [
    "sadCard",
    "boredCard",
    "happyCard",
    "angryCard",
  ];

  const cardImages = {
    sadCard: "/src/images/sad.png",
    boredCard: "/src/images/bored.jpg",
    happyCard: "/src/images/happy.jpg",
    angryCard: "/src/images/angry.jpg",
  };

  React.useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  const isCardSelected = cards.some((card) => selected[card]);

  return (
    <div id="Display">
      <h2 id="GalleryTitle">Choose your mood, {name}</h2>

      <section id="GalleryRow">
        {cards.map((card) =>
          !isCardSelected || selected[card] ? (
            <MoodCard
              img={cardImages[card]}
              id={card}
              key={card}
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
        {"< Go Back"}
      </button>
    </div>
  );
}
