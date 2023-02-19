import React from "react";
import logo from '../assets/footer-logo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img src={logo} alt="Little Lemon logo"></img>
                </li>
                <li className = "contact" >
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/reservation">Reservations</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>25 Via Petroni</li>
                        <li>Florence, Italy</li>
                        <br></br>
                        <li>(39)-25682759</li>
                        <br></br>
                        <a href="mailto: info@littlelemonrestaurant.com" target="_blank" rel="noreferrer">info@littlelemonrestaurant.com</a>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a href="/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="/" target="_blank" rel="noreferrer">Join us!</a>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}


export default Footer;