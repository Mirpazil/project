import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ant from "./ant-design_star-filled.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import moun from "./img/gorod_zdaniia_more_1024780_1280x720.jpg";
// import required modules
import air from "./ic_baseline-flight.png";
import hotel from "./ri_hotel-line.png";
import car from "./cil_car-alt.png";
import treking from "./iconoir_trekking.png";
import byy from "./bytesize_heart.png";
import moun1 from "./img/germaniia_park_sobor_59443_1280x720.jpg";

export default function SwiperApp3() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper90"
      >
        <SwiperSlide>
          <div className="Recently">
            <h3>Recently Viewed</h3>
          </div>
          <div className="MounBox">
            <img src={moun}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Innsbruck</h5>
                <img src={ant}></img>
                <h4>5.0</h4>
              </div>
              <h4>3Days 4 Nights</h4>
              <div className="icons">
                <div>
                  <img src={air}></img>
                  <h4>2 Flights</h4>
                </div>
                <div className="hotel">
                  <img src={hotel}></img>
                  <h4>1 Hotel</h4>
                </div>
                <div className="hotel1">
                  <img src={car}></img>
                  <h4>2 Transfers</h4>
                </div>
                <div>
                  <img src={treking}></img>
                  <h4>4 Activities</h4>
                </div>
              </div>
              <div className="city">
                <ul class="mypoint">
                  <li>
                    <h4 href="#t1">Tour combo with return airport transfer</h4>
                  </li>
                  <li>
                    <h4 href="#t2">City Tour</h4>
                  </li>
                  <li>
                    <h4 href="#t3">Curious Corner</h4>
                  </li>
                </ul>
              </div>
              <div className="perperson">
                <h4>₹88,952</h4>
                <div className="perper">
                  <h6>₹88,952</h6>
                  <h4>Per person</h4>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MounBox">
            <img src={moun1}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Hallstatt</h5>
                <img src={ant}></img>
                <h4>4.8</h4>
              </div>
              <h4>3Days 4 Nights</h4>
              <div className="icons">
                <div>
                  <img src={air}></img>
                  <h4>2 Flights</h4>
                </div>
                <div className="hotel">
                  <img src={hotel}></img>
                  <h4>1 Hotel</h4>
                </div>
                <div className="hotel1">
                  <img src={car}></img>
                  <h4>2 Transfers</h4>
                </div>
                <div>
                  <img src={treking}></img>
                  <h4>4 Activities</h4>
                </div>
              </div>
              <div className="city">
                <ul class="mypoint">
                  <li>
                    <h4 href="#t1">Tour combo with return airport transfer</h4>
                  </li>
                  <li>
                    <h4 href="#t2">City Tour</h4>
                  </li>
                  <li>
                    <h4 href="#t3">Curious Corner</h4>
                  </li>
                </ul>
              </div>
              <div className="perperson">
                <h4>₹88,952</h4>
                <div className="perper">
                  <h6>₹88,952</h6>
                  <h4>Per person</h4>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="summer">
            <h3>Summer Bonanza!</h3>
            <div className="summer1">
              <h5>Enjoy confortable transfers in shared coaches</h5>
              <h5>Choose from 5 flights per week</h5>
              <h5>et a free Rapid Antigen Test at selected hotels</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
