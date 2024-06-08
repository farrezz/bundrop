import React from 'react';
import {Link} from "react-router-dom"
import '../styles/Navbar.css'
import logoBlack from '../images/logo-black.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div  className='leftSide'>
                <img src={logoBlack} alt="" />
            </div>
            <div  className='rightSide'>
                {/* <Link to="/">Home</Link> */}
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login" id='loginBtn'>Login</Link>
            </div>

        </div>
      );
}

export default Navbar;