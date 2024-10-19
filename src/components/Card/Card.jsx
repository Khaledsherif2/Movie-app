import "./Card.css";
import { useNavigate } from "react-router";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        src="../../../img-home/Alaaeldin.jpg"
        alt=""
        className="card-image"
      />
      <button className="watch-list">&#x2B;</button>
      <div className="card-content">
        <h3>Alaaeldin</h3>
        <button onClick={() => navigate("/stream")}>Watch Now</button>
      </div>
    </div>
  );
};

export default Card;
