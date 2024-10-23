import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "./stream.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";
import { MovieContext } from "../../context/WatchMovie";

function Stream() {
  const navigate = useNavigate();
  const { decodeToken } = useContext(LoginContext);
  const { movie } = useContext(MovieContext);

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  return (
    <>
      <Navbar />
      <Header
        name={movie.title}
        data={`${movie.year.split("-")[0]} • ${movie.genre[0]}`}
      />
      <div className="stream">
        <section className="content-details">
          <div className="video-container" id="video-container">
            <video className="responsive-iframe" controls>
              <source src={movie.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="movie-description">
            <p className="release-date">Date: {movie.year}</p>
            <p className="description">{movie.description}</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Stream;
