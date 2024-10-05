import { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Lord Of The Rings",
      videoUrl: "../../../img-home/LordOfRings.mp4",
    },
    {
      id: 2,
      title: "Interstellar",
      videoUrl: "../../../img-home/Intersteller.mp4",
    },
    {
      id: 3,
      title: "Fast And Furious",
      videoUrl: "../../../img-home/FastAndFurious.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <video
          src={slides[currentIndex].videoUrl}
          className="slide-video"
          controls={false} // Add controls to allow play/pause
          autoPlay={true} // Optional: Autoplay the video
          loop // Optional: Loop the video
          muted={false} // Optional: Start video muted
        >
          Your browser does not support the video tag.
        </video>

        <div className="slide-content">
          <h1>{slides[currentIndex].title}</h1>
          <button className="watch-now-btn">Watch Now</button>
        </div>

        {/* Arrows */}
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
