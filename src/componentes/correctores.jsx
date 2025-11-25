import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const correctores = [
  { id: 1, nombre: "Maybelline Fit Me Concealer", precio: 40, imagen: "/corrector1.jpg", marca: "Maybelline" },
  { id: 2, nombre: "COrean Fit Me Concealer", precio: 40, imagen: "/valentina.jpg", marca: "Maybelline" },
  { id: 3, nombre: "L.A. Girl Pro Conceal", precio: 35, imagen: "/corrector3.jpg", marca: "L.A. Girl" },
  { id: 4, nombre: "Tarte Shape Tape", precio: 150, imagen: "/corrector4.jpg", marca: "Tarte" },
  { id: 5, nombre: "MAC Studio Finish", precio: 100, imagen: "/corrector5.jpg", marca: "MAC" },
  { id: 6, nombre: "Revlon PhotoReady", precio: 50, imagen: "/corrector6.jpg", marca: "Revlon" },
  { id: 7, nombre: "Fenty Beauty Pro Filt'r", precio: 130, imagen: "/corrector7.jpg", marca: "Fenty Beauty" },
  { id: 8, nombre: "Catrice Liquid Camouflage", precio: 25, imagen: "/corrector8.jpg", marca: "Catrice" },
];

function Correctores() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Correctores
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {correctores.map((c) => (
          <div
            key={c.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col"
          >
            {/* Imagen con altura igualada como Labiales */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={c.imagen}
                alt={c.nombre}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
              />
            </div>

            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-blue-900 text-lg font-serif">{c.nombre}</h3>
              <p className="text-blue-700 text-sm italic">{c.marca}</p>
              <p className="text-blue-900 font-bold">S/. {c.precio}</p>

              <button
                onClick={() =>
                  agregarProducto({ id: c.id, nombre: c.nombre, precio: c.precio })
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

export default Correctores;
