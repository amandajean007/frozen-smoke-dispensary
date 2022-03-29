import "./Home.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Home() {

  return (
    <div>
        <Header />
        <h1>only the homepage should be able to see this</h1>
        <Footer />
    </div>
  );
}
