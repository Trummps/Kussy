import React from "react";
import { FaInstagram } from "react-icons/fa";

const fundadores = [
  {
    nombre: "Ana Pérez",
    rol: "Programadora Web",
    descripcion: "Especialista en desarrollo frontend y backend, creando experiencias digitales únicas.",
    imagen: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/ana_perez",
    link: "#",
  },
  {
    nombre: "Laura Gómez",
    rol: "Creadora de Labiales",
    descripcion: "Diseña y crea labiales exclusivos y artesanales con atención al detalle.",
    imagen: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/laura_gomez",
    link: "#",
  },
  {
    nombre: "Sofía Martínez",
    rol: "Creadora de Labiales",
    descripcion: "Encargada de innovación y desarrollo de nuevos tonos y texturas.",
    imagen: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/sofia_martinez",
    link: "#",
  },
  {
    nombre: "Carlos Ruiz",
    rol: "Marketing & Branding",
    descripcion: "Especialista en estrategias de marca y redes sociales, potenciando la presencia digital.",
    imagen: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/carlos_ruiz",
    link: "#",
  },
  {
    nombre: "Valentina Torres",
    rol: "Diseñadora de Producto",
    descripcion: "Encargada del diseño y presentación de nuevos productos con estilo profesional.",
    imagen: "https://via.placeholder.com/200",
    instagram: "https://instagram.com/valentina_torres",
    link: "#",
  },
];

export default function Fundadores() {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Título con estilo mejorado */}
        <h2 className="text-6xl sm:text-7xl font-extrabold text-center mb-24 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 drop-shadow-lg animate-titleFade">
          Conoce a nuestros fundadores
        </h2>

        <div className="flex flex-wrap justify-center gap-16">
          {fundadores.map((persona, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-3xl opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s`, minWidth: "300px", maxWidth: "350px" }}
            >
              {/* Imagen */}
              <div className="relative group w-52 h-52 mb-8">
                <img
                  src={persona.imagen}
                  alt={persona.nombre}
                  className="w-full h-full rounded-full object-cover border-4 border-blue-200 shadow-md"
                />
              </div>

              {/* Nombre y rol */}
              <h3 className="text-3xl sm:text-3xl font-semibold text-blue-700">{persona.nombre}</h3>
              <p className="text-blue-500 font-medium mt-2 text-lg">{persona.rol}</p>

              {/* Descripción */}
              <p className="mt-5 text-blue-600 text-base leading-relaxed px-6 sm:px-4">
                {persona.descripcion}
              </p>

              {/* Botón Instagram en tonos celestes */}
              <a
                href={persona.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-lg"
              >
                <FaInstagram className="text-2xl" />
                Instagram
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Animaciones */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s forwards;
          }

          @keyframes titleFade {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-titleFade {
            animation: titleFade 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
