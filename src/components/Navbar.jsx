import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import HistoryIcon from '@mui/icons-material/History';
import MailIcon from '@mui/icons-material/Mail';
import shieldImage from './images/theta_tau_shield.png';

function Navbar() {
    return (
        <nav className="ot-landing-navbar">
            <div className="ot-landing-navbar-logo">
                <img src={shieldImage} alt="Theta Tau Logo" />
            </div>
            <div className="ot-landing-navbar-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    <HomeIcon />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/members" className={({ isActive }) => isActive ? 'active' : ''}>
                    <PeopleIcon />
                    <span>Actives</span>
                </NavLink>
                <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>
                    <HistoryIcon />
                    <span>History</span>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                    <MailIcon />
                    <span>Contact Us</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;