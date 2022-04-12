import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Member from './components/Member/Member';
import Entry from './components/Entry/Entry';
import Sorry from './components/Sorry/Sorry';
import Brands from './components/Brands/Brands';
import Mason from './components/Portal/Mason';
import Portal from './components/Portal/Portal';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/portal/mason" element={<Mason />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sorry" element={<Sorry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/member" element={<Member />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Entry />} />
      </Routes>
    </div>
  );

};

export default App;
