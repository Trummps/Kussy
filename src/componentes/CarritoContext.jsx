import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(true);

  // AGREGAR PRODUCTO
  const agregarProducto = (producto) => {
    if (!producto.precio) {
      console.error("Producto sin precio:", producto);
      return;
    }

    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [
        ...prev,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1,
        },
      ];
    });
  };

  // QUITAR PRODUCTO
  const quitarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  // LIMPIAR CARRITO
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  // CERRAR RESULTADOS
  const cerrarResultados = () => {
    setCarrito([]);
    setMostrarResultados(false);
  };

  // TOTAL
  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        quitarProducto,
        limpiarCarrito,
      }}
    >
      {children}

      {mostrarResultados && (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
          <h2>Carrito</h2>

          {carrito.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <>
              {carrito.map((p) => (
                <div key={p.id} style={{ marginBottom: "10px" }}>
                  <strong>{p.nombre}</strong>
                  <p>Precio: S/ {p.precio}</p>
                  <p>Cantidad: {p.cantidad}</p>
                  <p>
                    Subtotal: <b>S/ {p.precio * p.cantidad}</b>
                  </p>
                </div>
              ))}

              <h3>Total: S/ {total}</h3>
            </>
          )}
        </div>
      )}
    </CarritoContext.Provider>
  );
}
