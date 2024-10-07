import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import Card from '../Card/Card';

export default function MultiSlider() {
  return (
    <div className='mlti-swip'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay to modules
        className="mySwiper"
        breakpoints={{
          // When the window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // When the window width is >= 768px
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
        <SwiperSlide> <Card/> </SwiperSlide>
      </Swiper>
    </div>
  );
}
