
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h2>Bienvenidos a NovaMarket</h2>

      <p>
        Descubrí accesorios, periféricos y gadgets
        tecnológicos para trabajar, estudiar y
        disfrutar.
      </p>

      <Link to="/productos">
        Explorar productos
      </Link>
    </section>
  );
}

export default Home;
