import "../styles/CardMovie.css";

export default function CardMovie({ title, image, onClick, height, width }) {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{ height: height, width: width }}
    >
      <div className="img-container">
        <img src={image} />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
