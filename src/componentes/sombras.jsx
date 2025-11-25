import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const maquillajes = [
  { id: 1, nombre: "Maybelline The Nudes Palette", precio: 60, marca: "Maybelline", imagen: "/maquillaje1.jpg" },
  { id: 2, nombre: "NYX Ultimate Shadow Palette", precio: 55, marca: "NYX", imagen: "/maquillaje2.jpg" },
  { id: 3, nombre: "Urban Decay Naked Heat", precio: 180, marca: "Urban Decay", imagen: "/maquillaje3.jpg" },
  { id: 4, nombre: "Huda Beauty Nude Obsessions", precio: 150, marca: "Huda Beauty", imagen: "/maquillaje4.jpg" },
  { id: 5, nombre: "Revlon ColorStay", precio: 45, marca: "Revlon", imagen: "/maquillaje5.jpg" },
  { id: 6, nombre: "Fenty Beauty Snap Shadows", precio: 120, marca: "Fenty Beauty", imagen: "/maquillaje6.jpg" },
  { id: 7, nombre: "L'Oréal Color Riche", precio: 50, marca: "L'Oréal", imagen: "/maquillaje7.jpg" },
  { id: 8, nombre: "MAC Eyeshadow Palette", precio: 200, marca: "MAC", imagen: "/maquillaje8.jpg" },
];

function Sombras() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Maquillajes de Ojos
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {maquillajes.map((m) => (
          <div key={m.id} className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col">
            <div className="h-64 w-full overflow-hidden">
              <img src={m.imagen} alt={m.nombre} className="w-full h-full object-cover transition-transform duration-400 hover:scale-105" />
            </div>

            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-blue-900 text-lg font-serif">{m.nombre}</h3>
              <p className="text-blue-700 text-sm italic">{m.marca}</p>
              <p className="text-blue-900 font-bold">S/. {m.precio}</p>

              <button
                onClick={() => agregarProducto({ id: m.id, nombre: m.nombre, precio: m.precio })}
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

export default Sombras;
