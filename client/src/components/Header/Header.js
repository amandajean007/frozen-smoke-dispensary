import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Header.css';


const Header = (props) => {
  return (
    <div className="header">
      <h1 id="name">Frozen Smoke Dispensary</h1>
      <NavBar
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </div>
  );
};

export default Header;