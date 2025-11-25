import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const productosEjemplo = [
  { id: 1, nombre: "Producto A", precio: 10 },
  { id: 2, nombre: "Producto B", precio: 20 },
  { id: 3, nombre: "Producto C", precio: 30 },
];

export default function Productos() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {productosEjemplo.map((producto) => (
        <div key={producto.id} className="border rounded p-4 shadow-md">
          <h3 className="font-semibold text-lg">{producto.nombre}</h3>
          <p className="text-gray-700">${producto.precio}</p>
          <button
            onClick={() => agregarProducto(producto)}
            className="mt-2 px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}
