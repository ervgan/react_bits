import React from "react";
import logo from '../logo.svg';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <menu className='navbar-menu'>
            <img src={logo} alt="Little Lemon logo" className="nav-image"> </img>
            <Link className="hover-effect" to="/"><h1>Home</h1></Link>
            <Link className="hover-effect" to="/about"><h1>About</h1></Link>
            <Link className="hover-effect" to="/menu"><h1>Menu</h1></Link>
            <Link className="hover-effect" to="/reservations"><h1>Reservations</h1></Link>
            <Link className="hover-effect" to="/order"><h1>Order</h1></Link>
            <Link className="hover-effect" to="/login"><h1>Login</h1></Link>
        </menu>
    )
}

export default Nav;