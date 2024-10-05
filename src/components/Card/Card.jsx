import "./Card.css";

const Card = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <button className="watch-list">&#x2B;</button>
      <div className="card-content">
        <h3>{title}</h3>
        <button>Watch Now</button>
      </div>
    </div>
  );
};

export default Card;
