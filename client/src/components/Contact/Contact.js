import "./Contact.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="row" id="map">
        <div className="column">
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6241.248032559161!2d-106.94072257352772!3d38.5424343185077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x873f92e6665ea4c9%3A0xd60874f3d9ec7e4b!2sfrozen%20smoke%20dispensary!3m2!1d38.5393374!2d-106.9404632!5e0!3m2!1sen!2sus!4v1649274483992!5m2!1sen!2sus" width="900" height="675"></iframe>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Contact;