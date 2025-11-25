import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const productos = [
  { id: 1, nombre: "Nivea Soft Crema Hidratante", precio: 35, imagen: "/cremaa1.jpg", marca: "Nivea" },
  { id: 2, nombre: "Cetaphil Crema Hidratante Corporal", precio: 95, imagen: "/crema2.jpg", marca: "Cetaphil" },
  { id: 3, nombre: "Neutrogena Hydro Boost Water Gel", precio: 110, imagen: "/crema3.jpg", marca: "Neutrogena" },
  { id: 4, nombre: "Eucerin pH5 Crema Facial", precio: 89, imagen: "/crema4.jpg", marca: "Eucerin" },
  { id: 5, nombre: "The Body Shop Vitamin E Moisture Cream", precio: 120, imagen: "/cremaa5.jpg", marca: "The Body Shop" },
  { id: 6, nombre: "La Roche-Posay Toleriane Sensitive", precio: 140, imagen: "/crema6.jpg", marca: "La Roche-Posay" },
  { id: 7, nombre: "L’Oréal Paris Revitalift Día", precio: 95, imagen: "/crema7.jpg", marca: "L’Oréal Paris" },
  { id: 8, nombre: "Clinique Moisture Surge 72H", precio: 180, imagen: "/crema8.jpg", marca: "Clinique" },
];

function Crema() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="w-full min-h-screen mt-12 p-10 sm:p-16 font-serif bg-gradient-to-br from-blue-50 to-blue-100">
      {/* TÍTULO */}
      <h2 className="text-center text-3xl text-blue-900 mb-12 font-semibold tracking-wide animate-fadeInDown">
        Catálogo de Cremas
      </h2>

      {/* GRID DE PRODUCTOS */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            {/* IMAGEN */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* CONTENIDO */}
            <div className="p-5 text-center flex flex-col">
              <h3 className="text-blue-900 text-lg font-semibold mb-1">{p.nombre}</h3>
              <p className="text-blue-700 text-sm italic mb-1">{p.marca}</p>
              <p className="text-blue-900 font-bold mb-4">S/. {p.precio}</p>

              <button
                onClick={() =>
                  agregarProducto({ id: p.id, nombre: p.nombre, precio: p.precio })
                }
                className="mt-auto bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ANIMACIÓN */}
      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-18px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDown {
            animation: fadeInDown .9s ease-out;
          }
        `}
      </style>
    </div>
  );
}

export default Crema;
