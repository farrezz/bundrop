import React, { useState, useEffect } from "react";
import "../styles/ConfirmationComp.css";
import { useSearchParams } from "react-router-dom";

function ConfirmationComp() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [time, setTime] = useState(3000);


  //Sätter en timer som räknar ner tid varje 1 sekund tills det blir 0.
  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  //räknar ut minuter och sekunder
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <>
      <div className="confirmation-container">
        <div className="confirmation-text">
          <h1 className="confirmation-title">Your order has been placed!</h1>
          <h2 className="confirmation-subtitle">Thank you for choosing us!</h2>
          <h3 className="confirmation-subtitle">We will contact you soon!</h3>
        </div>
        <div className="orderId-container">
          <h3 className="order-id">Order ID: {orderId}</h3>
        </div>
        <div className="deliverytime-container">
          <h3 className="delivery-time">
            Estimated delivery time: {minutes}:{seconds}
          </h3>
        </div>
      </div>
    </>
  );
}

export default ConfirmationComp;
