import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  const continentalMenu = [
    { id: 1, name: "Grilled Chicken Steak", price: "₹420" },
    { id: 2, name: "Creamy Alfredo Pasta", price: "₹350" },
    { id: 3, name: "Classic Caesar Salad", price: "₹280" },
    { id: 4, name: "Margherita Pizza", price: "₹300" },
    { id: 5, name: "BBQ Chicken Wings", price: "₹390" },
    { id: 6, name: "Fish & Chips", price: "₹450" },
    { id: 7, name: "Garlic Butter Prawns", price: "₹520" },
    { id: 8, name: "Stuffed Mushroom Delight", price: "₹310" },
    { id: 9, name: "Cheesy Nachos Supreme", price: "₹270" },
    { id: 10, name: "Chocolate Lava Cake", price: "₹190" },
  ];

  return (
    <>
      {/* 🔹 POPULAR DISHES (UNCHANGED) */}
      <section className="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              iusto dolorem!
            </p>
          </div>

          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CONTINENTAL MENU (ADDED BELOW) */}
      <section className="continental-menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">OUR CONTINENTAL MENU</h1>
            <p>Carefully crafted dishes with premium ingredients</p>
          </div>

          <div className="continental-list">
            {continentalMenu.map((item, index) => (
              <div className="continental-row" key={item.id}>
                <span className="serial">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="dish">{item.name}</span>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
