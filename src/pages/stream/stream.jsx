import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MultiSlider from "../../components/Multislider/MultiSlider";
import "./stream.css";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "../../context/Login";
import { MovieContext } from "../../context/WatchMovie";
import Loader from "../../components/Loader/Loader";
import { getRecommendations } from "../../api/movies";

function Stream() {
  const { token } = useContext(LoginContext);
  const { movie } = useContext(MovieContext);
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getRecommendations(token).then((data) => {
      setRecommendations(data);
      setIsLoading(false);
    });
  }, [token]);

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
        <div className="mlti-container ">
          Recommended for you
          <hr />
          {isLoading ? <Loader /> : <MultiSlider movies={recommendations} />}
        </div>
      </div>
    </>
  );
}

export default Stream;
