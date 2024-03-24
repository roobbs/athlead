import { ShopContext } from "../App/App";
import "../styles/Content.css";
import ProductCard from "./ProductCard";
import { useContext } from "react";

export default function Content() {
  const { products, favItems } = useContext(ShopContext);
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
          // const checkFav = favItems.includes(product);
          // console.log(checkFav);
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
