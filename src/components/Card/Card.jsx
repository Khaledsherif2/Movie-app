import "./Card.css";
import { useNavigate } from "react-router";

function Card() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="img">
        <img src="../../images/alahly.jpg"></img>
      </div>
      <div className="details">
        <h4 className="name">Alahly</h4>
        <p>Quality: HD</p>
        <button onClick={() => navigate("/watch")}>Watch Now</button>
      </div>
    </div>
  );
}

export default Card;
