import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SimpleSlider.css";
import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { LoginContext } from "../../context/Login";
import { toast } from "react-toastify";
import { addToWatchlist } from "../../api/watchlist";

export default function SimpleSlidesadfasdfr({ movies }) {
  const { token } = useContext(LoginContext);

  let handleWatchList = (movie) => {
    addToWatchlist(token, movie._id)
      .then((data) => {
        toast.success(data);
      })
      .catch((e) => toast.info(e.message));
  };
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
                  <button onClick={() => handleWatchList(movie)}>
                    Watch list
                  </button>
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
