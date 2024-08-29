import React, { Component } from "react";
import CartNav from  "./CartNavbar";
import "../styles/CartComponent.css";

function CartComponent() {
  return (
    <>
    <CartNav/>
      <div className="cart-container">
        <h1 className="cartTitle">Cart</h1>
        <div className="cartOrderList-container">
            <div className="OrderPrice">Price</div>
            <div className="OrderName">OrderName</div>
            <div className="OrderQuantity">
                <div className="subtract-btn">-</div>
                <div className="quantity-item">0</div>
                <div className="add-btn">+</div>
            </div>
        </div>
        <div className="text-container-total"><h5>TOTAL</h5></div>
        <div className="payContainer">PAY SEK 200</div>
      </div>
    </>
  );
}

export default CartComponent;