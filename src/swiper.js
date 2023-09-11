import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "./image 19.png";
import Img1 from "./image 35.png";
import Img2 from "./image 34.png";
import Img3 from "./image 36.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";

export default function Swiper1() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper89"
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <img className="img1" src={Img}></img>
          <div>
            <h4>Domestic Flights</h4>
            <h5>Huge savings on flight with trxvl.</h5>
            <h4>Book domestic flights starting @ just ₹1459</h4>
            <button>Book Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img1" src={Img1}></img>
          <div>
            <h4>Domestic Flights</h4>
            <h5>Huge savings on flight with trxvl.</h5>
            <h4>Book domestic flights starting @ just ₹1459</h4>
            <button>Book Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img1" src={Img2}></img>
          <div>
            <h4>Domestic Flights</h4>
            <h5>Huge savings on flight with trxvl.</h5>
            <h4>Book domestic flights starting @ just ₹1459</h4>
            <button>Book Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img1" src={Img3}></img>
          <div>
            <h4>Domestic Flights</h4>
            <h5>Huge savings on flight with trxvl.</h5>
            <h4>Book domestic flights starting @ just ₹1459</h4>
            <button>Book Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
