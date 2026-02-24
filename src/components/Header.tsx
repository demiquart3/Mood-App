import "./Header.css";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <div className={`main-header ${className ?? ""}`}>
      <a className="header-links" href="/">
        Home
      </a>
      <a className="header-links" href="/quiz">
        Quiz
      </a>
      <a className="header-links" href="/diary">
        Diary
      </a>
    </div>
  );
}
