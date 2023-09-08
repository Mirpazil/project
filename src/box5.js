import img1 from "./iPhone 13 Mockup label.png";
import img from "./main.png";
import store from "./appstore.png"
import google from "./google.png"
function Box5() {
  return (
    <div className="boxing5">
      <img className="iphone1" src={img}></img>
      <img className="iphone" src={img1}></img>
      <div className="Your">
        <h2>Your all-in-one travel app.</h2>
        <h3>
          Book flights, hotels, trains & rental cars anywhere in the world in
          just seconds. Get real-time flight updates, travel info, exclusive
          deals, and 30% more Trip Coins only on the app!
        </h3>
        <div className="mobile">
          <button>Mobile</button>
          <button className="but">Email</button>
        </div>
        <h5>
          Enter your phone number to receive a text with a link to download the
          app.
        </h5>
        <div className="boxes91">
          <h4>+91 Mobile number</h4>
          <a href="#">
            <button className="search-button" type="submit">
              Search
            </button>
          </a>
        </div>
        <div className="orr">
          <div className="line"></div>
          or
          <div className="line"></div>
        </div>
        <div className="store">
          <img src={store}></img>
          <img src={google}></img>
        </div>
      </div>
    </div>
  );
}

export default Box5;
