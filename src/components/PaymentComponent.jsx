import React, { useState } from "react";
import "../styles/PaymentComponent.css";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


function PaymentComponent() {
    //Swish eller kort
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  //Card info state
  const [phonenumber, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  //Swish info state
 const [swishNumber, setSwishNumber] = useState("");

 //Swish info state need?
 const [swishName, setSwishName] = useState("");
 const [swishDate, setSwishDate] = useState("");


 //UseSearchparams hook för att hämta parametrar från URL. (se cart component när man klickar på Pay)
 //källa: https://nextjs.org/docs/app/api-reference/functions/use-search-params
  const [searchParams]= useSearchParams();
//hämtar totalpriset från URL och sparar i en variabel. 
  const totalPrice = searchParams.get("totalPrice");
  const[fillInformation, setFillInformation] = useState(true)
  const navigate = useNavigate();

  const handleClickPay = () => {
    if (!phonenumber || !name || !email || !adress) {
      setFillInformation("Please fill in all fields");
      return true;
    }
    if (paymentMethod === "creditCard") {
      if (!cardName || !cardNumber || !cardDate || !cardCVC) {
        setFillInformation("Please fill in all fields");
        return true;
      }
    }
    else if (paymentMethod === "Swish") {
      if (!swishNumber) {
        setFillInformation("Please fill in all fields");
        return true;
      }

    }

    const orderId =  Math.floor(Math.random() * 10000);
    navigate(`/Confirmation?orderId=${orderId}`);
    console.log(orderId);
    return false;

  };


  //En funktion som hanterar att valet av betalningsmetoden ska uppdateras
  const handlePaymentMethodClick = (change) => {
    setPaymentMethod(change);
    setFillInformation("");
  };

  return (
    <>
      <div className="payment-wrapper">
        <div className="payment-container">
          <h1 className="payment-title">Payment</h1>
          <p className="payment-price">${totalPrice}</p>
          <p className="payment-subtitle">Select your payment method:</p>
          <div className="payment-methods">
            <div
              className={`payment-option ${
                paymentMethod === "creditCard" ? "selected" : ""
              }`}
              onClick={() => handlePaymentMethodClick("creditCard")}
            >
              Card
            </div>

            {/*Renderar antingen swish- eller kortmetod*/}
            <div
              className={`payment-option ${
                paymentMethod === "Swish" ? "selected" : ""
              }`}
              onClick={() => handlePaymentMethodClick("Swish")}
            >
              Swish
            </div>
          </div>
          <div className="personalInformation-cotainer">
            <div><p className="personalInformation-text">Personal information</p></div>
            <div className="personalInformation-details">
              <input className="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} inputMode="text" required/>
              <input className="email" type="email" placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)} inputMode="email" required/>
              <input className="phone" type="tel" placeholder="Phone" value = {phonenumber} onChange={(e) => setPhone(e.target.value)} inputMode="numeric" required/>
              <input className="address" type="text" placeholder="Address"  value = {adress} onChange={(e) => setAdress(e.target.value)} required/>
            </div>
          </div>
          {paymentMethod === "creditCard" ? (
            <div className="credit-card-container">
              <p className="credit-card-text">Credit card</p>
              <div className="credit-card-details">
                <input
                  className="card-number"
                  type="text"
                  placeholder="Card number (16digits)"
                  minLength="16"
                  maxLength="16"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  inputMode="numeric"
                />
                <input
                  className="card-name"
                  type="text"
                  placeholder="Name on card"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
                <input
                  className="card-date"
                  type="date"
                  placeholder="Expiration date"
                  value={cardDate}
                  onChange={(e) => setCardDate(e.target.value)}
                  inputMode="date"
                  required
                />
                <input className="card-cvc" type="numeric" placeholder="CVC (3 digits)" minLength="3" maxLength="3" value={cardCVC} onChange={(e) => setCardCVC(e.target.value)} required/>
              </div>
              {/* {fillInformation && <p className="fillInformation-message">{fillInformation}</p>}
              <div className="paymentBtnContainer">Pay</div> */}
            </div>
          ) : (
            <div className="swish-container">
              <p className="swish-text">Swish</p>
              <div className="swish-details">
                <input
                  className="swish-number"
                  type="text"
                  placeholder="Swish number (10-12 digits)"
                  minLength="10"
                  maxLength="12"
                  inputMode="numeric"
                  required
                  value={swishNumber}
                  onChange={(e) => setSwishNumber(e.target.value)}
                />
                {/* <input className="swish-name" type="text" placeholder="Name" />
                <input
                  className="swish-amount"
                  type="text"
                  placeholder="Amount"
                /> */}
              </div>
              {/* {fillInformation && <p className="fillInformation-message">{fillInformation}</p>}
              <div className="paymentBtnContainer" onClick={handleClickPay}>Pay</div> */}
            </div>
          )}
        {fillInformation && <p className="fillInformation-message">{fillInformation}</p>}
         <div className="paymentBtnContainer" onClick={handleClickPay}>Pay</div>
        </div>
      </div>
    </>
  );
}

export default PaymentComponent;
