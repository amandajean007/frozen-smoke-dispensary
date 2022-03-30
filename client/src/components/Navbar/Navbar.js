
import React from 'react';
import "./Navbar.css"
import flower from '../../assets/icon-flower.png';

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <li className="nav-bar">
                <li className="nav-item dropdown">
                    <a href="home" onClick={() => handlePageChange('Home')} className={currentPage === "Home" ? 'nav-link active dropbtn' : 'nav-link dropbtn'}>
                        Home
                    </a>
                    <div className="dropdown-content">
                        {/* <a className="dropdownLink" href="#">Link 1</a>
                        <a className="dropdownLink" href="#">Link 2</a>
                        <a className="dropdownLink" href="#">Link 3</a> */}
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="menu" onClick={() => handlePageChange('Menu')} className={currentPage === "Menu" ? 'nav-link active' : 'nav-link'}>
                        Menu
                    </a>
                    <div className="dropdown-content">
                        <a className="dropdownLink" href="#">Flower</a>
                        <a className="dropdownLink" href="#">Joints</a>
                        <a className="dropdownLink" href="#">Concentrates</a>
                        <a className="dropdownLink" href="#">Cartridges</a>
                        <a className="dropdownLink" href="#">Edibles</a>
                        <a className="dropdownLink" href="#">Drinks</a>
                        <a className="dropdownLink" href="#">Ice Cream</a>
                        <a className="dropdownLink" href="#">CBD</a>
                        <a className="dropdownLink" href="#">Tinctures</a>
                        <a className="dropdownLink" href="#">Topicals</a>
                        <a className="dropdownLink" href="#">Merch</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="member" onClick={() => handlePageChange('Member')} className={currentPage === "Member" ? 'nav-link active' : 'nav-link'}>
                        Membership
                    </a>
                    <div className="dropdown-content">
                        <a className="dropdownLink" href="#">Member Benefits</a>
                        <a className="dropdownLink" href="/member">Sign Up</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                        Contact Us
                    </a>
                    <div className="dropdown-content">
                        <a className="dropdownLink" target="_blank" href="https://www.google.com/maps/dir//frozen+smoke+dispensary/@38.5411617,-106.9426253,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x873f92e6665ea4c9:0xd60874f3d9ec7e4b!2m2!1d-106.9404632!2d38.5393374">Directions</a>
                        {/* <a className="dropdownLink" href="#">Link 2</a>
                        <a className="dropdownLink" href="#">Link 3</a> */}
                    </div>
                </li>
            </li>
        </div> 

    )
}

export default NavBar;