import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../App/App";
import { useParams } from "react-router-dom";
import "../styles/ProductScreen.css";
import arrow from "../assets/right-arrow.png";
import favIcon from "../assets/favorito.png";
import favIcon1 from "../assets/favorito1.png";
import entrega from "../assets/entrega.png";
import check from "../assets/check.png";
import DisplayInfo from "../components/DisplayInfo";

export default function ProductScreen() {
  const { productId } = useParams();
  const { products, favItems, addToFav, eraseFav } = useContext(ShopContext);
  // // const [info, setInfo] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const selectedProduct = products.find((prod) => prod.id === productId);

  useEffect(() => {
    setIsFav(favItems.includes(selectedProduct));
  }, [favItems, isFav, selectedProduct]);

  return (
    <div className="productScreenContainer">
      <div className="productScreenContent">
        <div className="productImagesContainer">
          <img src={selectedProduct.image} alt="productImage" />
          <img src={selectedProduct.image} alt="productImage" />
          <img src={selectedProduct.image} alt="productImage" />
          <img src={selectedProduct.image} alt="productImage" />
        </div>
        <div>
          <DisplayInfo title={"Descripcion"}>
            <div>descripcoin</div>
          </DisplayInfo>
          <DisplayInfo title={"Detalles"}>
            <div>hola</div>
          </DisplayInfo>
        </div>
      </div>
      <div className="productScreenSideBar">
        <div className="productScreenCategory">
          ● {selectedProduct.category}
        </div>
        <div className="productScreenName">{selectedProduct.name}</div>
        <div className="productScreenPrice">${selectedProduct.price}</div>
        <div>{selectedProduct.label}</div>
        <div className="prodScreenButtonsContainer">
          <div className="cartPayButtonContainer">
            <div className="cartPayButton">
              <div>Agregar al carrito</div>
              <img src={arrow} alt="" className="payIcon" />
            </div>
          </div>
          <img
            src={isFav ? favIcon1 : favIcon}
            alt="favIcon"
            className="productScreenFavIcon"
            onClick={() => {
              if (!isFav) {
                addToFav(selectedProduct);
              } else {
                eraseFav(selectedProduct);
              }
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
          <div className="infoContainer">
            <img src={entrega} alt="" className="infoIcon" />
            <div>ENVIOS A PARTIR DE $1199</div>
          </div>
          <div className="infoContainer">
            <img src={check} alt="" className="infoIcon" />
            <div>COMUNICATE CON NOSOTROS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
