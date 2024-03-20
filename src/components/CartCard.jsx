import favIcon from "../assets/favorito.png";
import xIcon from "../assets/x.png";
import "../styles/CartCard.css";

export default function CartCard({ img, name, price, category }) {
  return (
    <div className="cardContainer">
      <img src={img} alt="img" className="productCartImg" />

      <div>
        <div className="productName">{name}</div>
        <div className="productCategory">{category}</div>
        <div className="productCartPrice">${price} </div>
      </div>
      <div className="iconContainer">
        <img src={xIcon} alt="fav" className="favCartImg" />
        <img src={favIcon} alt="fav" className="favCartImg" />
      </div>
    </div>
  );
}
