import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SimpleSlider.css";
import { Navigation } from "swiper/modules";

export default function SimpleSlidesadfasdfr({ movies }) {
  return (
    <div className="swip">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <div className="vid">
                <video
                  src={movie.video.src}
                  className="slide-video"
                  controls={false}
                  autoPlay={true}
                  loop
                  muted={true}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="info">
                  <h3>{movie.title}</h3>
                  <button>Watch list</button>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </Swiper>
    </div>
  );
}
