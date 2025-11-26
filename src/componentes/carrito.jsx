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
    <div
      className="
      fixed top-24 right-10 w-96 max-h-[80vh] overflow-y-auto p-7 rounded-3xl z-[999999]
      bg-gradient-to-br from-[#dff3ff]/90 via-[#e6f7ff]/70 to-[#cbe8ff]/80
      border border-blue-200/40 shadow-[0_12px_40px_rgba(0,0,0,0.10)]
      backdrop-blur-3xl animate-slideIn
      "
    >
      <h2
        className="
        text-3xl font-extrabold text-center mb-7
        text-[#0d2e4f] tracking-wide drop-shadow-sm
        "
      >
        🛍️ Tu Carrito
      </h2>

      {carrito.length === 0 ? (
        <p className="text-center text-[#0d2e4f]/80 text-lg font-medium">
          Tu carrito está vacío 💙
        </p>
      ) : (
        <>
          <ul className="space-y-5">
            {carrito.map((prod) => (
              <li
                key={prod.id}
                className={`
                  flex items-center justify-between p-4 rounded-3xl
                  bg-gradient-to-br from-[#ffffff] to-[#eaf6ff]
                  shadow-[0_5px_20px_rgba(0,0,0,0.07)]
                  border border-blue-100/50
                  hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                  transition-all duration-300 hover:scale-[1.025]
                  ${addedId === prod.id ? "animate-bounceItem" : ""}
                `}
              >
                <div className="flex-1 ml-3">
                  <p className="text-lg font-semibold text-[#0d2e4f]">{prod.nombre}</p>
                  <p className="text-sm text-[#3b6b92] italic">{prod.marca}</p>
                  <p className="mt-1 font-bold text-[#0d2e4f]">S/. {prod.precio}</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center space-x-2">

                    {/* Botón - */}
                    <button
                      onClick={() => quitarProducto(prod.id, 1)}
                      className="
                        px-3 py-1 rounded-full text-white 
                        bg-[#9fc5e8] hover:bg-[#88b6df]
                        shadow-sm hover:shadow-md transition-all hover:scale-110
                      "
                    >
                      -
                    </button>

                    <span className="text-[#0d2e4f] font-semibold px-2">
                      {prod.cantidad}
                    </span>

                    {/* Botón + */}
                    <button
                      onClick={() => handleAdd(prod)}
                      className="
                        px-3 py-1 rounded-full text-white 
                        bg-[#b8e1ff] hover:bg-[#a1d5fb]
                        shadow-sm hover:shadow-md transition-all hover:scale-110
                      "
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => quitarProducto(prod.id)}
                    className="text-red-400 hover:text-red-600 text-sm font-medium"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* TOTAL */}
          <p
            className={`
              mt-7 text-right font-bold text-2xl text-[#0d2e4f] transition-all
              ${flashTotal ? "scale-110 text-[#1f4f7a]" : ""}
            `}
          >
            Total: S/. {total}
          </p>

          {/* Botón Vaciar */}
          <button
            onClick={limpiarCarrito}
            className="
              mt-6 w-full py-3 rounded-2xl text-white font-bold 
              bg-gradient-to-r from-[#7db9e8] to-[#9ccff5]
              hover:shadow-lg hover:scale-[1.03] transition-all
            "
          >
            Vaciar carrito
          </button>
        </>
      )}

      {/* ANIMACIONES */}
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(-20px) scale(.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideIn { animation: slideIn .5s ease-out forwards; }

        @keyframes bounceItem {
          0% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          60% { transform: translateY(0); }
          85% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        .animate-bounceItem { animation: bounceItem .55s ease-in-out; }
      `}</style>
    </div>
  );
}
