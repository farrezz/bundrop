import React from 'react';
import "../styles/Card.css"

function Card ({menu}) {
    return ( 
        <>
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
              <p>${item.price}</p>
              <button> click me</button>
            </div>
          ))}
        </div>
      </div>
        </>
    );
}

export default Card 
