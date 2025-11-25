import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const cejas = [
  { id: 1, nombre: "Anastasia Beverly Hills Brow Wiz", precio: 120, imagen: "/cejas1.jpg", marca: "Anastasia" },
  { id: 2, nombre: "Benefit Precisely, My Brow Pencil", precio: 115, imagen: "/cejas2.jpg", marca: "Benefit" },
  { id: 3, nombre: "NYX Micro Brow Pencil", precio: 45, imagen: "/cejas3.jpg", marca: "NYX" },
  { id: 4, nombre: "Maybelline TattooStudio Brow", precio: 55, imagen: "/cejas4.jpg", marca: "Maybelline" },
  { id: 5, nombre: "L'Oréal Brow Artist Designer", precio: 60, imagen: "/cejas5.jpg", marca: "L'Oréal" },
  { id: 6, nombre: "Essence Make Me Brow", precio: 35, imagen: "/cejas6.jpg", marca: "Essence" },
  { id: 7, nombre: "Revlon ColorStay Brow Pencil", precio: 50, imagen: "/cejas7.jpg", marca: "Revlon" },
  { id: 8, nombre: "Clinique Brow Pencil", precio: 80, imagen: "/cejas8.jpg", marca: "Clinique" },
];

function Cejas() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Cejas
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cejas.map((c) => (
          <div
            key={c.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col"
          >
            <div className="h-64 sm:h-56 md:h-60 lg:h-64 w-full overflow-hidden">
              <img
                src={c.imagen}
                alt={c.nombre}
                className="w-full h-full object-contain transition-transform duration-400 hover:scale-105"
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
                className="mt-auto bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
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

export default Cejas;
