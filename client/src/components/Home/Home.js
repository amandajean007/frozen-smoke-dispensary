import "./Home.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Home() {

  return (
    <div>
      <Header />
      only the homepage should be able to see this
      <Footer />
    </div>
  );
}
