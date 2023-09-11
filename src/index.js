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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Neww/>}/>
     <Route path="/mount" element={<App2/>}/>
    </Routes>
     


    </BrowserRouter>
  </React.StrictMode>
);



function Neww() {
  return(
    <>
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
      </>
  )
}