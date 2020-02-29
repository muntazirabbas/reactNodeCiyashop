/***
 *  Products Reducers
 ***/
export default (state = { products: [], detail_products: [] }, action) => {
  if (action.type === "GET_PRODUCTS") {
    return { ...state, products: action.payload };
  } else {
    return state;
  }
};
