import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [showList, setShowList] = useState(false);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (sum, currEle) => sum + Number(currEle.price) * currEle.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="cart">
      <div>
        {cart.map((c, i) => (
          <CartItem key={c.id} idx={i + 1} cartItm={c} />
        ))}
      </div>
      <div className="summary">
        <h4>Subtotal({cart.length}) items</h4>
        <h4>Total : Rs.{total}</h4>
      </div>
      <button className="btn" onClick={() => setShowList(true)}>
        Generate List
      </button>
      {showList ? (
        <div style={{ marginTop: "10px" }}>
          {cart.map((c, i) => (
            <div>
              {i + 1}. {c.name} - {c.qty}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CartContainer;
