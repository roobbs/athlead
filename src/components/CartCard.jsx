import favIcon from "../assets/favorito.png";
import favIcon1 from "../assets/favorito1.png";
import xIcon from "../assets/x.png";
import "../styles/CartCard.css";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../App/App";

export default function CartCard({ img, name, price, category, product }) {
  const [isFav, setIsFav] = useState();
  const { products, cartItems, favItems, eraseFromCart, addToFav, eraseFav } =
    useContext(ShopContext);

  useEffect(() => {
    setIsFav(favItems.includes(product));
    console.log(isFav);
  }, [favItems, isFav, product]);

  return (
    <div className="cardContainer">
      <img src={img} alt="img" className="productCartImg" />

      <div className="cartCardItemInfo">
        <div className="infoContainer">
          <div style={{ display: "grid", gap: 10 }}>
            <div className="productName">{name}</div>
            <div className="productCategory">{category}</div>
          </div>
          <div>
            <select className="quantity">
              {[...Array(9).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  <div className="optionDiv">{num + 1}</div>
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="productCartPrice">${price} </div>
      </div>
      <div className="iconContainer">
        <img
          src={xIcon}
          alt="fav"
          className="favCartImg"
          onClick={() => eraseFromCart(product)}
        />
        <img
          src={isFav ? favIcon1 : favIcon}
          alt="fav"
          className="favCartImg"
          onClick={() => {
            if (!isFav) {
              addToFav(product);
            } else {
              eraseFav(product);
            }
          }}
        />
      </div>
    </div>
  );
}
