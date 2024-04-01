import "../styles/MainScreen.css";
import { Link } from "react-router-dom";

export default function MainScreen() {
  return (
    <>
      <div>hola</div>
      <Link to="all">Ver todo el calzado</Link>
      <Link to="women">Ver el calzado para mujer</Link>
      <Link to="men">Ver el calzado para hombre</Link>
    </>
  );
}
