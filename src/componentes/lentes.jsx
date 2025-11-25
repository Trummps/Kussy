import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const productos = [
  { id: 1, nombre: "Ray-Ban Aviator Classic", precio: 450, imagen: "/lentes1.jpg", marca: "Ray-Ban" },
  { id: 2, nombre: "Oakley Holbrook Matte Black", precio: 520, imagen: "/lentes2.jpg", marca: "Oakley" },
  { id: 3, nombre: "Gucci GG0061S Oversized", precio: 890, imagen: "/lentes3.jpg", marca: "Gucci" },
  { id: 4, nombre: "Persol PO0714 Folding Sunglasses", precio: 780, imagen: "/lentes4.jpg", marca: "Persol" },
  { id: 5, nombre: "Prada Linea Rossa PS54IS", precio: 950, imagen: "/lentes5.jpg", marca: "Prada" },
  { id: 6, nombre: "Carrera Champion Polarized", precio: 620, imagen: "/lentes6.jpg", marca: "Carrera" },
  { id: 7, nombre: "Hawkers Carbon Black Sky", precio: 250, imagen: "/lentes7.jpg", marca: "Hawkers" },
  { id: 8, nombre: "Vogue VO5243S Cat Eye", precio: 480, imagen: "/lentes8.jpg", marca: "Vogue" },
];

function Lentes() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">
      <h2 className="text-center text-3xl text-blue-900 mb-8 tracking-wide font-semibold animate-fadeInDown">
        Catálogo de Lentes
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:rotate-1"
          >
            <img
              src={p.imagen}
              alt={p.nombre}
              className="w-full h-48 object-cover transition-transform duration-400 hover:scale-110 hover:rotate-1"
            />
            <div className="p-4 flex flex-col items-center text-center flex-1">
              <h3 className="text-blue-900 text-lg mb-1 font-serif">{p.nombre}</h3>
              <p className="text-blue-700 text-sm mb-1 italic">{p.marca}</p>
              <p className="text-blue-900 font-bold mb-4">S/. {p.precio}</p>
              <button
                onClick={() => agregarProducto({ id: p.id, nombre: p.nombre, precio: p.precio })}
                className="mt-auto bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Lentes;
