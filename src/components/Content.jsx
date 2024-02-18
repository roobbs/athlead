import "../styles/Content.css";
import ProductCard from "./ProductCard";

export default function Content() {
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
        <ProductCard
          img="hola"
          name="Tenis Gazelle Indoor"
          price="2399"
          category="Mujer Originals"
          label="Envio Gratis"
        />
        <ProductCard
          img="hola"
          name="Tenis Gazelle Indoor"
          price="2399"
          category="Mujer Originals"
          label="Envio Gratis"
        />
        <ProductCard
          img="hola"
          name="Tenis Gazelle Indoor"
          price="2399"
          category="Mujer Originals"
          label="Envio Gratis"
        />
        <ProductCard
          img="hola"
          name="Tenis Gazelle Indoor"
          price="2399"
          category="Mujer Originals"
          label="Envio Gratis"
        />
      </div>
    </div>
  );
}
