import "./App.css";
import imgk from "./akar-icons_calendar.svg";
import imgkk from "./akar-icons_search.svg";
import imgp from "./fontisto_male.svg";
import img4 from "./image 4.png";
import img16 from "./image 16.png";
import img3 from "./imagemoun.png";
import img13 from "./image 13.png";
import img17 from "./image 17.png";
import img10 from "./image 10.png";
import img5 from "./image 5.png";
import img12 from "./image 12.png";
import img15 from "./image 15.png";
import img8 from "./image 8.png";
import Modal from "./modal";
import React, { useState } from "react";
import Check from "./Check";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckinChange = (e) => {
    setCheckinDate(e.target.value);
  };

  const handleCheckoutChange = (e) => {
    setCheckoutDate(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>trxvl.</h1>
        <nav class="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Stays</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#" onClick={toggleModal}>
                Sign Up
              </a>
              <Modal isOpen={showModal} toggleModal={toggleModal} />
            </li>
          </ul>
        </nav>
      </header>
      <div className="Main">
        <main className="Main-app">
          <div className="box1">
            <h1>The whole world awaits.</h1>
          </div>
          <div className="box2">
            <img className="search_img" src={imgkk}></img>
            <input
              type="text"
              name="text"
              className="search"
              placeholder="Search destinations, hotels"
            ></input>
            <div className="ppp">
              <button className="checkin" onClick={openModal}>
                <img src={imgk} className="App-logo" alt="logo" />
                <p>Check in {checkinDate}</p>--<p>Check out {checkoutDate}</p>
              </button>
              <Check
                isOpen={isModalOpen}
                onClose={closeModal}
                checkinDate={checkinDate}
                onCheckinChange={handleCheckinChange}
                checkoutDate={checkoutDate}
                onCheckoutChange={handleCheckoutChange}
              />
            </div>

            <button>
              <img src={imgp} className="App-logo" alt="logo" />1 room, 2 adults
            </button>
            <a href="#">
              <button className="search-button" type="submit">
                Search
              </button>
            </a>
          </div>
          <div className="box17">
            <img className="search_img" src={imgkk}></img>
            <input
              type="text"
              name="text"
              className="search"
              placeholder="Search destinations, hotels"
            ></input>
          </div>
          <div className="box18">
            <div className="ppp">
              <button className="checkin" onClick={openModal}>
                <img src={imgk} className="App-logo" alt="logo" />
                <p>Check in {checkinDate}</p>--<p>Check out {checkoutDate}</p>
              </button>
              <Check
                isOpen={isModalOpen}
                onClose={closeModal}
                checkinDate={checkinDate}
                onCheckinChange={handleCheckinChange}
                checkoutDate={checkoutDate}
                onCheckoutChange={handleCheckoutChange}
              />
            </div>
          </div>
          <div className="box19">
            <button>
              <img src={imgp} className="App-logo" alt="logo" />1 room, 2 adults
            </button>
          </div>
          <div className="box20">
            <a href="#">
              <button className="search-button" type="submit">
                Search
              </button>
            </a>
          </div>
          <div className="box3">
            <h2>Top categories</h2>
            <div className="boxing">
              <div>
                <img src={img4}></img>
                <p>Beaches</p>
              </div>
              <div>
                <img src={img16}></img>
                <p>Deserts</p>
              </div>
              <div>
                <a href="#">
                  <img src={img3}></img>
                  <p>Mountains</p>
                </a>
              </div>
              <div>
                <img src={img13}></img>
                <p>Iconic Cities</p>
              </div>
              <div>
                <img src={img17}></img>
                <p>Houseboats</p>
              </div>
              <div>
                <img src={img10}></img>
                <p>Countryside</p>
              </div>
              <div>
                <img src={img5}></img>
                <p>Camping</p>
              </div>
              <div>
                <img src={img12}></img>
                <p>Castles</p>
              </div>
              <div>
                <img src={img15}></img>
                <p>Skiing</p>
              </div>
              <div>
                <a href="#">
                  <img src={img8}></img>
                  <p>Tropical</p>
                </a>
              </div>
            </div>
          </div>

          <div className="box4">
            <h3>Top Vacation Destinations</h3>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
