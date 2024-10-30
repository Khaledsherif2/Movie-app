import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from "../Card/Card";

export default function MultiSlider({ movies }) {
  return (
    <div className="mlti-swip">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <Card movie={movie} />
            </SwiperSlide>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </Swiper>
    </div>
  );
}
