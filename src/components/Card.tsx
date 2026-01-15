type CardProps = {
  img: string;
  selected: boolean;
  className?: string;
  key: string;
  id: string;
  onClick: () => void;
};

export default function MoodCard({ img, id, selected, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url(${img})` }}
      className={`card ${id} ${selected ? "card--selected" : ""}`}
    ></div>
  );
}
