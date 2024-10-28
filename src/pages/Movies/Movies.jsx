import "./Movies.css";
import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { LoginContext } from "../../context/Login";
import { getPage } from "../../api/movies";
import Loader from "../../components/Loader/Loader";

function Movies() {
  const { token } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = [
    "All movies",
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-fi",
    "TV Movie",
    "Thriller",
  ];

  useEffect(() => {
    setIsLoading(true);
    getPage(token, page, selectedGenre).then((data) => {
      setPage(data.page);
      setMovies(data.movies);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    });
  }, [token, page, selectedGenre]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre === "All movies" ? "" : genre);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <Navbar />
      <Header name="Movies" />
      <div className="movies">
        <div className="movies-container">
          <div className="filter-movie">
            <select
              onChange={(e) => handleGenreChange(e.target.value)}
              value={selectedGenre ? selectedGenre : "All movies"}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div className="moviescard-container">
            {isLoading ? (
              <Loader />
            ) : movies && movies.length > 0 ? (
              movies.map((movie) => <Card movie={movie} key={movie._id} />)
            ) : (
              <p>No movies available 😔</p>
            )}
          </div>
          <div className="pages">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              style={page === 1 ? { display: "none" } : { display: "block" }}
            >
              &lt; Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={page === i + 1 ? "active" : ""}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              style={
                page === totalPages ? { display: "none" } : { display: "block" }
              }
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
