import { ShopContext } from "../App/App";
import "../styles/AllProducts.css";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";

export default function MenProducts() {
  const { products } = useContext(ShopContext);
  const filteredProducts = products.filter((item) => item.category !== "Mujer");
  return (
    <div className="content-container">
      <div className="contentHeader">
        <div>
          <div className="contentTitle">Calzado para hombre</div>
          <div className="contentDescription">
            Encuentra los sneakers adecuados para tener toda la comodidad
            necesaria y vivir con todo el estilo que se adapte a tu
            personalidad.
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
