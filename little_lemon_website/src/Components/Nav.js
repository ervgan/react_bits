import React from "react";
import logo from '../logo.svg';


const Nav = () => {
    return (
        <div class="nav">
        <ul>
            <img src={logo} alt='Logo' class="logo"/>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Menu">Menu</a></li>
            <li><a href="Reservations">Reservations</a></li>
            <li><a href="Order Online">Order Online</a></li>
            <li><a href="Login">Login</a></li>
        </ul>
        </div>
    )
}

export default Nav;