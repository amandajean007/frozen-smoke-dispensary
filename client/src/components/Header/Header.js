import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Header.css';


const Header = (props) => {
  return (
    <div className="header">
      <div>
        <NavBar
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
        />
      </div> 
      <br/>
      <div>
        <h1 id="name">Frozen Smoke Dispensary</h1>
        <h4>Gunnison, Colorado</h4>
      </div>
    </div>
  );
};

export default Header;