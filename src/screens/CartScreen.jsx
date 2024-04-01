import { Link } from "react-router-dom";
import "../styles/CartScreen.css";
import { useContext } from "react";
import { ShopContext } from "../App/App";
import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";
import arrow from "../assets/right-arrow.png";
import WhiteButton from "../components/WhiteButton";

export default function CartScreen() {
  const { cartItems, favItems } = useContext(ShopContext);
  let totalPayment = 0;
  cartItems.map((item) => {
    const price = item.price * item.quantity;
    totalPayment += price;
  });
  let totalItems = 0;
  if (cartItems.length > 0) {
    cartItems.map((item) => {
      totalItems += item.quantity;
      console.log(totalItems);
    });
  }

  return (
    <div className="cartScreenContainer">
      <div className="cartProductsInfo">
        <div className="cartTitles">TU CARRITO</div>
        <div style={{ color: "grey", fontStyle: "italic" }}>
          TOTAL ({totalItems} productos)
        </div>
        <div>
          Los articulos en tu carrito no estan reservados. Termina el proceso de
          compra ahora para hacerte con ellos.
        </div>
        <div className="cartCardMapContainer">
          {cartItems.map((product, index) => (
            <CartCard
              key={index}
              img={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              product={product}
            />
          ))}
        </div>
      </div>
      <div className="cartResume">
        <Link to="/all">
          <WhiteButton text="SEGUIR COMPRANDO" />
        </Link>
        <div className="cartPayButtonContainer">
          <div className="cartPayButton">
            <div>IR A PAGAR</div>
            <img src={arrow} alt="" className="payIcon" />
          </div>
        </div>
        <div className="resumeTitle">RESUMEN DEL PEDIDO</div>
        <div className="resumeInfoContainer">
          <div>{totalItems} productos</div>
          <div>$ {totalPayment}</div>
        </div>
        <div className="resumeInfoContainer">
          <div>Entrega</div>
          <div>Gratis</div>
        </div>
        <div className="resumeInfoContainerLast">
          <div>
            <div>Total</div>
            <div style={{ color: "grey", fontWeight: 400 }}>(IVA incluido)</div>
          </div>
          <div>$ {totalPayment}</div>
        </div>
        <div className="payOptions">OPCIONES DE PAGO</div>
        <div className="payOptionsImgContainer">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
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
              product={product}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
