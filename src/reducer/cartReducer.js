export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("add");
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      console.log("remove");
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      console.log("Change");
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    // case "SEARCH_PRODUCT":
    //   console.log("Search");
    //   let tempState = state;
    //   let searchedProd;
    //   if (action.payload.query === "") {
    //     searchedProd = state.products;
    //   } else {
    //     searchedProd = tempState.products.filter((p) =>
    //       p.name.toLowerCase().includes(action.payload.query.toLowerCase())
    //     );
    //   }
    //   return {
    //     ...state,
    //     products: searchedProd,
    //   };
    default:
      return state;
  }
};
