import { useContext } from "react";
import { ShopContext } from "../App/App";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cartContainer">
      <div className="cartIcon">Cart</div>
      <div className="cartNum">{cartItems.length}</div>
    </div>
  );
}
