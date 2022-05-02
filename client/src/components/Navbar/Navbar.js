import "./Navbar.css"
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
                    <Link to='/member' className='nav-link dropbtn'>
                        Membership
                    </Link>
                </li>
            </div>
        </div>

    )
}

export default NavBar;