import { useRef } from "react";
import Card from "../Card/Card";
import "./CardSlider.css";

const CardSlider = ({ cards }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: -300, // Change this value for more or less scrolling
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: 300, // Change this value for more or less scrolling
      behavior: "smooth",
    });
  };

  return (
    <div className="card-slider-container">
      <button className="arrow left-arrow" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="card-slider" ref={sliderRef}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
      <button className="arrow right-arrow" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default CardSlider;
