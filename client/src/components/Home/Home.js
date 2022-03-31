import "./Home.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Home() {

  return (
    <div className="home">
        <Header />
        <h1>homepage</h1>
        <div className="googleReviews">
          <a href="https://www.google.com/search?q=frozen+smoke+dispensary&rlz=1C5CHFA_enUS991US991&oq=frozen+smoke+dispensary&aqs=chrome..69i57j46i175i199i512j0i512j46i512j0i512j0i10i512l2j0i22i30l3.3905j0j15&sourceid=chrome&ie=UTF-8#lrd=0x873f92e6665ea4c9:0xd60874f3d9ec7e4b,1,,," target="_blank">Google Reviews</a>
        </div>
        <div className="googleReviews">
          <a href="
https://www.google.com/search?q=frozen+smoke+dispensary&rlz=1C5CHFA_enUS991US991&oq=frozen+smoke+dispensary&aqs=chrome..69i57j46i175i199i512j0i512j46i512j0i512j0i10i512l2j0i22i30l3.3905j0j15&sourceid=chrome&ie=UTF-8#lrd=0x873f92e6665ea4c9:0xd60874f3d9ec7e4b,3,,," target="_blank">Leave a Five-Star Review, get a free joint!</a>
        </div>
        <Footer />
    </div>
  );
}

