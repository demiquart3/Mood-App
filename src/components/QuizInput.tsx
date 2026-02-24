import "./QuizInput.css";

type QuizProps = {
  text: string;
  selected?: boolean;
  className?: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function QuizInput({
  text,
  selected,
  value,
  onChange,
}: QuizProps) {
  return (
    <div>
      <input
        type="radio"
        className={`quiz-input ${selected ? "is-selected" : ""}`}
        checked={selected}
        value={String(value)}
        onChange={onChange}
      ></input>
      <label>{text}</label>
    </div>
  );
}
