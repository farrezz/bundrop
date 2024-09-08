import React, { Component } from "react";
import "../styles/CartNavbar.css";
import logoBlack from "../images/logo-black.png";
import { Link } from "react-router-dom";

function CartNavbar() {
  return (
    <>
      <div className="cart-navbar">
        <div className="leftSide-cart">
          <Link
            to="/"
          >
            <img src={logoBlack} alt="" />
          </Link>
        </div>
        <div className="middleSide-cart">BD</div>
        <Link to="/Menu"><div className="rightSide-cart">X</div></Link>
      </div>
    </>
  );
}

export default CartNavbar;
