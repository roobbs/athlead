import "../styles/ProductCard.css";
import favIcon from "../assets/favorito.png";
import favIcon1 from "../assets/favorito1.png";
import { useState, useContext } from "react";
import { ShopContext } from "../App/App";

export default function ProductCard({
  img,
  name,
  price,
  category,
  label,
  fav,
}) {
  const [isFav, setIsFav] = useState(fav);
  const { favItems, setFavItems, products } = useContext(ShopContext);
  // // const productIsFav = ;
  // () => setIsFav(favItems.includes(product));
  // console.log(isFav);

  return (
    <div className="productCardContainer">
      <div className="imgCardContainer">
        <img src={img} alt="img" className="productImg" />
        <img
          src={isFav ? favIcon1 : favIcon}
          alt="fav"
          className="favImg"
          onClick={() => setIsFav(!isFav)}
        />
        <div className="productPrice">${price}</div>
      </div>
      <div style={{ padding: 10 }}>
        <div className="productName">{name}</div>
        <div className="productCategory">{category}</div>
        <div className="productLabel">{label}</div>
      </div>
    </div>
  );
}
