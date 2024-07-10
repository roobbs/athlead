import "../styles/MainScreen.css";
import { Link } from "react-router-dom";
import WhiteButton from "../components/WhiteButton";
import all from "../images/all.webp";
import men from "../images/samba.webp";
import women from "../images/wom.webp";
import { IoClose } from "react-icons/io5";

export default function MainScreen() {
  return (
    <div className="mainScreenContainer">
      <input type="checkbox" id="cuponCheckbox" />
      <div className="cuponContainer">
        <div>15% EXTRA usando el código 🎫ATHLEAD15🎫</div>
        <label htmlFor="cuponCheckbox">
          <IoClose size={30} />
        </label>
      </div>
      <div className="topBar">
        <img src={all} alt="mainPic" className="mainPic" />
        <Link to="all" className="mainScreenLink">
          <WhiteButton text="Ver todo el calzado" />
        </Link>
      </div>
      {/* <div className="animationContainer">
        <div className="animationTitle">🛒FINAL DE TEMPORADA 🛒</div>
        <div>
          Usa el código 🎫ATHLEAD15🎫 y obtén 15% OFF adicional en tus compras
          de final de temporada
        </div>
      </div> */}
      <div className="secondContainer">
        <div className="container">
          <img src={women} alt="" className="mainPic" />
          <Link to="women" className="mainScreenLink">
            <WhiteButton text="Comprar calzado para Mujer" />
          </Link>
        </div>
        <div className="container">
          <img src={men} alt="" className="mainPic" />
          <Link to="men" className="mainScreenLink">
            <WhiteButton text="Comprar calzado para Hombre" />
          </Link>
        </div>
      </div>
    </div>
  );
}
