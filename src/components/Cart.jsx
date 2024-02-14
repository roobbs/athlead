import { useContext } from "react";
import { ShopContext } from "../App/App";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <div>{cartItems.length} items</div>
      <div>hola</div>
    </div>
  );
}
