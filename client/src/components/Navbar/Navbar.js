
import React from 'react';
import "./Navbar.css"
// import flower from '../../assets/icon-flower.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav">
            <div className="nav-bar">
                <li className="nav-item dropdown">
                    <Link to='/home' className='nav-link dropbtn'>
                        Home
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to='/menu'>
                        <button>
                            🛒 Order
                        </button>
                    </Link>
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
                    <Link to='/brands' className='nav-link'>
                        Brands
                    </Link>
                    <div className="dropdown-content">
                        <Link to='/brands/Cheeba' className="dropdownLink">Cheeba Chews</Link>
                        <Link to='/brands/Clear' className="dropdownLink">The Clear</Link>
                        <Link to='/brands/Dabba' className="dropdownLink">Dabba</Link>
                        <Link to='/brands/Dixie' className="dropdownLink">Dixie</Link>
                        <Link to='/brands/Eureka' className="dropdownLink">Eureka</Link>
                        <Link to='/brands/GHornet' className="dropdownLink">Green Hornet</Link>
                        <Link to='/brands/Kahna' className="dropdownLink">Kahna</Link>
                        <Link to='/brands/Spherex' className="dropdownLink">Spherex</Link>
                        <Link to='/brands/Yummies' className="dropdownLink">Yummies</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link to='/member' className='nav-link dropbtn'>
                        Membership
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to='/contact' className='nav-link'>Contact Us</Link>
                    {/* <div className="dropdown-content">
                        <a href="tel:9706723495">(970)672-3495</a><br />
                        <a target="_blank" rel="noreferrer" href="mailto:frozensmokedispensary@gmail.com">frozensmokedispensary@gmail.com</a><br />
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//frozen+smoke+dispensary/@38.5411617,-106.9426253,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x873f92e6665ea4c9:0xd60874f3d9ec7e4b!2m2!1d-106.9404632!2d38.5393374">500 US-50 #103, Gunnison CO 81230</a>
                    </div> */}
                </li>
            </div>
        </div>

    )
}

export default NavBar;