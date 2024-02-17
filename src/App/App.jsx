import "./App.css";
import { useState } from "react";
import { createContext } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [];
  const addToCart = (product) =>
    setCartItems((prevState) => [...prevState, product]);

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <Content />
      <Footer />
    </ShopContext.Provider>
  );
}
