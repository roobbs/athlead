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
  const addToCart = () => console.log("hiShop");
  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <div>Hola</div>
      <Header />
      <Content />
      <Footer />
    </ShopContext.Provider>
  );
}
