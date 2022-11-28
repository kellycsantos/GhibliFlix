import "../styles/Button.css";
export default function Button({ title, onClick }) {
  return (
    <button className="detailsButton" onClick={onClick}>
      {title}
    </button>
  );
}
