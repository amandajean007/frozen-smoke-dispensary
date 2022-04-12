import "./Home.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';

import yummies from '../../assets/yummies.png';
import starjoint from '../../assets/icon-joint.png';
import doobie_holder from '../../assets/FSD_Merch/doobie_holder.PNG';
import bowl_prep from '../../assets/FSD_Merch/bowl_prep.PNG';
import dugout from '../../assets/FSD_Merch/dugout.PNG';
import six from '../../assets/FSD_Merch/six.PNG';
import sixteen from '../../assets/FSD_Merch/sixteen.PNG';
import sixteen2 from '../../assets/FSD_Merch/sixteen2.PNG';
import sixteen3 from '../../assets/FSD_Merch/sixteen3.PNG';
import sixteen4 from '../../assets/FSD_Merch/sixteen4.PNG';
import storage_pipe from '../../assets/FSD_Merch/storage_pipe.PNG';
import tray_large from '../../assets/FSD_Merch/tray_large.PNG';
import tray_medium from '../../assets/FSD_Merch/tray_medium.PNG';
import tray_small from '../../assets/FSD_Merch/tray_small.PNG';
import mug_white from '../../assets/FSD_Merch/mug_white.PNG';
import mug_black from '../../assets/FSD_Merch/mug_black.PNG';
import mug_blue from '../../assets/FSD_Merch/mug_blue.PNG';


export default function Home() {

  return (
    <div className="home">
      <Header />
      <div className="row storefront" id="banner"></div>
      <div className="promoContainer">
        <div className="promo">
          <a className="glow" href="https://www.google.com/search?q=frozen+smoke+dispensary&rlz=1C5CHFA_enUS991US991&oq=frozen+smoke+dispensary&aqs=chrome..69i57j46i175i199i512j0i512j46i512j0i512j0i10i512l2j0i22i30l3.3905j0j15&sourceid=chrome&ie=UTF-8#lrd=0x873f92e6665ea4c9:0xd60874f3d9ec7e4b,3,,,">
            <div className="centter">
              <img src={starjoint} width="75%" height="auto" className="promoImage" alt="promoImg" id="glow"></img>
            </div>
            <div className="white">
              🌟🌟🌟🌟🌟<br />Leave a Five-Star Google Review get a free joint!
            </div>

          </a>

        </div>

        <Promo
          promoImg={yummies}
          promoText={"Yummies Gummies - 2 for $30!"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={doobie_holder}
          promoText={"Doobie Holder - $6"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={bowl_prep}
          promoText={"Bowl Prep (5 chambers) - $30"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={dugout}
          promoText={"Dugout - $20"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={six}
          promoText={"Pipe - $6"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={sixteen}
          promoText={"Pipe - $16"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={sixteen2}
          promoText={"Pipe - $16"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={sixteen3}
          promoText={"Pipe - $16"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={sixteen4}
          promoText={"Pipe - $16"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={storage_pipe}
          promoText={"Pipe with Storage - $30"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={tray_large}
          promoText={"Large Rolling Tray - $40"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={tray_medium}
          promoText={"Medium Rolling Tray - $30"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={tray_small}
          promoText={"Small Rolling Tray - $20"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={mug_white}
          promoText={"White To-Go Mug - $20"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={mug_black}
          promoText={"Black To-Go Mug - $20"}
          promoHref={"/menu"}
        />

        <Promo
          promoImg={mug_blue}
          promoText={"Blue To-Go Mug - $20"}
          promoHref={"/menu"}
        />




      </div>
      <Footer />
    </div>
  );
}

