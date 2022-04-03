import './Promo.css';
import { Link } from 'react-router-dom';

export default function Promo({ promoText, promoImg, promoHref }) {

  return (
    <div className="promo">
      <Link className="glow" to={promoHref}>
        {promoText}<br />
        <div className="centter">
          <img src={promoImg} width="75%" height="auto" className="promoImage" alt="promoImg"></img>
        </div>
      </Link>
    </div>
  );
}