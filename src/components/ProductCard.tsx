import "../styles/ProductCard.css";
import favIcon from "../assets/favorito.png";
import favIcon1 from "../assets/favorito1.png";
import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../App/App";
import { Link } from "react-router-dom";

interface ProductCardProps {
  img: string;
  name: string;
  price: string;
  category: string;
  label: string;
  product: any;
  id: string | number;
}

export default function ProductCard({
  img,
  name,
  price,
  category,
  label,
  product,
  id,
}: ProductCardProps) {
  const [isFav, setIsFav] = useState<boolean>(false);
  const { favItems, addToFav, eraseFav } = useContext(ShopContext);

  useEffect(() => {
    setIsFav(favItems.includes(product));
  }, [favItems, isFav, product]);

  return (
    <Link to={`/product/${id}`}>
      <div className="productCardContainer">
        <div className="imgCardContainer">
          <img src={img} alt="img" className="productImg" />
          <img
            src={isFav ? favIcon1 : favIcon}
            alt="fav"
            className="favImg"
            onClick={(event) => {
              event.preventDefault();
              if (!isFav) {
                addToFav(product);
              } else {
                eraseFav(product);
              }
            }}
          />
          <div className="productPrice">${price}</div>
        </div>
        <div style={{ padding: 10 }}>
          <div className="productName">{name}</div>
          <div className="productCategory">{category}</div>
          <div className="productLabel">{label}</div>
        </div>
      </div>
    </Link>
  );
}
