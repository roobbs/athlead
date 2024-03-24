import { useContext } from "react";
import { ShopContext } from "../App/App";
import { useParams } from "react-router-dom";

export default function ProductScreen() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);

  const selectedProduct = products.find((prod) => prod.id === productId);
  return (
    <>
      <div>{selectedProduct.name}</div>
      <div>{selectedProduct.price}</div>
      <div>{selectedProduct.label}</div>
      <img src={selectedProduct.image} alt="productImage" />
    </>
  );
}
