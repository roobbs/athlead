import { ShopContext } from "../App/App";
import "../styles/AllProducts.css";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";

export default function AllProducts() {
  const { products } = useContext(ShopContext);
  return (
    <div className="content-container">
      <div className="contentHeader">
        <div>
          <div className="contentTitle">Todo nuestro calzado</div>
          <div className="contentDescription">
            El mejor calzado deportivo, para tener un estilo casual en el día a
            día, con la comodidad como prioridad. Conócelos ahora.{" "}
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
      <div className="footerDescriptionContainer">
        <div className="footerTitleDescription">Zapatos para cada ocasion</div>
        <div className="footerDescription">
          Atrévete a mostrar tu personalidad arrolladora a cada paso que des por
          la ciudad. Nuestros tenis de moda están pensados para las personas que
          no se arrugan ante las dificultades de la vida y caminan pisando
          fuerte en cualquier circunstancia. Con un diseño que sabe combinar a
          la perfección las tendencias estéticas actuales con la resistencia,
          funcionalidad y versatilidad que se le debe exigir al calzado
          deportivo, los tenis de adidas son la elección lógica para los que
          quieren dejar huella.
        </div>
      </div>
    </div>
  );
}
