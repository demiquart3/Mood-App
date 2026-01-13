type CardProps = {
  id: String;
  selected: Boolean;
  onClick: () => void;
};

export default function MoodCard({ id, selected, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`card ${selected ? "card--selected" : ""}`}
      style={{
        padding: 12,
        marginBottom: 8,
        border: "1px solid #ccc",
        borderRadius: 8,
        background: selected ? "#3688c6ff" : "#b01f1fff",
        cursor: "pointer",
      }}
    >
      {id}
    </div>
  );
}
