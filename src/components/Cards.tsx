import { useNavigate } from "react-router-dom";
import * as React from "react";
import "./Cards.css";
import "./App.tsx";

export default function Gallery() {
  const navigate = useNavigate();
  const [cardsState, setCardsState] = React.useState({
    sadCard: false,
    boredCard: false,
    lonelyCard: false,
    angryCard: false,
  });

  function MoodCard(props: { id: string; onMouseOver: () => void }) {
    return (
      <div
        id={props.id}
        onClick={props.onMouseOver}
        className={cardsState ? "cardsState" : "setCardsState"}
      ></div>
    );
  }

  function handleGoBack() {
    navigate("/");
  }

  return (
    <div id="Display">
      <h2 id="GalleryTitle">Choose your mood,</h2>

      <section id="GalleryRow">
        <MoodCard
          id="sadCard"
          onMouseOver={() =>
            setCardsState((prev) => ({
              ...prev,
              sadCard: !prev.sadCard,
            }))
          }
        />
        <MoodCard
          id="boredCard"
          onMouseOver={() =>
            setCardsState((prev) => ({
              ...prev,
              boredCard: !prev.boredCard,
            }))
          }
        />
        <MoodCard
          id="lonelyCard"
          onMouseOver={() =>
            setCardsState((prev) => ({
              ...prev,
              lonelyCard: !prev.lonelyCard,
            }))
          }
        />
        <MoodCard
          id="angryCard"
          onMouseOver={() =>
            setCardsState((prev) => ({
              ...prev,
              angryCard: !prev.angryCard,
            }))
          }
        />
      </section>

      <button id="GoBackButton" onClick={handleGoBack}>
        {"<"}
      </button>
    </div>
  );
}
