import "./App.css";
import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import productsList from "../../products.js";
import MainScreen from "../screens/MainScreen.jsx";
import CartScreen from "../screens/CartScreen.jsx";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    children: [{ path: "cart", element: <CartScreen /> }],
  },
]);

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = productsList;
  const addToCart = (product) =>
    setCartItems((prevState) => [...prevState, product]);

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}
