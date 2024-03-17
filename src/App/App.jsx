import "./App.css";
import { useState } from "react";
import { createContext } from "react";
import MainScreen from "../screens/MainScreen.jsx";
import productsList from "../../products.js";

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
      <MainScreen />
    </ShopContext.Provider>
  );
}
