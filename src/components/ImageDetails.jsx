import "../styles/MovieDetails.css";

export default function CardMovie({ image, alt }) {
  return (
    <div className="imgContainer">
      <img className="movieImg" src={image} alt={alt} />
    </div>
  );
}
