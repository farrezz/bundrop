import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import Navbar from "../components/Navbar";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:3001/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log("displaying menu items");
        setMenu(data);
      })
      .catch((error) => {
        console.error("Error fetching item from data", error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="menu">
        <h1 className="menuTitle">our menu</h1>
        <div className="menuList">
          {menu.map((item) => (
            <div key={item.id} className="menuItem">
              <img
                src={item.image}
                alt={item.title}
                className="menuItemImage"
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button> click me</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
