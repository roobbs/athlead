import "../styles/FavoritesScreen.css";
import ProductCard from "../components/ProductCard";
import { ShopContext } from "../App/App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import WhiteButton from "../components/WhiteButton";

export default function FavoritesScreen() {
  const { favItems } = useContext(ShopContext);

  return (
    <div className="favScreenContainer">
      <div className="favTitleContainer">
        <div className="cartTitles">TUS FAVORITOS</div>
        <Link to="/all">
          <WhiteButton text="Seguir Comprando" />
        </Link>
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
            product={product}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
