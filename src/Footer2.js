import facebook from "./facebook.png";
import insta from "./instagram.png";
import twitter from "./twitter.png";
import yotube from "./youtube.png";
function Footer() {
  return (
    <footer>
      <h2>Trxvl.</h2>
      <div className="media">
        <div className="first">
          <li>
            <a>Seslendirme ve Alt Jazz</a>
          </li>
          <li>
            <a>Media Market</a>
          </li>
          <li>
            <a>Gillie</a>
          </li>
          <li>
            <a>Size Last</a>
          </li>
          <div className="helmet">Helmet KOD</div>
          <h4>© 1997-2021 Netflix, Inc.</h4>
        </div>
        <div className="first1">
          <li>
            <a>Self Betimes</a>
          </li>
          <li>
            <a>Yatırımcı İlişkileri</a>
          </li>
          <li>
            <a>Basal Himmler</a>
          </li>
        </div>
        <div className="first2">
          <li>
            <a>Yard Market</a>
          </li>
          <li>
            <a>Is İmkanları</a>
          </li>
          <li>
            <a>Car Tercihleri</a>
          </li>
        </div>
        <div className="first3">
          <li>
            <a>Hedge Karla</a>
          </li>
          <li>
            <a>Mullein Koşulları</a>
          </li>
          <li>
            <a>Autumnal Bulgier</a>
          </li>
          <div className="soc">
            <a href="#">
              <img src={facebook}></img>
            </a>
            <a href="#">
              <img src={insta}></img>
            </a>

            <a href="#">
              <img src={yotube}></img>
            </a>

            <a href="#">
              <img src={twitter}></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
