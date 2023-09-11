import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import image from "./im.png";

export default function SwiperJ() {
  return (
    <>
      <div className="boxing3">
        <div className="offers">
          <h3>Browse by property type</h3>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          380: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          780: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="imgbox">
            <h6>Hotels</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgbox1">
            <h6>Apartments</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgbox2">
            <h6>Resorts</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgbox3">
            <h6>Glass lux</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgbox4">
            <h6>Villas</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgbox5">
            <h6>Apartments</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
