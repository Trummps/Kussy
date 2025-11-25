import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarProducto = (id, cantidad = null) => {
    setCarrito((prev) =>
      prev
        .map((p) => {
          if (p.id === id) {
            if (cantidad && p.cantidad > cantidad) {
              return { ...p, cantidad: p.cantidad - cantidad };
            }
            return null; // eliminar completamente
          }
          return p;
        })
        .filter(Boolean)
    );
  };

  const limpiarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, quitarProducto, limpiarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
