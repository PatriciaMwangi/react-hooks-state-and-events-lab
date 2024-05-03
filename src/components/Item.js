import React, { useState } from "react";

function Item({ name, category }) {
  const [cart,setCart]=useState(true)
  function click (e){
    setCart(()=>!cart)
  }

  return (
    <li className={cart? "": "in-cart" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={click} className="add">{cart? "Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;
