import './Footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import membership from '../../assets/membership.png';
import contact from '../../assets/contact-mail.png';
import home from '../../assets/home.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <section>

        <a className="socialMedia">
          <Link to='/home' className='nav-link'>
            <img className="pixicon" alt="home" src={home} />
          </Link>
        </a>

        <a className="socialMedia">
          <Link to='/member' className='nav-link'>
            <img className="pixicon" alt="membership" src={membership} />
          </Link>
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pages/Frozen-Smoke-Dispensary/110359036402777" className="socialMedia">
          <img className="pixicon" alt="facebook" src={facebook} />
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/frozensmokedispensary/" className="socialMedia">
          <img className="pixicon" alt="instagram" src={instagram} />
        </a>
        &copy;<a href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by Freepik - Flaticon</a>
        &copy;<a href="https://www.flaticon.com/free-icons/membership" title="membership icons">Membership icons created by SBTS2018 - Flaticon</a>
      </section>

    </div>
  );
}