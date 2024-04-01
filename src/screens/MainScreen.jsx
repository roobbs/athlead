import "../styles/MainScreen.css";
import { Link } from "react-router-dom";
import WhiteButton from "../components/WhiteButton";
import all from "../images/all.jpg";
import men from "../images/men.jpg";
import women from "../images/women.jpg";

export default function MainScreen() {
  return (
    <div className="mainScreenContainer">
      <div className="container">
        <img src={all} alt="mainPic" className="mainPic" />
        <Link to="all" className="mainScreenLink">
          <WhiteButton text="Ver todo el calzado" />
        </Link>
      </div>
      <div className="secondContainer">
        <div className="container">
          <img src={men} alt="" className="mainPic" />
          <Link to="men" className="mainScreenLink">
            <WhiteButton text="Comprar calzado para Hombre" />
          </Link>
        </div>
        <div className="container">
          <img src={women} alt="" className="mainPic" />
          <Link to="women" className="mainScreenLink">
            <WhiteButton text="Comprar calzado para mujer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
