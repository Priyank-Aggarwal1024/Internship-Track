import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="int-track-navbar">
            <div className="int-track-nav-left">
                <NavLink to="/" className="int-track-nav-logo">
                    <img src={Logo} className='int-track-va-mid int-track-logo-large' int-track-alt="Logo" />
                    <img src={Logo2} className='int-track-va-mid int-track-logo-small' int-track-alt="Logo" />
                </NavLink>
                <div className="int-track-nav-list">
                    <NavLink to="/" className="int-track-fw-500 int-track-text-light-black int-track-nav-item">Explore Programs</NavLink>
                    <NavLink to="/" className="int-track-fw-500 int-track-text-light-black int-track-nav-item">Offers</NavLink>
                    <NavLink to="/" className="int-track-fw-500 int-track-text-light-black int-track-nav-item">About us</NavLink>
                    <NavLink to="/" className="int-track-fw-500 int-track-text-light-black int-track-nav-item">Internship</NavLink>
                </div>
            </div>
            <div className="int-track-nav-btn">
                <NavLink className="int-track-nav-login-btn">Login </NavLink>
                <NavLink className="int-track-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;