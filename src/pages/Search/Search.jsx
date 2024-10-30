import "./Search.css";
import { useEffect, useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { LoginContext } from "../../context/Login";
import { searchMovies } from "../../api/movies";
import Loader from "../../components/Loader/Loader";

function Search() {
  const { token } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    searchMovies(token, search, page).then((data) => {
      setPage(data.page);
      setMovies(data.movies);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    });
  }, [token, page, search]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <Navbar />
      <Header name="Search" />
      <div
        className="search"
        style={Array.isArray(movies) ? {} : { height: "60vh" }}
      >
        <div className="container">
          <input
            type="text"
            placeholder="Search"
            maxLength="28"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="result">
            {isLoading ? (
              <Loader />
            ) : search ? (
              movies && movies.length > 0 ? (
                movies.map((movie) => <Card movie={movie} key={movie._id} />)
              ) : (
                <p>No result found 🤔</p>
              )
            ) : (
              <p>Enter a movie name 💡</p>
            )}
          </div>
          <div className="pages">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              style={
                page === 1 || !page ? { display: "none" } : { display: "block" }
              }
            >
              &lt; Previous
            </button>
            {page
              ? [...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={page === i + 1 ? "active" : ""}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))
              : ""}
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

export default Search;
