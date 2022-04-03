import "./Home.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
// import store from '../../assets/FSD_Storefront.png';
import yummies from '../../assets/yummies.png';
import starjoint from '../../assets/icon-joint.png';
import storefront from '../../assets/FSD_Storefront.png';

export default function Home() {

  return (
    <div className="home">
      <Header />
      <div className="row">
        <img className="image" src={storefront} />
      </div>
      <div className="promoContainer">
        <Promo
          promoImg={yummies}
          promoText={"Yummies Gummies 2 for $30!"}
          promoHref={"/menu"}
        />
        <div className="promo">
          <a className="glow" href="https://www.google.com/search?q=frozen+smoke+dispensary&rlz=1C5CHFA_enUS991US991&oq=frozen+smoke+dispensary&aqs=chrome..69i57j46i175i199i512j0i512j46i512j0i512j0i10i512l2j0i22i30l3.3905j0j15&sourceid=chrome&ie=UTF-8#lrd=0x873f92e6665ea4c9:0xd60874f3d9ec7e4b,3,,,">
          🌟🌟🌟🌟🌟<br/>Leave a Five-Star Google Review, get a free joint!
            <div className="centter">
              <img src={starjoint} width="75%" height="auto" className="promoImage" alt="promoImg"></img>
            </div>
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}

