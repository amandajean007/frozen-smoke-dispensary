
import React from 'react';
import "./Navbar.css"

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <ul className="nav-bar">
                <li className="nav-item dropdown">
                    <a href="home" onClick={() => handlePageChange('Home')} className={currentPage === "Home" ? 'nav-link active dropbtn' : 'nav-link dropbtn'}>
                        Home
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="menu" onClick={() => handlePageChange('Menu')} className={currentPage === "Menu" ? 'nav-link active' : 'nav-link'}>
                        Menu
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="member" onClick={() => handlePageChange('Member')} className={currentPage === "Member" ? 'nav-link active' : 'nav-link'}>
                        Membership
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                        Contact Us
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </div> 

    )
}

export default NavBar;