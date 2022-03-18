import React from "react";
import { CartState } from "../context/Context";

import { IoMdRemoveCircle, IoMdAddCircle } from "react-icons/io";

const GroceryItem = ({ prod, idx }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <article className="cart-item">
      <img src={prod.img} alt={prod.name} />
      <div>
        <h4>
          {idx}.{prod.name}
        </h4>
        <h4 className="item-price">${prod.price}</h4>
      </div>
      <div>
        {cart.some((c) => c.id === prod.id) ? (
          <button
            className="amount-btn"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              })
            }
          >
            <IoMdRemoveCircle size={32} />
          </button>
        ) : (
          <button
            className="amount-btn"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
          >
            <IoMdAddCircle size={32} />
          </button>
        )}
      </div>
    </article>
  );
};

export default GroceryItem;
