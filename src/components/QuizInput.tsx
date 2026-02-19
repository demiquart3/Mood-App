import "./QuizInput.css";

type QuizProps = {
  text: string;
  selected?: boolean;
  className?: string;
  count: number;
  questionId: string;
  onSelect: (questionId: string, count: number) => void;
};

export default function QuizInput({
  text,
  questionId,
  selected,
  onSelect,
  count,
}: QuizProps) {
  const handleClick = () => onSelect(questionId, count);
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`quiz-input ${selected ? "is-selected" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
