import  { useState } from "react";
import Header from "../../components/Header/Header";
import './Create.css'

function Create() {
  const [selectedRate, setSelectedRate] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenre = (event) => {
    setSelectedGenre(event.target.value);
  };
  const handleRate = (event) => {
    setSelectedRate(event.target.value);
  };

  return (
    <div className="Create">
      <Header name="Create Movie" />
      <div className="Create__content">
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="number" placeholder="Year" />
          <div className="btns">

          <label htmlFor="video-upload" > Choose Video</label>
          <input type="file" id="video-upload" name="video" />


          <label htmlFor="poster-upload" > Choose Poster</label>
          <input type="file" id="poster-upload" name="poster"  />

          </div>

          <div className="cont">


          <div className="genre">
            <label htmlFor="genre">Genre:</label>
            <select id="genre" value={selectedGenre} onChange={handleGenre}>
              <option value="Action ">Action </option>
              <option value="Adventure ">Adventure </option>
              <option value="Animation ">Animation </option>
              <option value="Comedy ">Comedy </option>
              <option value="Crime">Crime </option>
              <option value="Documentary ">Documentary </option>
              <option value="Drama  ">Drama </option>
              <option value="Family ">Family </option>
              <option value="Fantasy ">Fantasy </option>
              <option value="History ">History </option>
              <option value="Horror ">Horror </option>
              <option value="Music  ">Music </option>
              <option value="Mystery  ">Mystery </option>
              <option value="Romance ">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="TV Movie ">TV Movie </option>
              <option value="Thriller ">Thriller</option>
              <option value="War"> War </option>
            </select>
          </div>




            <div className="rate">

            <label htmlFor="rate">Rate:</label>
            <select id="renre" value={selectedRate} onChange={handleRate}>
              <option value="1 ">1 </option>
              <option value="2 ">2 </option>
              <option value="3 ">3 </option>
              <option value="4 ">4 </option>
              <option value="5">5 </option>
              <option value="6 ">6 </option>
              <option value="7  ">7 </option>
              <option value="8 ">8 </option>
              <option value="9 ">9 </option>
              <option value="10 ">10 </option>
             
            </select>

            </div>


          </div>


          <button >create</button>




        </form>
      </div>
    </div>
  );
}

export default Create;
