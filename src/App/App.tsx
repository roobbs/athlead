import "./App.css";
import { useState, createContext, useEffect } from "react";
import productsList from "../../products.js";
import Router from "../Router.jsx";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

interface ShopContextType {
  products: Product[] | [];
  cartItems: Product[] | [];
  addToCart: (product: Product) => void;
  eraseFromCart: (product: Product) => void;
  favItems: Product[];
  addToFav: (product: Product) => void;
  eraseFav: (product: Product) => void;
  changeQuantity: (product: Product, quantity: number) => void;
}

export const ShopContext = createContext<ShopContextType>({
  products: [],
  cartItems: [],
  addToCart: () => {},
  eraseFromCart: () => {},
  favItems: [],
  addToFav: () => {},
  eraseFav: () => {},
  changeQuantity: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favItems, setFavItems] = useState<Product[]>([]);
  const products: Product[] = productsList;

  const addToCart = (product: Product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = 1;
      setCartItems((prevState) => [...prevState, product]);
    }
  };
  const changeQuantity = (product: Product, quantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const eraseFromCart = (product: Product) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };
  const addToFav = (product: Product) => {
    setFavItems((prevState) => [...prevState, product]);
  };
  const eraseFav = (product: Product) => {
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
