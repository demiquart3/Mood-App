import "./Button.css";

type CardProps = {
  img: string;
  selected?: boolean;
  className?: string;
  mood: "angry" | "sad" | "happy" | "bored";
  size?: "small" | "large";
  onClick: () => void;
};

export default function MoodCard({
  img,
  mood,
  onClick,
  size = "large",
}: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url(${img})` }}
      className={`card ${mood} ${size}`}
    ></div>
  );
}
