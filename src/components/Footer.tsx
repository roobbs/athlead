import "../styles/Footer.css";
import yt from "../assets/youtube.png";
import fb from "../assets/facebook.png";
import tw from "../assets/twitter.png";
import insta from "../assets/instagram.png";

export default function Footer() {
  return (
    <>
      <div className="footer1">
        <div>
          <div className="footerTitle">Asistencia</div>
          <ul>
            <li className="li">Dudas Frecuentes</li>
            <li className="li">Realizar Pedidos</li>
            <li className="li">Pago</li>
            <li className="li">Envío</li>
            <li className="li">Devoluciones</li>
            <li className="li">Guia de tallas</li>
          </ul>
        </div>
        <div>
          <div className="footerTitle">Informacion de la empresa</div>
          <ul>
            <li className="li">Acerca de Nosotros</li>
            <li className="li">Contactanos</li>
            <li className="li">Información Corporativa</li>
          </ul>
        </div>
        <div>
          <div className="footerTitle">Siguenos</div>
          <ul>
            <li>
              <img src={yt} alt="" className="followImg" />
            </li>
            <li>
              <img src={fb} alt="" className="followImg" />
            </li>
            <li>
              <img src={tw} alt="" className="followImg" />
            </li>
            <li>
              <img src={insta} alt="" className="followImg" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer2">
        <ul className="ulConfig">
          <li>Configuracion de las cookies</li>
          <li>Nuestros Datos</li>
          <li>Terminos y Condiciones</li>
          <li>Uso del Sitio</li>
          <li>Aviso de Privacidad</li>
        </ul>
        <div style={{ textAlign: "center" }}>
          © 2023 roobbs Mexico S.A. de C.V.
        </div>
      </div>
    </>
  );
}
