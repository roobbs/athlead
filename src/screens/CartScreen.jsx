import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/CartScreen.css";
import { useContext } from "react";
import { ShopContext } from "../App/App";
import ProductCard from "../components/ProductCard";
import arrow from "../assets/right-arrow.png";

export default function CartScreen() {
  const { cartItems, favItems } = useContext(ShopContext);

  return (
    <>
      <div className="cartScreenContainer">
        <div className="cartProductsInfo">
          <div className="cartTitles">TU CARRITO</div>
          <div style={{ color: "grey", fontStyle: "italic" }}>
            TOTAL ({cartItems.length} productos)
          </div>
          <div>
            Los articulos en tu carrito no estan reservados. Termina el proceso
            de compra ahora para hacerte con ellos.
          </div>
          <div>MAP PRODUCTOS</div>
        </div>
        <div className="cartResume">
          <Link to="/" className="keepPayingButton">
            <div>SEGUIR COMPRANDO</div>
            <img src={arrow} alt="" className="buyIcon" />
          </Link>
          <div className="cartPayButtonContainer">
            <div className="cartPayButton">
              <div>IR A PAGAR</div>
              <img src={arrow} alt="" className="payIcon" />
            </div>
          </div>
          <div className="resumeTitle">RESUMEN DEL PEDIDO</div>
          <div>
            <div>{cartItems.length} productos</div>
            <div>Entrega Gratis</div>
          </div>
          <div>
            <div>Total</div>
            <div>$precio</div>
            <div>(IVA incluido)</div>
          </div>
          <div>OPCIONES DE PAGO</div>
          <div>LISTA DE OPCIONES</div>
        </div>
        <div className="favOnCartContainer">
          <div className="cartTitles">TUS FAVORITOS</div>
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
      </div>
      <Footer />
    </>
  );
}
