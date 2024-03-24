import "./App.css";
import { useState, createContext, useEffect } from "react";
import productsList from "../../products.js";
import Router from "../Router.jsx";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  favItems: [],
  addToFav: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const products = productsList;
  const addToCart = (product) => {
    setCartItems((prevState) => [...prevState, product]);
  };
  const addToFav = (product) => {
    setFavItems((prevState) => [...prevState, product]);
  };

  //DELETE useEffect
  useEffect(() => {
    addToCart(products[1]);
    addToCart(products[2]);
    addToFav(products[2]);
  }, [products]);
  console.log(cartItems);

  return (
    <ShopContext.Provider
      value={{ products, cartItems, addToCart, favItems, addToFav }}
    >
      <Router />
    </ShopContext.Provider>
  );
}
