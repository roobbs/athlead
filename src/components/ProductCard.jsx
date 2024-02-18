import "../styles/ProductCard.css";
import favIcon from "../assets/favorito.png";

export default function ProductCard({ img, name, price, category, label }) {
  return (
    <div className="productCardContainer">
      <div className="imgCardContainer">
        <img src={favIcon} alt="img" className="productImg" />
        <img src={favIcon} alt="fav" className="favImg" />
        <div className="productPrice">${price}</div>
      </div>
      <div>
        <div className="productName">{name}</div>
        <div className="productCategory">{category}</div>
        <div className="productLabel">{label}</div>
      </div>
    </div>
  );
}
