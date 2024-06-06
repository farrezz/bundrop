import React from 'react';
import {Link} from "react-router-dom"
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div  className='leftSide'>
                <h1>Lägg till logotyp</h1>
            </div>
            <div  className='RightSide'>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Login</Link>
            </div>

        </div>
      );
}

export default Navbar;