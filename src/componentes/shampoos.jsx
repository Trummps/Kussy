import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const shampoos = [
  { id: 1, nombre: "Head & Shoulders Classic Clean", precio: 35, marca: "Head & Shoulders", imagen: "/camu1.jpg" },
  { id: 2, nombre: "Pantene Pro-V Hidratación", precio: 30, marca: "Pantene", imagen: "/uno.jpg" },
  { id: 3, nombre: "L'Oréal Elvive Total Repair", precio: 40, marca: "L'Oréal", imagen: "/tres.jpg" },
  { id: 4, nombre: "Dove Nutritive Solutions", precio: 38, marca: "Dove", imagen: "/dos.jpg" },
  { id: 5, nombre: "Garnier Fructis Strength", precio: 32, marca: "Garnier", imagen: "/cuatro.jpg" },
  { id: 6, nombre: "Herbal Essences Bio:Renew", precio: 45, marca: "Herbal Essences", imagen: "/unoo.jpg" },
  { id: 7, nombre: "TRESemmé Keratin Smooth", precio: 50, marca: "TRESemmé", imagen: "/cinco.jpg" },
  { id: 8, nombre: "Biolage Hydrasource", precio: 55, marca: "Biolage", imagen: "/unno.jpg" },
];

function Shampoos() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Shampoos
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shampoos.map((s) => (
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

export default Shampoos;
