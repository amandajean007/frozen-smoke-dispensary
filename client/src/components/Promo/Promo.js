import './Promo.css';

export default function Promo({ promoText, promoImg, promoHref }) {

  return (
    <div className="promo">
      <a className="glow" href={promoHref}>
        {promoText}<br />
        <div className="centter">
          <img src={promoImg} width="75%" height="auto" className="promoImage" alt="promoImg"></img>
        </div>
      </a>
    </div>
  );
}