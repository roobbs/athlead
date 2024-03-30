import "./App.css";
import { useState, createContext, useEffect } from "react";
import productsList from "../../products.js";
import Router from "../Router.jsx";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  eraseFromCart: () => {},
  favItems: [],
  addToFav: () => {},
  eraseFav: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const products = productsList;

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = 1;
      setCartItems((prevState) => [...prevState, product]);
    }
  };
  const changeQuantity = (product, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const eraseFromCart = (product) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };
  const addToFav = (product) => {
    setFavItems((prevState) => [...prevState, product]);
  };
  const eraseFav = (product) => {
    //eraseProduct
    setFavItems((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  //DELETE useEffect
  useEffect(() => {
    addToCart(products[1]);
    addToCart(products[2]);
    addToFav(products[2]);
  }, [products]);

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        favItems,
        addToFav,
        eraseFav,
        eraseFromCart,
        changeQuantity,
      }}
    >
      <Router />
    </ShopContext.Provider>
  );
}
