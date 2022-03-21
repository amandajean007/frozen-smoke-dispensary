import './App.css';
// import PortfolioContainer from './components/portfolioContainer'
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import logo from '../src/assets/weed.png';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';
import Member from './components/Member/Member';

import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Order') {
      return <Order />;
    }
    if (currentPage === 'Menu') {
      return <Menu />;
    }
    if (currentPage === 'Member') {
      return <Member />
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="portfolio-container">{renderPage()}</div>
      <Footer />
    </div>
  );



  // return (
  //   <div className="wrapper">
  //     <h1>
  //     <Header />
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p className="fsdTitle">
  //           Frozen Smoke Dispensary
  //         </p>
  //         <p>
  //           500 US-50 #103, Gunnison, CO 81230
  //         </p>
  //         <br/>
  //         <Contact />
  //         <Footer />
  //       </header>
  //     </h1>
  //   </div>
  // )
};

export default App;
