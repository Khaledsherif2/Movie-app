import "./Admin.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card";
import { LoginContext } from "../../context/Login";
import {
  getPendingMovies,
  moderateMovies,
  updateMovie,
  deleteMovie,
  searchMovies,
} from "../../api/movies";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

function Admin() {
  const navigate = useNavigate();
  const { token, decodeToken } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState();
  const [movies, setMovies] = useState([]);
  const [srchMovies, setSrchMovies] = useState([]);
  const [status, setStatus] = useState(false);
  const [update, setUpdate] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    genre: "",
    popularity: "",
    rate: "",
    year: "",
  });

  useEffect(() => {
    setIsLoading(true);
    getPendingMovies(token).then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, [token, status]);

  useEffect(() => {
    setIsLoading(true);
    searchMovies(token, search).then((data) => {
      setSrchMovies(data.movies);
      setIsLoading(false);
    });
  }, [token, search]);

  const HandleMovie = (id, status) => {
    moderateMovies(token, id, status).then((data) => {
      toast.success(data);
      setStatus(true);
    });
  };

  const handleDelete = (id) => {
    deleteMovie(token, id).then(() => {
      toast.success("Movie deleted successfully");
      setEditingMovie(null);
    });
  };

  const handleUpdateClick = (movie) => {
    setEditingMovie(movie._id);
    setFormValues({
      title: movie.title,
      description: movie.description,
      genre: movie.genre,
      popularity: movie.popularity,
      rate: movie.rate,
      year: movie.year,
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateMovie(token, editingMovie, formValues).then(() => {
      toast.success("Movie updated successfully");
      setEditingMovie(null);
    });
  };

  return (
    <>
      <Navbar />
      <Header name="Admin" />
      <div className="admin">
        <div className="btns">
          <button className="btn" onClick={() => navigate("/create")}>
            Create Movie
          </button>
          <button className="btn" onClick={() => setUpdate(true)}>
            Update Movie
          </button>
        </div>
        <div
          className="admin-container"
          style={{ height: movies && movies.length === 0 ? "80vh" : "auto" }}
        >
          {editingMovie ? (
            <form onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
                placeholder="Movie Title"
              />
              <input
                type="text"
                value={formValues.description}
                onChange={(e) =>
                  setFormValues({ ...formValues, description: e.target.value })
                }
                placeholder="Movie Description"
              />
              <input
                type="text"
                value={formValues.genre}
                onChange={(e) =>
                  setFormValues({ ...formValues, genre: e.target.value })
                }
                placeholder="Movie Genre"
              />
              <input
                type="text"
                defaultValue={formValues.popularity}
                onChange={(e) =>
                  setFormValues({ ...formValues, poularity: e.target.value })
                }
                placeholder="Movie Popularity"
              />
              <input
                type="text"
                value={formValues.rate}
                onChange={(e) =>
                  setFormValues({ ...formValues, rate: e.target.value })
                }
                placeholder="Movie Rate"
              />
              <input
                type="text"
                value={formValues.year}
                onChange={(e) =>
                  setFormValues({ ...formValues, year: e.target.value })
                }
                placeholder="Movie Year"
              />
              <div>
                <button type="submit">Update Movie</button>
                <button type="button" onClick={() => setEditingMovie(null)}>
                  Cancel
                </button>
              </div>
            </form>
          ) : update ? (
            <div className="movies">
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search"
                  maxLength="28"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {isLoading ? (
                <Loader />
              ) : srchMovies && srchMovies.length > 0 ? (
                srchMovies.map((movie) => (
                  <div className="movie" key={movie._id}>
                    <Card movie={movie} />
                    <div className="btn">
                      <button onClick={() => handleUpdateClick(movie)}>
                        update
                      </button>
                      <button onClick={() => handleDelete(movie._id)}>
                        delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No movies available</p>
              )}
            </div>
          ) : (
            <>
              <div className="info">
                <h5 className="user">{decodeToken?.totalUsers}</h5>
                <h5 className="mov">{decodeToken?.totalMovies}</h5>
              </div>
              <div className="admin-card">
                {isLoading ? (
                  <Loader />
                ) : movies && movies.length > 0 ? (
                  movies.map((movie) => (
                    <div className="movie" key={movie._id}>
                      <Card movie={movie} />
                      <div className="btn">
                        <button
                          onClick={() => HandleMovie(movie._id, "approved")}
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => HandleMovie(movie._id, "rejected")}
                        >
                          reject
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No pending movies available</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
