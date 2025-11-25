import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const labiales = [
  { id: 1, nombre: "MAC Retro Matte Lipstick", precio: 120, imagen: "/labial1.jpg", marca: "MAC" },
  { id: 2, nombre: "Maybelline SuperStay Matte Ink", precio: 45, imagen: "/labial2.jpg", marca: "Maybelline" },
  { id: 3, nombre: "NYX Soft Matte Lip Cream", precio: 55, imagen: "/labial3.jpg", marca: "NYX" },
  { id: 4, nombre: "Chanel Rouge Allure", precio: 210, imagen: "/labial4.jpg", marca: "Chanel" },
  { id: 5, nombre: "Dior Addict Lipstick", precio: 220, imagen: "/labial5.jpg", marca: "Dior" },
  { id: 6, nombre: "Revlon Super Lustrous", precio: 60, imagen: "/labial6.jpg", marca: "Revlon" },
  { id: 7, nombre: "Fenty Beauty Stunna Lip Paint", precio: 130, imagen: "/labial7.jpg", marca: "Fenty Beauty" },
  { id: 8, nombre: "Huda Beauty Power Bullet Lipstick", precio: 125, imagen: "/labial8.jpg", marca: "Huda Beauty" },
];

function Labiales() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Labiales
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {labiales.map((l) => (
          <div
            key={l.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex flex-col"
          >
            {/* Imagen con altura igualada como Rubores */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={l.imagen}
                alt={l.nombre}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
              />
            </div>

            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-blue-900 text-lg font-serif">{l.nombre}</h3>
              <p className="text-blue-700 text-sm italic">{l.marca}</p>
              <p className="text-blue-900 font-bold">S/. {l.precio}</p>

              <button
                onClick={() =>
                  agregarProducto({ id: l.id, nombre: l.nombre, precio: l.precio })
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

export default Labiales;
