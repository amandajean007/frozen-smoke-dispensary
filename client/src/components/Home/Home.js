import "./Home.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';

<div><script async="" id="dutchie--embed__script" src="https://dutchie.com/api/v2/embedded-menu/623a6a3126a07e009ea69962.js"></script></div>

export default function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    const menu = document.getElementById('homeMenu');

    script.src = "https://dutchie.com/api/v2/embedded-menu/623a6a3126a07e009ea69962.js";
    script.async = true;
    script.id = "dutchie--embed__script";

    menu.appendChild(script);
    
    return () => {
      menu.removeChild(script);
    }
  }, []);

  return (
    <div className="home">
      <Header />
      <div id="homeMenu"></div>
      <Footer />
    </div>
  );
}

