import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Main from "./main";
import Main1 from "./main1";
import Swiper1 from "./swiper";
import SwiperJ from "./swiper1";
import Box4 from "./box4";
import Swiper2 from "./swiper2";
import Box5 from "./box5";
import Footer from "./footer";
import Modal from "./modal";
import Check from "./Check";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Main />
    <Main1 />
    <Swiper1 />
    <SwiperJ />
    <Box4 />
    <Swiper2 />
    <Box5 />
    <Footer />
    <Modal />
    <Check />
  </React.StrictMode>
);
