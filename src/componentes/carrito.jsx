import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "./CarritoContext";

export default function Carrito() {
  const { carrito, agregarProducto, quitarProducto, limpiarCarrito } = useContext(CarritoContext);
  const [total, setTotal] = useState(0);
  const [flashTotal, setFlashTotal] = useState(false);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    const nuevoTotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    if (total !== nuevoTotal) {
      setFlashTotal(true);
      setTimeout(() => setFlashTotal(false), 300);
    }
    setTotal(nuevoTotal);
  }, [carrito]);

  const handleAdd = (producto) => {
    agregarProducto(producto);
    setAddedId(producto.id);
    setTimeout(() => setAddedId(null), 500);
  };

  return (
    <div className="fixed top-24 right-10 w-96 max-h-[80vh] overflow-y-auto p-6 bg-gradient-to-br from-blue-100/70 via-blue-50 to-blue-100 backdrop-blur-lg shadow-2xl rounded-3xl z-[999999] border border-blue-200 animate-slideIn">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-900 tracking-wide animate-pulse">
        🛒 Carrito
      </h2>

      {carrito.length === 0 ? (
        <p className="text-center text-blue-700 text-lg font-semibold">¡Tu carrito está vacío! 💙</p>
      ) : (
        <>
          <ul className="space-y-4">
            {carrito.map((producto) => (
              <li
                key={producto.id}
                className={`flex items-center justify-between p-3 rounded-2xl shadow-md hover:scale-105 hover:bg-blue-100 transition-all duration-300 transform ${
                  addedId === producto.id ? "animate-bounceItem" : ""
                }`}
              >
                <div className="flex-1 ml-4">
                  <p className="font-semibold text-blue-900 text-lg">{producto.nombre}</p>
                  <p className="text-sm text-blue-600 italic">{producto.marca}</p>
                  <p className="font-bold text-blue-900 mt-1">S/. {producto.precio}</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => quitarProducto(producto.id, 1)}
                      className="px-3 py-1 bg-red-300 text-white rounded-full shadow-sm hover:bg-red-400 hover:scale-110 transition-all"
                    >
                      -
                    </button>
                    <span className="text-blue-900 font-medium px-2">{producto.cantidad}</span>
                    <button
                      onClick={() => handleAdd(producto)}
                      className="px-3 py-1 bg-green-300 text-white rounded-full shadow-sm hover:bg-green-400 hover:scale-110 transition-all"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => quitarProducto(producto.id)}
                    className="text-red-500 hover:text-red-700 text-sm mt-1"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p
            className={`mt-6 text-right font-bold text-xl text-blue-900 transition-all ${
              flashTotal ? "scale-110 text-blue-700" : ""
            }`}
          >
            Total: S/. {total}
          </p>

          <button
            onClick={limpiarCarrito}
            className="mt-4 w-full py-3 bg-red-300 text-white font-semibold rounded-2xl hover:bg-red-400 shadow-lg transition-all transform hover:scale-105"
          >
            Vaciar carrito
          </button>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        @keyframes bounceItem {
          0% { transform: translateY(0); }
          25% { transform: translateY(-4px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        .animate-bounceItem {
          animation: bounceItem 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
