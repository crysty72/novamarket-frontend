
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <Routes>
          <Route
            path="/"
            element={<h2>Bienvenidos a NovaMarket 🛒</h2>}
          />

          <Route
            path="/productos"
            element={<h2>Catálogo de productos</h2>}
          />

          <Route
            path="/carrito"
            element={<h2>Carrito de compras</h2>}
          />

          <Route
            path="/login"
            element={<h2>Iniciar sesión</h2>}
          />

          <Route
            path="*"
            element={<h2>Página no encontrada</h2>}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
