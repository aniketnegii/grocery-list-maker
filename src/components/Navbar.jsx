import React from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../context/Context";

const Navbar = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <nav>
      <div className="nav-center">
        <NavLink to="/">
          <h3>Grocery List Maker</h3>
        </NavLink>
        <div className="nav-container">
          <NavLink to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
          </NavLink>
          <div className="amount-container">
            <p className="total-amount">{cart.length}</p>
          </div>
        </div>
      </div>
      {/* <input
        type="text"
        placeholder="Search"
        className="search-bar"
        onChange={(e) =>
          dispatch({
            type: "SEARCH_PRODUCT",
            payload: {
              query: e.target.value,
            },
          })
        }
      ></input> */}
    </nav>
  );
};

export default Navbar;
