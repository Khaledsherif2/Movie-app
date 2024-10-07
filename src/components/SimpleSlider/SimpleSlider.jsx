import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';
import "./SimpleSlider.css";

import { Navigation } from "swiper/modules";

export default function SimpleSlidesadfasdfr() {
  return (
    <div className="swip">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="vid">
            {" "}
            <video
              src="../../../public/img-home/Intersteller.mp4"
              className="slide-video"
              controls={false}
              autoPlay={true}
              loop
              muted={true}
            >
              Your browser does not support the video tag.
            </video>
            <div className="info">
              <h3>Interstellar</h3>
              <button>Watch list</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="vid">
            {" "}
            <video
              src="../../../public/img-home/FastAndFurious.mp4"
              className="slide-video"
              controls={false}
              autoPlay={true}
              loop
              muted={true}
            >
              Your browser does not support the video tag.
            </video>
            <div className="info">
              <h3>Interstellar</h3>
              <button>Watch list</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="vid">
            {" "}
            <video
              src="../../../public/img-home/FastAndFurious.mp4"
              className="slide-video"
              controls={false}
              autoPlay={true}
              loop
              muted={true}
            >
              Your browser does not support the video tag.
            </video>
            <div className="info">
              <h3>Interstellar</h3>
              <button>Watch list</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
