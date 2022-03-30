import './Footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

export default function Footer() {
  return (
    <div className="footer">
      <section>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pages/Frozen-Smoke-Dispensary/110359036402777" className="socialMedia">
          <img alt="facebook" src={facebook}/></a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/frozensmokedispensary/" className="socialMedia">
          <img alt="instagram" src={instagram}/></a>
        </section>
    </div>
  );
}