import MultiSlider from "../../components/Multislider/MultiSlider";
import Navbar from "../../components/Navbar/Navbar";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import "./Home.css";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "../../context/Login";
import {
  getAllMovies,
  getPopularMovies,
  getTopRatedMovies,
  getRecommendations,
} from "../../api/movies";
import Loader from "../../components/Loader/Loader";

function Home() {
  const { token } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const [main, setMain] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let limit = 3;
    Promise.all([
      getAllMovies(token),
      getPopularMovies(token),
      getPopularMovies(token, limit),
      getTopRatedMovies(token),
      getRecommendations(token),
    ]).then(
      ([
        moviesData,
        popularData,
        mainData,
        topRatedData,
        recommendationsData,
      ]) => {
        setMovies(moviesData);
        setPopular(popularData);
        setMain(mainData);
        setTopRated(topRatedData);
        setRecommendations(recommendationsData);
        setIsLoading(false);
      }
    );
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="home">
        {isLoading ? <Loader /> : <SimpleSlider movies={main} />}
        <div className="mlti-container">
          Latest Movies
          <hr />
          {isLoading ? <Loader /> : <MultiSlider movies={movies} />}
        </div>
        <div className="mlti-container ">
          Popular
          <hr />
          {isLoading ? <Loader /> : <MultiSlider movies={popular} />}
        </div>
        {isLoading ? <Loader /> : <SimpleSlider movies={main} />}
        <div className="mlti-container ">
          Top Rated Movies
          <hr />
          {isLoading ? <Loader /> : <MultiSlider movies={topRated} />}
        </div>
        <div className="mlti-container ">
          Recommended for you
          <hr />
          {isLoading ? <Loader /> : <MultiSlider movies={recommendations} />}
        </div>
      </div>
    </>
  );
}

export default Home;
