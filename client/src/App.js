import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Member from './components/Member/Member';
import Entry from './components/Entry/Entry';
import Sorry from './components/Sorry/Sorry';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/sorry" element={<Sorry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/member" element={<Member />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Entry />} />
      </Routes>
      <Footer />
    </div>
  );

};

export default App;
