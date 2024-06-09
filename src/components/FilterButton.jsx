import React from "react";
import "../styles/FilterButton.css";

function FilterButton({ menuItems, filterItems }) {
  return (
    <>
      <div className="container">
        {menuItems.map((category) => (
          <button className="categoryBtn" onClick={() => filterItems(category)}>
            {category}
          </button>
        ))}
        <button className="categoryBtn" onClick={() => filterItems("All")}>
          All
        </button>
      </div>
    </>
  );
}

export default FilterButton;
