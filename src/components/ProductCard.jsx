import { Link } from "react-router-dom";
function ProductCard({ producto, onAgregarCarrito }) {
  const precio = Number(producto.precio);

  return (
    <article className="product-card">
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      )}

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <p>
        <strong>
          {precio.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </strong>
      </p>

      <p>
        {producto.stock > 0
          ? "Disponible"
          : "Sin stock"}
      </p>

      <button
        type="button"
        disabled={producto.stock <= 0}
        onClick={() => onAgregarCarrito?.(producto)}
      >
<Link
  to={`/productos/${producto.id}`}
  className="ver-detalle"
>
  Ver detalle
</Link>

        Agregar al carrito
      </button>
    </article>
  );
}

export default ProductCard;
