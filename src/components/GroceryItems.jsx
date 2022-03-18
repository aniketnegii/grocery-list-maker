import React from "react";
import SingleItem from "./GroceryItem";
import { CartState } from "../context/Context.js";

const GroceryItems = () => {
  const {
    state: { products },
  } = CartState();

  // console.log(products);

  return (
    <div className="cart">
      {products.map((product, i) => (
        <SingleItem key={product.id} idx={i + 1} prod={product} />
      ))}
    </div>
  );
};

export default GroceryItems;
