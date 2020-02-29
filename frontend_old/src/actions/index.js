import ProductsList from "../api/product.json";
import axios from "axios";
export const receiveProducts = () => {
  return async dispatch => {
    const productdata = ProductsList;
    dispatch({
      type: "ACTUAL_PRODUCTS",
      products: productdata
    });
  };
};

export const getProducts = () => async dispatch => {
  const res = await axios.get("http://localhost:5001/api/v1/products/");

  dispatch({ type: "GET_PRODUCTS", payload: res.data.data });
};
