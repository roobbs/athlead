import Cart from "./Cart";
import "../styles/Header.css";
import searchImg from "../assets/buscar.png";
import cancelSearch from "../assets/x.png";
import userImg from "../assets/usuario.png";
import favImg from "../assets/favorito.png";
import athlead from "../assets/athlead.png";
import Footer from "./Footer";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App/App";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const { favItems } = useContext(ShopContext);

  function handleSearch(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="header">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="headerMenuIcons">
          <MdMenu className="menuIcon" size={50} />
        </label>
        <Link to="/" className="logoContainer">
          <img src={athlead} alt="logo" className="logo" />
        </Link>
        <div className="menuContainer">
          <label htmlFor="check" className="headerMenuIcons">
            <Link to="/" className="logoContainer">
              <img src={athlead} alt="logo" className="logo" />
            </Link>
            <IoClose className="closeIcon" size={50} />
          </label>
          <ul className="headerLinks">
            <li className="links">
              <Link to="all">
                <div>CALZADO</div>
              </Link>
            </li>
            <li className="links">
              <Link to="women">
                <div>Mujer</div>
              </Link>
            </li>
            <li className="links">
              <Link to="men">
                <div>Hombre</div>
              </Link>
            </li>
          </ul>
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
        </div>

        <div className="auxiliar-menu">
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
