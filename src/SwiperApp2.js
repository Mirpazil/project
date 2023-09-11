import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ant from "./ant-design_star-filled.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import moun from "./monu.png";
// import required modules
import air from "./ic_baseline-flight.png";
import hotel from "./ri_hotel-line.png";
import car from "./cil_car-alt.png";
import treking from "./iconoir_trekking.png";
import byy from "./bytesize_heart.png"
import moun1 from "./img/ozero_gory_pejzazh_962366_1920x1080.jpg"
import moun2 from "./img/gora_ozero_otrazhenie_812192_1920x1080.jpg"
import moun3 from "./img/gory_ozero_les_847736_1920x1080.jpg"
import moun4 from "./img/holmy_doma_zdaniia_999170_1280x720.jpg"
import moun5 from "./img/stena_derevia_tropa_965506_1280x720.jpg"

export default function SwiperApp2() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper88"
      >
        <SwiperSlide>
          <div className="MounBox">
            <img src={moun}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Swiss Apls</h5>
                <img src={ant}></img>
                <h4>4.7</h4>
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
                <h4>4.5</h4>
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
            <img src={moun2}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Faroe Island</h5>
                <img src={ant}></img>
                <h4>4.7</h4>
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
            <img src={moun3}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Innsbruck</h5>
                <img src={ant}></img>
                <h4>4.9</h4>
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
            <img src={moun4}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Maldives</h5>
                <img src={ant}></img>
                <h4>4.7</h4>
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
            <img src={moun5}></img>
            <img className="byicon" src={byy}></img>
            <div className="Swiss">
              <div className="icons1">
                <h5>Fussen</h5>
                <img src={ant}></img>
                <h4>4.7</h4>
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
      </Swiper>
    </>
  );
}
