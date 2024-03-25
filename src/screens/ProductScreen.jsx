import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../App/App";
import { useParams } from "react-router-dom";
import "../styles/ProductScreen.css";
import arrow from "../assets/right-arrow.png";
import favIcon from "../assets/favorito.png";
import favIcon1 from "../assets/favorito1.png";

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
          <div>Descripcion</div>
          <div>Description TITle</div>
          <div>Description Text</div>
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
            alt=""
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
      </div>
    </div>
  );
}
