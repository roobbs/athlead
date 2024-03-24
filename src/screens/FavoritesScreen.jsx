import "../styles/FavoritesScreen.css";
import ProductCard from "../components/ProductCard";
import { ShopContext } from "../App/App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/right-arrow.png";

export default function FavoritesScreen() {
  const { favItems } = useContext(ShopContext);

  return (
    <div className="favScreenContainer">
      <div className="favTitleContainer">
        <div className="cartTitles">TUS FAVORITOS</div>
        <div className="favKeepBuyingButtonContainer">
          <Link to="/" className="keepBuyingButton">
            <div>Seguir Comprando</div>
            <img src={arrow} alt="" className="buyIcon" />
          </Link>
        </div>
      </div>
      <div className="favItemsContainer">
        {favItems.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            label={product.label}
            img={product.image}
          />
        ))}
      </div>
    </div>
  );
}
