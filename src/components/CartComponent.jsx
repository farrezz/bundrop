import React, { useState, useEffect } from "react";
import CartNav from "./CartNavbar";
import "../styles/CartComponent.css";
import LocalStorageManager from "../LocalStorage/localStorageManager";
import { useNavigate } from "react-router-dom";

function CartComponent() {
  const { getCart, subtractCart, decreaseQuantity, clearCart, addToCart } =
    new LocalStorageManager();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  /* --------------Functions ---------*/

  //Skickar till PaymentComponent med totalpriset.
  const handleClickPay = () => {
    navigate(`/payment?totalPrice=${totalPrice}`);
    console.log(totalPrice);
  };

  //rensa kundvagn
  //testa med en tom kundvagn
  const removeAll = () => {
    clearCart();
    setCart([]);
  };

    //kollar om kundvagne är tom. if statement för att visa olika sidor beroende om kundvagen är tom.
    const cartEmpty = cart.length === 0;

  //räkkna summan av varorna
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

    const handleClickDecrease = (item) => {
        decreaseQuantity(item.id);
        setCart(getCart());
      };
    
      const handleClickIncrease = (item) => {
        addToCart(item);
        setCart(getCart());
      };
    

 /* --------------USEEFFECT ---------*/

  useEffect(() => {
    setCart(getCart());
  }, []);
  
  return (
    <>
      <CartNav />

      {cartEmpty ? (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
        </div>
      ) : (
        <div className="cart-container">
          <h1 className="cartTitle">Cart</h1>
          {cart.map(
            (item) => (
              console.log(item),
              (
                <div key={item.id} className="cartOrderList-container">
                  <div className="OrderPrice">{item.price}</div>
                  <div className="OrderName">{item.title}</div>
                  <div className="OrderQuantity">
                    <div    
                      className="subtract-btn"
                      onClick={() => handleClickDecrease(item)}
                    >
                      -
                    </div>
                    <div className="quantity-item">{item.quantity}</div>
                    <div
                      className="add-btn"
                      onClick={() => handleClickIncrease(item)}
                    >
                      +
                    </div>
                  </div>
                </div>
              )
            )
          )}    
          <div className="text-container-total">    
            <h5>TOTAL</h5>
          </div>    
          <div className="payContainer" onClick={handleClickPay}>   
            PAY ${totalPrice} 
          </div>
          <div style={{ color: "black" }} onClick={removeAll}>removeAll</div>
        </div>
      )}

      {/* <div className="cart-container">
        <h1 className="cartTitle">Cart</h1>
        {cart.map(
          (item) => (
            console.log(item),
            (
              <div key={item.id} className="cartOrderList-container">
                <div className="OrderPrice">{item.price}</div>
                <div className="OrderName">{item.title}</div>
                <div className="OrderQuantity">
                  <div className="subtract-btn">-</div>
                  <div className="quantity-item">0</div>
                  <div className="add-btn">+</div>
                </div>
              </div>
            )
          )
        )}
        <div className="text-container-total">
          <h5>TOTAL</h5>
        </div>
        <div className="payContainer" onClick={handleClickPay}>
          PAY ${totalPrice}
        </div>
      </div>
      <div style={{ color: "black" }} onClick={removeAll}>removeAll</div> */}
    </>
  );
}

export default CartComponent;
