import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "./Frame 31.png";
import Img1 from "./Frame 30.png";
import Img2 from "./Frame .png";
import Img3 from "./image 19.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";

export default function swiper2() {
  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper2"
        breakpoints={{
          380: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="qwer">
            <img className="img1" src={Img}></img>
            <div>
              <h5>India</h5>
              <h4>Travel community</h4>
              <h4>Book domestic flights starting @ just ₹1459</h4>
              <h4>155,073 travelers</h4>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="qwer">
            <img className="img1" src={Img1}></img>
            <div>
              <h5>Travel Talk</h5>
              <h4>Travel community</h4>
              <h4>Book domestic flights starting @ just ₹1459</h4>
              <h4>155,073 travelers</h4>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="qwer">
            <img className="img1" src={Img2}></img>
            <div>
              <h5>Beach</h5>
              <h4>Travel community</h4>
              <h4>Book domestic flights starting @ just ₹1459</h4>
              <h4>155,073 travelers</h4>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="qwer">
            <img className="img1" src={Img3}></img>
            <div>
              <h5>Mountains</h5>
              <h4>Travel community</h4>
              <h4>Book domestic flights starting @ just ₹1459</h4>
              <h4>155,073 travelers</h4>
              <button>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
