import "./App.css";
import { useState, createContext } from "react";
import productsList from "../../products.js";
import Router from "../Router.jsx";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = productsList;
  const addToCart = (product) =>
    setCartItems((prevState) => [...prevState, product]);

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Router />
    </ShopContext.Provider>
  );
}
