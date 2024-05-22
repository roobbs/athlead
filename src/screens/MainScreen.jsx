import "../styles/MainScreen.css";
import { Link } from "react-router-dom";
import WhiteButton from "../components/WhiteButton";
import all from "../images/women.webp";
import all2 from "../images/men.webp";
import men from "../images/samba.webp";
import women from "../images/wom.webp";

export default function MainScreen() {
  return (
    <div className="mainScreenContainer">
      <div className="secondContainer">
        <div className="container">
          <img src={all} alt="mainPic" className="mainPic" />
          <Link to="all" className="mainScreenLink">
            <WhiteButton text="Ver todo el calzado" />
          </Link>
        </div>
        <div className="container">
          <img src={women} alt="" className="mainPic" />
          <Link to="women" className="mainScreenLink">
            <WhiteButton text="Comprar calzado para Mujer" />
          </Link>
        </div>
        <div className="container">
          <img src={all2} alt="mainPic" className="mainPic" />
          {/* <Link to="all" className="mainScreenLink">
            <WhiteButton text="Ver todo el calzado" />
          </Link> */}
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
