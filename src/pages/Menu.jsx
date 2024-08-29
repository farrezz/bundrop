import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import FilterButton from "../components/FilterButton";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const menuItems = [...new Set(menu.map((item) => item.category))];
  //Todo: Add to cart
  //Cart function 
  const [cart, setCart] = useState([]);

  //Funktion som filterar dem olika matkatekorier  
  const filterItems = (category) => {
    if (category === "All") {
      setFilteredMenu(menu);
    } else {
      const newMenu = menu.filter((newItem) => newItem.category === category);
      setFilteredMenu(newMenu);
    }
  };
//Renderar hela menyn
  useEffect(() => {
    fetchData();
  }, []);

  //Funktion som hämtar data från databasen 
  function fetchData() {
    fetch("http://localhost:3001/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log("displaying menu items");
        setMenu(data);
        setFilteredMenu(data);
      })
      .catch((error) => {
        console.error("Error fetching item from data", error);
      });
  }

  return (
    <>
      <Navbar />
      <FilterButton menuItems={menuItems} filterItems={filterItems} />
      <Card menu={filteredMenu} />
    </>
  );
}

export default Menu;
