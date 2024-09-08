import React, { Component } from "react";
import "../styles/ContactComponent.css";

function ContactComponent() {
  return (
    <>
    <div class="contact-background">
      <div class="contact-container">
        <h1 class="contact-title">STOCKHOLM</h1>
        <div class="contact-city">
          <div class="contact-information-container">
            <div class="contact-address">
              <h5>
                Södermalm 3<br />
                310 62 Stockholm
              </h5>
            </div>
            <div class="opening-hours">
              <h5>
                Mon <span>11:00 - 21:00</span>
              </h5>
              <h5>
                Tue <span>11:00 - 21:00</span>
              </h5>
              <h5>
                Wed <span>11:00 - 21:00</span>
              </h5>
            </div>
            <div className="opening-hours">
              <h5>
                Thur <span>11:00 - 21:00</span>
              </h5>
              <h5>
                Fri <span>11:00 - 22:00</span>
              </h5>
              <h5>
                Sat <span>12:00 - 22:00</span>
              </h5>
              <h5>
                Sun <span>12:00 - 20:00</span>
              </h5>
            </div>
          </div>
        </div>
        <h1 class="contact-title">MALMÖ</h1>
        <div class="contact-city">
          <div class="contact-information-container">
            <div class="contact-address">
              <h5>
                Södra Vallgatan 3<br />
                211 40 Malmö
              </h5>
            </div>
            <div class="opening-hours">
              <h5>
                Mon <span>11:00 - 21:00</span>
              </h5>
              <h5>
                Tue <span>11:00 - 21:00</span>
              </h5>
              <h5>
                Wed <span>11:00 - 21:00</span>
              </h5>
            </div>
            <div className="opening-hours">
              <h5>
                Thur <span>11:00 - 21:00</span>
              </h5>
              <h5>
                Fri <span>11:00 - 22:00</span>
              </h5>
              <h5>
                Sat <span>12:00 - 22:00</span>
              </h5>
              <h5>
                Sun <span>12:00 - 20:00</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactComponent;
