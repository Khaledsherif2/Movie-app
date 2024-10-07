import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from "../Card/Card";

export default function MultiSlider() {
  return (
    <div className="mlti-swip">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
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
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
