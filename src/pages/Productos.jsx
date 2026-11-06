
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { productosDemo } from "../data/productosDemo";

// Datos ficticios para desarrollo.
// Se reemplazarán al integrar la API de Backend.


function Productos() {
  const [categoria, setCategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const categorias = [
    "Todas",
    "Periféricos",
    "Accesorios",
    "Gadgets",
  ];

  // Combinar búsqueda por nombre y filtro por categoría.
  const productosFiltrados = productosDemo.filter((producto) => {
    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  const handleAgregarCarrito = (producto) => {
    // Temporal: el carrito se implementará posteriormente.
    console.log("Producto seleccionado:", producto);
  };

  return (
    <section className="productos">
      <h2>Catálogo de productos</h2>

      <p>
        Explorá nuestros accesorios, periféricos y gadgets.
      </p>

      {/* Buscador */}
      <div className="buscador">
        <label htmlFor="buscar-producto">
          Buscar productos
        </label>

        <input
          id="buscar-producto"
          type="search"
          placeholder="Ej.: teclado, mouse..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Filtro por categoría */}
      <div className="filtros">
        <label htmlFor="categoria">
          Filtrar por categoría:
        </label>

        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Listado de productos */}
      {productosFiltrados.length === 0 ? (
        <p className="sin-resultados">
          No se encontraron productos con los filtros seleccionados.
        </p>
      ) : (
        <div className="productos-grid">
          {productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onAgregarCarrito={handleAgregarCarrito}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Productos;
