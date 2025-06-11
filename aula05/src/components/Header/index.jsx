import { Link } from "react-router-dom";
import "./style.css";
export default function Header() {
  return (
    <header>
      <h2>Empresa XPTO </h2>
      <div className="menu">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/empresa"}>Empresa</Link>
          </li>
          <li>
            <Link to={"/contato"}>Contato</Link>
          </li>
          <li>
            <Link to={"/noticias"}>Notícias</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
