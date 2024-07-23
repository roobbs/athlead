import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../App/App";
import { useParams } from "react-router-dom";
import "../styles/ProductScreen.css";
import arrow from "../assets/right-arrow.png";
import favIcon from "../assets/favorito.png";
import favIcon1 from "../assets/favorito1.png";
import entrega from "../assets/entrega.png";
import check from "../assets/check.png";
import DisplayInfo from "../components/DisplayInfo.tsx";
import ImageSlider from "../components/ImageSlider.tsx";

type ProductParams = Record<string, string | undefined>;

export default function ProductScreen() {
  const { productId } = useParams<ProductParams>();
  const { products, favItems, addToFav, eraseFav, addToCart } =
    useContext(ShopContext);
  const [isFav, setIsFav] = useState<boolean>(false);

  const selectedProduct = products.find((prod) => prod.id === productId);

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  useEffect(() => {
    setIsFav(favItems.includes(selectedProduct));
  }, [favItems, isFav, selectedProduct]);

  return (
    <>
      <div className="productScreenContainer">
        <div className="productScreenContent">
          <ImageSlider imagesArr={selectedProduct.images} />
          <div>
            <DisplayInfo title={"Descripcion"}>
              <h3>{selectedProduct.description[0]}</h3>
              <div>{selectedProduct.description[1]}</div>
            </DisplayInfo>
            <DisplayInfo title={"Detalles"}>
              <ul>
                {selectedProduct.specifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
              <div
                className="cartPayButton"
                onClick={() => addToCart(selectedProduct)}
              >
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
            <div className="productScreenInfoContainer">
              <img src={entrega} alt="" className="infoIcon" />
              <div>ENVIOS A PARTIR DE $1199</div>
            </div>
            <div className="productScreenInfoContainer">
              <img src={check} alt="" className="infoIcon" />
              <div>COMUNICATE CON NOSOTROS</div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="productScreenContainerMobile">
        <div className="productScreenCategory">
          ● {selectedProduct.category}
        </div>
        <div className="productScreenName">{selectedProduct.name}</div>
        <div className="productScreenPrice">${selectedProduct.price}</div>

        <ImageSlider imagesArr={selectedProduct.images} />

        <div className="productScreenLabel">{selectedProduct.label}</div>
        <div className="prodScreenButtonsContainer">
          <div className="cartPayButtonContainer">
            <div
              className="cartPayButton"
              onClick={() => addToCart(selectedProduct)}
            >
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
        <div>
          <DisplayInfo title={"Descripcion"}>
            <h3>{selectedProduct.description[0]}</h3>
            <div>{selectedProduct.description[1]}</div>
          </DisplayInfo>
          <DisplayInfo title={"Detalles"}>
            <ul>
              {selectedProduct.specifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </DisplayInfo>
        </div>
        <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
          <div className="productScreenInfoContainer">
            <img src={entrega} alt="" className="infoIcon" />
            <div>ENVIOS A PARTIR DE $1199</div>
          </div>
          <div className="productScreenInfoContainer">
            <img src={check} alt="" className="infoIcon" />
            <div>COMUNICATE CON NOSOTROS</div>
          </div>
        </div>
      </div>
    </>
  );
}
