import Cart from "./Cart";
import "../styles/Header.css";
import searchImg from "../assets/buscar.png";
import cancelSearch from "../assets/x.png";
import userImg from "../assets/usuario.png";
import favImg from "../assets/favorito.png";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App/App";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const { favItems } = useContext(ShopContext);

  function handleSearch(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <ul className="headerLinks">
          <li className="links">
            <Link to="/">
              <div>CALZADO</div>
            </Link>
          </li>
          <li className="links">Mujer</li>
          <li className="links">Hombre</li>
        </ul>
        <div className="auxiliar-menu">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Buscar"
              className="search"
              value={inputValue}
              onChange={handleSearch}
            />
            {inputValue.length >= 1 ? (
              <img
                src={cancelSearch}
                alt="img"
                className="inputImg"
                onClick={() => setInputValue("")}
              />
            ) : (
              <img src={searchImg} alt="img" className="inputImg" />
            )}
          </div>
          <div>
            <img src={userImg} alt="" className="inputImg" />
          </div>
          <Link to={"favorites"} className="favIconContainer">
            <img src={favImg} alt="" className="inputImg" />
            {favItems.length > 0 && (
              <div className="favNum">{favItems.length}</div>
            )}
          </Link>
          <Link to="cart">
            <Cart />
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
