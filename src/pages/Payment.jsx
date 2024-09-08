import React from "react";
import "../styles/Cart.css";
import PaymentComp from "../components/PaymentComponent";
import CartNavbar from "../components/CartNavbar";

function Payment() {
  return (
    <>
      <CartNavbar />
      <PaymentComp/>
    </>
  );
}

export default Payment;
 