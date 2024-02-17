import Cart from "./Cart";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <ul className="headerLinks">
        <li>CALZADO</li>
        <li>Mujer</li>
        <li>Hombre</li>
      </ul>
      <div className="auxiliar-menu">
        <input type="text" placeholder="Search" className="search" />
        <div>User</div>
        <div>Favs</div>
        <Cart />
      </div>
    </div>
  );
}
