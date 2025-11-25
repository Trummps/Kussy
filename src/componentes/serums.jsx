import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const serums = [
  { id: 1, nombre: "The Ordinary Hyaluronic Acid 2% + B5", precio: 85, imagen: "/awaa.jpg", marca: "The Ordinary" },
  { id: 2, nombre: "La Roche-Posay Hyalu B5 Serum", precio: 160, imagen: "/awaaa.jpg", marca: "La Roche-Posay" },
  { id: 3, nombre: "Estée Lauder Advanced Night Repair", precio: 380, imagen: "/awaaaa.jpg", marca: "Estée Lauder" },
  { id: 4, nombre: "Vichy Minéral 89", precio: 140, imagen: "/aawa.jpg", marca: "Vichy" },
  { id: 5, nombre: "CeraVe Hydrating Hyaluronic Serum", precio: 110, imagen: "/aaawa.jpg", marca: "CeraVe" },
  { id: 6, nombre: "Olay Regenerist Serum", precio: 130, imagen: "/awaa.jpg", marca: "Olay" },
  { id: 7, nombre: "Neutrogena Hydro Boost Serum", precio: 95, imagen: "/aaawa.jpg", marca: "Neutrogena" },
  { id: 8, nombre: "Skinceuticals C E Ferulic", precio: 520, imagen: "/ww.jpg", marca: "Skinceuticals" },
];

function Serums() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Serums
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {serums.map((s) => (
          <div
            key={s.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={s.imagen}
                alt={s.nombre}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
              />
            </div>

            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-blue-900 text-lg font-serif">{s.nombre}</h3>
              <p className="text-blue-700 text-sm italic">{s.marca}</p>
              <p className="text-blue-900 font-bold">S/. {s.precio}</p>

              <button
                onClick={() => agregarProducto({ id: s.id, nombre: s.nombre, precio: s.precio })}
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

export default Serums;
