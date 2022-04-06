import './Promo.css';
import { Link } from 'react-router-dom';

export default function Promo({ promoText, promoImg, promoHref }) {

  return (
    <div className="promo">
      <Link className="glow" to={promoHref}>
        <div className="centter" id="glow">
          <img src={promoImg} className="promoImage" alt="promoImg"></img>
        </div>
        <div className="whiteText">
          {promoText}
        </div>
      </Link>
    </div>
  );
}