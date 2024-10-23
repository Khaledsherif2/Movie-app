import "./CardMov.css";

const CardMov = ({ movie }) => {
  return (
    <div className="cardMov">
      <img src={movie?.poster.src} alt={movie?.title} />
      <div className="cardMov-text">
        <h4>{movie?.title}</h4>
        <p>{movie?.description}</p>
      </div>
    </div>
  );
};

export default CardMov;
