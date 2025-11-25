import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const rubores = [
  { id: 1, nombre: "Milani Baked Blush", precio: 45, marca: "Milani", imagen: "/rubor1.jpg" },
  { id: 2, nombre: "NARS Orgasm Blush", precio: 130, marca: "NARS", imagen: "/rubor2.jpg" },
  { id: 3, nombre: "MAC Powder Blush", precio: 110, marca: "MAC", imagen: "/rubor3.jpg" },
  { id: 4, nombre: "Benefit Cosmetics GALifornia", precio: 140, marca: "Benefit", imagen: "/rubor4.jpg" },
  { id: 5, nombre: "Maybelline Fit Me Blush", precio: 35, marca: "Maybelline", imagen: "/rubor5.jpg" },
  { id: 6, nombre: "Revlon Powder Blush", precio: 50, marca: "Revlon", imagen: "/rubor6.jpg" },
  { id: 7, nombre: "L'Oréal Paris True Match Blush", precio: 55, marca: "L'Oréal", imagen: "/rubor7.jpg" },
  { id: 8, nombre: "e.l.f. Cosmetics Blush Palette", precio: 40, marca: "e.l.f.", imagen: "/rubor8.jpg" },
];

function Rubores() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Rubores
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rubores.map((r) => (
          <div
            key={r.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={r.imagen}
                alt={r.nombre}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-blue-900 text-lg font-serif">{r.nombre}</h3>
              <p className="text-blue-700 text-sm italic">{r.marca}</p>
              <p className="text-blue-900 font-bold">S/. {r.precio}</p>
              <button
                onClick={() =>
                  agregarProducto({ id: r.id, nombre: r.nombre, precio: r.precio })
                }
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

export default Rubores;
