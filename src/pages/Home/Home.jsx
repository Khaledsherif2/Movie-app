import MultiSlider from "../../components/Multislider/MultiSlider";
import Navbar from "../../components/Navbar/Navbar";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import "./Home.css";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";
import { fetchMovies } from "../../api/fetchAll";
import { fetchPopular } from "../../api/fetchPopular";
import { fetchTopRated } from "../../api/fetchTopRated";
import { fetchRecommendations } from "../../api/fetchRecommendations";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";

function Home() {
  const { token, decodeToken } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [main, setMain] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  useEffect(() => {
    setIsLoading(true);
    let limit = 3;
    Promise.all([
      fetchMovies(token),
      fetchPopular(token),
      fetchPopular(token, limit),
      fetchTopRated(token),
      fetchRecommendations(token),
    ])
      .then(
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
      )
      .catch((e) => {
        toast.error(e.message);
        setIsLoading(false);
      });
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
