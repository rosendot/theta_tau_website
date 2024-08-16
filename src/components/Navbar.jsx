import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css'

function Navbar() {
    return (
        <nav className="ot-landing-navbar">
            <div className="ot-landing-navbar-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/members" className={({ isActive }) => isActive ? 'active' : ''}>Actives</NavLink>
                <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>History</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;