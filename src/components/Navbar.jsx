import React from 'react';
import {Link} from "react-router-dom"
import '../styles/Navbar.css'
import logoBlack from '../images/logo-black.png'
import CartImg from '../images/Cart.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div  className='leftSide'>
                <Link to="/"><img src={logoBlack} alt="" /></Link>
            </div>
            <div  className='rightSide'>
                {/* <Link to="/">Home</Link> */}
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login" id='loginBtn'>Login</Link>
                <Link to="/Cart"><img src={CartImg} alt="cart" />Cart</Link>
            </div>

        </div>
      );
}

export default Navbar;