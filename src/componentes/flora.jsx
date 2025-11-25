import React from "react";

const Flora = () => {
  const plantas = [
    {
      nombre: "🌿 Macrocystis (Alga Gigante)",
      descripcion:
        "Alga parda que forma bosques submarinos, esenciales para la biodiversidad marina.",
      caracteristicas: [
        "Puede medir más de 30 metros.",
        "Refugio de peces y organismos.",
        "Alta productividad fotosintética.",
      ],
      imagen: "🌿 Macrocystis (Alga Gigante).jpg",
    },
    {
      nombre: "🍃 Algas Rojas",
      descripcion: "Grupo de algas usadas en gastronomía y cosmética.",
      caracteristicas: [
        "Ricas en carragenina.",
        "Habitan zonas rocosas poco profundas.",
        "Gran diversidad de especies.",
      ],
      imagen: "🍃 Algas Rojas.jpg",
    },
    {
      nombre: "🌱 Fitoplancton",
      descripcion:
        "Microalgas microscópicas que forman la base de la cadena alimentaria marina.",
      caracteristicas: [
        "Producen más del 50% del oxígeno del planeta.",
        "Fundamentales para el ecosistema marino.",
        "Altamente presentes por la corriente de Humboldt.",
      ],
      imagen: "fitoplancton.jpg",
    },
    {
      nombre: "🌸 Algas Verdes",
      descripcion:
        "Algas que habitan tanto en zonas rocosas como arenosas, dependiendo de la luz solar.",
      caracteristicas: [
        "Pueden vivir en zonas intermareales.",
        "Importantes en la cadena alimentaria.",
        "Varias especies comestibles.",
      ],
      imagen: "algas verdes.jpg",
    },
  ];

  return (
    <div className="w-[95%] mx-auto mt-10 mb-20 p-8 md:p-12 bg-blue-100 rounded-3xl shadow-xl">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-blue-700 mb-12">
        Flora Marina del Perú
      </h1>

      <div className="flex flex-col gap-10">
        {plantas.map((planta, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Imagen */}
              <img
                src={planta.imagen}
                alt={planta.nombre}
                className="w-full md:w-72 h-52 object-cover rounded-2xl shadow-md"
              />

              {/* Texto */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                  {planta.nombre}
                </h2>

                <p className="text-lg text-blue-900 mb-3">
                  {planta.descripcion}
                </p>

                <ul className="list-disc ml-6 text-blue-900/90">
                  {planta.caracteristicas.map((item, i) => (
                    <li key={i} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flora;
