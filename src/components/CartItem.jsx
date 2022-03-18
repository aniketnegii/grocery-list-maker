import React from "react";
import { CartState } from "../context/Context";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartItem = ({ cartItm, idx }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <article className="cart-item">
      <img src={cartItm.img} alt={cartItm.name} />
      <div>
        <h4>
          {idx}.{cartItm.name}
        </h4>
        <h4 className="item-price">${cartItm.price}</h4>
      </div>
      <div>
        <label htmlFor="qty">Quantity:</label>
        <select
          name="qty"
          id="qty"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_QTY",
              payload: {
                id: cartItm.id,
                qty: e.target.value,
              },
            })
          }
          value={cartItm.qty}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: cartItm,
            })
          }
        >
          <MdOutlineDeleteForever size={32} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
