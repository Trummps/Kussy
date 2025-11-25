

import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const pestanas = [
  { id: 1, nombre: "Pestañas Postizas Ardell Demi Wispies", precio: 25, imagen: "/pestañas1.jpg", marca: "Ardell" },
  { id: 2, nombre: "Pestañas Huda Beauty Classic", precio: 60, imagen: "/pestañas2.jpg", marca: "Huda Beauty" },
  { id: 3, nombre: "Pestañas Kiss Lash Couture", precio: 30, imagen: "/pestañas3.jpg", marca: "Kiss" },
  { id: 4, nombre: "Pestañas Velour Lashes Wispy", precio: 70, imagen: "/pestañas4.jpg", marca: "Velour" },
  { id: 5, nombre: "Pestañas Eylure Naturalites", precio: 28, imagen: "/pestañas5.jpg", marca: "Eylure" },
  { id: 6, nombre: "Pestañas Lilly Lashes Miami", precio: 80, imagen: "/pestañas6.jpg", marca: "Lilly Lashes" },
  { id: 7, nombre: "Pestañas MAC Haute & Naughty", precio: 65, imagen: "/pestañas7.jpg", marca: "MAC" },
  { id: 8, nombre: "Pestañas House of Lashes Iconic", precio: 75, imagen: "/pestañas8.jpg", marca: "House of Lashes" },
];

function Pestanas() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Pestañas
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pestanas.map((p) => (
          <div
            key={p.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-blue-900 text-lg font-serif">{p.nombre}</h3>
              <p className="text-blue-700 text-sm italic">{p.marca}</p>
              <p className="text-blue-900 font-bold">S/. {p.precio}</p>
              <button
                onClick={() => agregarProducto({ id: p.id, nombre: p.nombre, precio: p.precio })}
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] mt-1"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease;
        }
      `}</style>
    </div>
  );
}

export default Pestanas;
