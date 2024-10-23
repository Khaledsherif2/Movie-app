import "./Card.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { fetchMovie } from "../../api/fetchMovie";
import { RemoveFromWatchlist } from "../../api/removeFromWatchlist";
import { AddToWatchlist } from "../../api/addToWatchlist";
import { LoginContext } from "../../context/Login";
import { MovieContext } from "../../context/WatchMovie";
import { toast } from "react-toastify";

const Card = ({ movie, isInWatchList = false, setUpdate }) => {
  const { token } = useContext(LoginContext);
  const { setMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleClick = () => {
    fetchMovie(token, movie._id)
      .then((data) => {
        setMovie(data);
        navigate("/stream");
      })
      .catch((e) => toast.error(e.message));
  };

  let handleWatchList = (movie) => {
    if (isInWatchList) {
      RemoveFromWatchlist(token, movie._id)
        .then((data) => {
          toast.success(data);
          setUpdate(true);
        })
        .catch((e) => toast.error(e.message));
    } else {
      AddToWatchlist(token, movie._id)
        .then((data) => {
          toast.success(data);
        })
        .catch((e) => toast.info(e.message));
    }
  };

  return (
    <div className="card">
      <img src={movie?.poster.src} alt={movie?.title} className="card-image" />
      <button className="watch-list" onClick={() => handleWatchList(movie)}>
        {isInWatchList ? "-" : "+"}
      </button>
      <div className="card-content">
        <h3>{movie?.title}</h3>
        <button onClick={handleClick}>Watch Now</button>
      </div>
    </div>
  );
};

export default Card;
