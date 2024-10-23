import "./Search.css";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { LoginContext } from "../../context/Login";
import { fetchSearch } from "../../api/fetchSearch";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";

function Search() {
  const navigate = useNavigate();
  const { token, decodeToken } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  useEffect(() => {
    setIsLoading(true);
    fetchSearch(token, page, search)
      .then((data) => {
        setPage(data.page);
        setMovies(data.movies);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch((e) => toast.error(e.message));
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
      <div className="search">
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
            ) : movies && movies.length > 0 ? (
              movies.map((movie) => <Card movie={movie} key={movie._id} />)
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
