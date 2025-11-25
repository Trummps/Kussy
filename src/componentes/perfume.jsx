import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const productos = [
  { id: 1, nombre: "Dior Sauvage Eau de Toilette", precio: 520, imagen: "/perfume1.jpg", marca: "Dior" },
  { id: 2, nombre: "Chanel Bleu de Chanel", precio: 580, imagen: "/perfume2.jpg", marca: "Chanel" },
  { id: 3, nombre: "Yves Saint Laurent Y Eau de Parfum", precio: 540, imagen: "/perfume3.jpg", marca: "YSL" },
  { id: 4, nombre: "Versace Eros Eau de Toilette", precio: 490, imagen: "/perfume4.jpg", marca: "Versace" },
  { id: 5, nombre: "Carolina Herrera 212 VIP Men", precio: 460, imagen: "/perfume5.jpg", marca: "Carolina Herrera" },
  { id: 6, nombre: "Armani Acqua di Gio", precio: 550, imagen: "/perfume6.jpg", marca: "Giorgio Armani" },
  { id: 7, nombre: "Paco Rabanne 1 Million", precio: 480, imagen: "/perfume7.jpg", marca: "Paco Rabanne" },
  { id: 8, nombre: "Jean Paul Gaultier Le Male", precio: 520, imagen: "/perfume8.jpg", marca: "Jean Paul Gaultier" },
];

function Perfume() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Catálogo de Perfumes
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1"
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
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 mt-1"
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

export default Perfume;
