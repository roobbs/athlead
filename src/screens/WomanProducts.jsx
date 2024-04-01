import { ShopContext } from "../App/App";
import "../styles/AllProducts.css";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";

export default function WomenProducts() {
  const { products } = useContext(ShopContext);
  const filteredProducts = products.filter(
    (item) => item.category !== "Hombre"
  );
  return (
    <div className="content-container">
      <div className="contentHeader">
        <div>
          <div className="contentTitle">Calzado para mujer</div>
          <div className="contentDescription">
            Encuentra tus sneakers favoritos para lucir a la moda con todo lo
            que necesitas. Atrévete a mostrar tu personalidad arrolladora a cada
            paso que des por la ciudad
          </div>
        </div>
        <div>filter</div>
      </div>
      <div className="productContainer">
        {filteredProducts.map((product) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
