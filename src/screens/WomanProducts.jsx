import { ShopContext } from "../App/App";
import "../styles/AllProducts.css";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";

export default function WomenProducts() {
  const { products } = useContext(ShopContext);
  return (
    <div className="content-container">
      <div className="contentHeader">
        <div>
          <div className="contentTitle">Todo nuestro calzado</div>
          <div className="contentDescription">
            El mejor calzado deportivo y para tener un estilo casual en el día a
            día, con la comodidad como prioridad. Conócelos ahora.
          </div>
        </div>
        <div>filter</div>
      </div>
      <div className="productContainer">
        {products.map((product) => {
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
