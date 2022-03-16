
import React from 'react';
import "./Navbar.css"

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <ul className="nav-bar">
                <li className="nav-item">
                    <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === "Home" ? 'nav-link active' : 'nav-link'}>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" onClick={() => handlePageChange('Menu')} className={currentPage === "Menu" ? 'nav-link active' : 'nav-link'}>
                        Menu
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#order" onClick={() => handlePageChange('Order')} className={currentPage === "Order" ? 'nav-link active' : 'nav-link'}>
                        Order
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#member" onClick={() => handlePageChange('Member')} className={currentPage === "Member" ? 'nav-link active' : 'nav-link'}>
                        Membership
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default NavBar;