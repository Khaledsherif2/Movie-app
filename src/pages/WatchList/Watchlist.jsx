import "./Watchlist.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";
import { fetchWatchlist } from "../../api/fetchWatchlist";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";

function Watchlist() {
  const navigate = useNavigate();
  const { token } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, [token, navigate]);

  useEffect(() => {
    setIsLoading(true);
    fetchWatchlist(token)
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
        setUpdate(false);
      })
      .catch((e) => toast.error(e.message));
  }, [token, update]);

  return (
    <div className="Watch">
      <Navbar />
      <Header name="Watch List" />
      <div className="watchlist-card-container">
        {isLoading ? (
          <Loader />
        ) : movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              movie={movie}
              key={movie._id}
              isInWatchList={true}
              setUpdate={setUpdate}
            />
          ))
        ) : (
          <p>Add movies to your watchlist 📺</p>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
