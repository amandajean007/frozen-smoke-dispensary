
import React from 'react';
import "./Navbar.css"
// import flower from '../../assets/icon-flower.png';

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <div className="nav-bar">
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
                    <button href="/menu" onClick={() => handlePageChange('Menu')} className={currentPage === "Menu" ? 'active' : ''}>
                        🛒 Order
                    </button>
                    <div className="dropdown-content">
                        <a className="dropdownLink" href="/menu">Flower</a>
                        <a className="dropdownLink" href="/menu">Joints</a>
                        <a className="dropdownLink" href="/menu">Concentrates</a>
                        <a className="dropdownLink" href="/menu">Cartridges</a>
                        <a className="dropdownLink" href="/menu">Edibles</a>
                        <a className="dropdownLink" href="/menu">Drinks</a>
                        <a className="dropdownLink" href="/menu">Ice Cream</a>
                        <a className="dropdownLink" href="/menu">CBD</a>
                        <a className="dropdownLink" href="/menu">Tinctures</a>
                        <a className="dropdownLink" href="/menu">Topicals</a>
                        <a className="dropdownLink" href="/menu">Merch</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="member" onClick={() => handlePageChange('Member')} className={currentPage === "Member" ? 'nav-link active' : 'nav-link'}>
                        Membership
                    </a>
                    <div className="dropdown-content">
                        {/* <a className="dropdownLink" href="#">Member Benefits</a> */}
                        <a className="dropdownLink" href="/member">Sign Up</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="brands" onClick={() => handlePageChange('Brands')} className={currentPage === "Brands" ? 'nav-link active' : 'nav-link'}>
                        Brands
                    </a>
                    <div className="dropdown-content">
                        <a className="dropdownLink" href="#">Yummies Gummies</a>
                        <a className="dropdownLink" href="#">Green Hornet</a>
                        <a className="dropdownLink" href="#">Kanha</a>
                        <a className="dropdownLink" href="#">Dixie</a>
                        <a className="dropdownLink" href="#">Dabba</a>
                        <a className="dropdownLink" href="#">Cheeba Chews</a>
                        <a className="dropdownLink" href="#">Spherex</a>
                        <a className="dropdownLink" href="#">The Clear</a>
                        <a className="dropdownLink" href="#"></a>
                    
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                        Contact Us
                    </a>
                    <div className="dropdown-content">
                        <a className="dropdownLink" target="_blank" href="https://www.google.com/maps/dir//frozen+smoke+dispensary/@38.5411617,-106.9426253,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x873f92e6665ea4c9:0xd60874f3d9ec7e4b!2m2!1d-106.9404632!2d38.5393374">Directions</a>
                        <a className="dropdownLink" href="#">frozensmokedispensary@gmail.com</a>
                        <a className="dropdownLink" href="#">(970) 672-3495</a>
                    </div>
                </li>
            </div>
        </div> 

    )
}

export default NavBar;