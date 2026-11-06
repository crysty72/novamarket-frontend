
import { Link, useParams } from "react-router-dom";
import { productosDemo } from "../data/productosDemo";
import { useCart } from "../context/useCart";


function DetalleProducto() {
  const { id } = useParams();
const { agregarProducto } = useCart();
  const producto = productosDemo.find(
    (item) => String(item.id) === id
  );

  if (!producto) {
    return (
      <section>
        <h2>Producto no encontrado</h2>
        <p>El producto solicitado no está disponible.</p>
        <Link to="/productos">Volver al catálogo</Link>
      </section>
    );
  }

  const precioFormateado = Number(
    producto.precio
  ).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <section className="detalle-producto">
      <Link to="/productos">← Volver al catálogo</Link>

      <h2>{producto.nombre}</h2>

      <p>{producto.descripcion}</p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <p>
        <strong>Precio:</strong> {precioFormateado}
      </p>

      <p>
        <strong>Disponibilidad:</strong>{" "}
        {producto.stock > 0 ? "Disponible" : "Sin stock"}
      </p>

      <button
  type="button"
  disabled={producto.stock <= 0}
  onClick={() => agregarProducto(producto)}
>
  Agregar al carrito
</button>
    </section>
  );
}

export default DetalleProducto;
