import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const rimeles = [
  { id: 1, nombre: "Maybelline Lash Sensational", precio: 55, imagen: "/rimel1.jpg", marca: "Maybelline" },
  { id: 2, nombre: "L'Oréal Voluminous Lash Paradise", precio: 65, imagen: "/rimel2.jpg", marca: "L'Oréal" },
  { id: 3, nombre: "Benefit They're Real! Mascara", precio: 120, imagen: "/rimel3.jpg", marca: "Benefit" },
  { id: 4, nombre: "Too Faced Better Than Sex", precio: 130, imagen: "/rimel4.jpg", marca: "Too Faced" },
  { id: 5, nombre: "Essence Lash Princess", precio: 40, imagen: "/rimel5.jpg", marca: "Essence" },
  { id: 6, nombre: "MAC Haute & Naughty Lash", precio: 110, imagen: "/rimel6.jpg", marca: "MAC" },
  { id: 7, nombre: "Clinique High Impact Mascara", precio: 95, imagen: "/rimel7.jpg", marca: "Clinique" },
  { id: 8, nombre: "Revlon Volumazing Mascara", precio: 50, imagen: "/rimel8.jpg", marca: "Revlon" },
];

function Rimeles() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Rímeles
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rimeles.map((r) => (
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
                onClick={() => agregarProducto({ id: r.id, nombre: r.nombre, precio: r.precio })}
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

export default Rimeles;
