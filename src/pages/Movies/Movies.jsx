import React from "react";
import "./Movies.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

function Movies() {
  return (
    <div className="movies">
      <Navbar />
      <Header name="Movies" />
      <div className="movies-container">
        
        <div className="filter-movie">
          <button className="btn-filter">Action </button>
          <button className="btn-filter">Adventure </button>
          <button className="btn-filter">Animation </button>
          <button className="btn-filter">Comedy </button>
          <button className="btn-filter">Crime </button>
          <button className="btn-filter">Documentary </button>
          <button className="btn-filter">Drama </button>
          <button className="btn-filter">Family </button>
          <button className="btn-filter">Fantasy </button>
          <button className="btn-filter">History </button>
          <button className="btn-filter">Horror </button>
          <button className="btn-filter">Music </button>
          <button className="btn-filter">Mystery </button>
          <button className="btn-filter">Romance </button>
          <button className="btn-filter">Science </button>
          <button className="btn-filter">TV Movie </button>
          <button className="btn-filter">Thriller </button>
          <button className="btn-filter">War </button>
        </div>


        <div className="moviescard-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>


      </div>
    </div>
  );
}

export default Movies;
