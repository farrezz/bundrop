import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="home-content">
          <div className="logo-website">
            <img id="img-logo" src={logo} alt="logo" />
          </div>
          <div className="slogan">
            <p>
              SMASHING BURGER
              <br /> SINCE 1972
            </p>
          </div>
        </div>
        
      </div>
      <div className="button-container">
          <div id="btn-menu">
            <Link to="/Menu" id="menuBtn">
              MENU
            </Link>
          </div>
        </div>
    </>
  );
}

export default Home;
