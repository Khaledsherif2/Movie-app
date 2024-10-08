import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="../../../public/img-home/Alaaeldin.jpg"
        alt=""
        className="card-image"
      />
      <button className="watch-list">&#x2B;</button>
      <div className="card-content">
        <h3>Alaaeldin</h3>
        <button>Watch Now</button>
      </div>
    </div>
  );
};

export default Card;
