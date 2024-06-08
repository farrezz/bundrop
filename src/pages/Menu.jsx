import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import FilterButton from "../components/FilterButton";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const menuItems = [...new Set(menu.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "All") {
      setFilteredMenu(menu);
    } else {
      const newMenu = menu.filter((newItem) => newItem.category === category);
      setFilteredMenu(newMenu);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
