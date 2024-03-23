import { useContext } from "react";
import { ShopContext } from "../App/App";
import icon from "../assets/cart.png";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cartContainer">
      <img src={icon} alt="cart" className="cartIcon" />
      {cartItems.length > 0 && (
        <div className="cartNum">{cartItems.length}</div>
      )}
    </div>
  );
}
