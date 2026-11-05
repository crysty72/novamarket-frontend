
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav aria-label="Navegación principal">
        <Link to="/">
          <h1>NovaMarket</h1>
        </Link>

        <div>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/login">Ingresar</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
