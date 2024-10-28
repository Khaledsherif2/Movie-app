import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "./Create.css";
import { toast } from "react-toastify";
import { LoginContext } from "../../context/Login";
import { addMovie } from "../../api/movies";

function Create() {
  const { token } = useContext(LoginContext);
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [poster, setPoster] = useState(null);
  const [video, setVideo] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [inputFields, setInputFields] = useState({
    title: "",
    poster: null,
    description: "",
    rate: "",
    popularity: "",
    genre: [],
    year: "",
    video: null,
  });

  const handleGenre = (e) => {
    const value = e.target.value;
    if (!selectedGenres.includes(value)) {
      const updatedGenres = [...selectedGenres, value];
      setSelectedGenres(updatedGenres);
      setInputFields((prevFields) => ({
        ...prevFields,
        genre: updatedGenres,
      }));
    }
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handlePoster = (e) => {
    const file = e.target.files[0];
    setPoster(file);
    setInputFields((prevFields) => ({
      ...prevFields,
      poster: file,
    }));
  };

  const handleVideo = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setInputFields((prevFields) => ({
      ...prevFields,
      video: file,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, rate, popularity, year, poster, video, genre } =
      inputFields;
    if (
      !title ||
      !description ||
      !rate ||
      !popularity ||
      !year ||
      !poster ||
      !video ||
      genre.length === 0
    ) {
      toast.error("Please fill in all the fields");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rate", +rate);
    formData.append("popularity", +popularity);
    formData.append("year", year);
    formData.append("poster", poster);
    formData.append("video", video);
    genre.forEach((g) => {
      formData.append("genre", g);
    });
    const message = await addMovie(token, formData, setUploadProgress);
    toast.success(message);
    navigate("/movies");
  };
  return (
    <>
      <Navbar />
      <Header name="Create Movie" />
      <div className="create">
        <div className="createContent">
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <input
              type="text"
              name="popularity"
              placeholder="popularity"
              onChange={handleChange}
            />
            <input
              type="text"
              name="rate"
              placeholder="Rate"
              onChange={handleChange}
            />
            <input type="date" name="year" onChange={handleChange} />
            <div className="btns">
              <label htmlFor="poster" className={`${poster ? "uploaded" : ""}`}>
                Choose Poster
              </label>
              <input
                type="file"
                id="poster"
                name="poster"
                accept="image/*"
                onChange={handlePoster}
              />
              <label htmlFor="video" className={`${video ? "uploaded" : ""}`}>
                Choose Video
              </label>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                onChange={handleVideo}
              />
            </div>
            <div className="cont">
              <div className="genre">
                <label htmlFor="genre">Genre:</label>
                <select id="genre" onChange={handleGenre}>
                  <option>Genre</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="animation">Animation</option>
                  <option value="comedy">Comedy</option>
                  <option value="crime">Crime</option>
                  <option value="documentary">Documentary</option>
                  <option value="drama">Drama</option>
                  <option value="family">Family</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="history">History</option>
                  <option value="horror">Horror</option>
                  <option value="music">Music</option>
                  <option value="mystery">Mystery</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Science Fiction</option>
                  <option value="tv movie">TV Movie</option>
                  <option value="thriller">Thriller</option>
                  <option value="war">War</option>
                </select>
                {selectedGenres.join(", ")}
              </div>
            </div>
            <button type="submit">create</button>
            {uploadProgress > 0 && (
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress}%
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
