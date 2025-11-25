import React from "react";

const Fauna = () => {
  const animales = [
    {
      nombre: "🐬 Delfín Nariz de Botella",
      descripcion:
        "Mamífero marino altamente inteligente que habita en las aguas templadas del mar peruano.",
      caracteristicas: [
        "Alcanzan velocidades de hasta 35 km/h.",
        "Viven en grupos sociales llamados manadas.",
        "Se comunican mediante sonidos complejos.",
      ],
      imagen: "delfin.jpg",
    },
    {
      nombre: "🦭 Lobo Marino Sudamericano",
      descripcion:
        "Es uno de los mamíferos más representativos del litoral peruano.",
      caracteristicas: [
        "Machos poseen una gran melena característica.",
        "Son excelentes nadadores.",
        "Se alimentan de peces y mariscos.",
      ],
      imagen: "lobo.jpg",
    },
    {
      nombre: "🐠 Anchoveta Peruana",
      descripcion:
        "Es la especie más abundante del mar peruano y base de la cadena trófica.",
      caracteristicas: [
        "Sostiene una de las pesquerías más grandes del mundo.",
        "Altamente dependiente de la corriente de Humboldt.",
        "Se alimenta principalmente de fitoplancton.",
      ],
      imagen: "anchoveta.jpg",
    },
    {
      nombre: "🐙 Pulpo Común",
      descripcion:
        "Invertebrado muy inteligente presente en zonas rocosas del litoral.",
      caracteristicas: [
        "Posee tres corazones y sangre azul.",
        "Puede camuflarse cambiando de color.",
        "Tiene ocho brazos con ventosas fuertes.",
      ],
      imagen: "pulpo.jpg",
    },
    {
      nombre: "🐧 Pingüino de Humboldt",
      descripcion:
        "Ave marina característica de la corriente fría de Humboldt.",
      caracteristicas: [
        "No vuela, pero es excelente nadador.",
        "Anida en cuevas costeras.",
        "Está considerado especie vulnerable.",
      ],
      imagen: "pinguino.jpg",
    },
    {
      nombre: "🦑 Calamar Gigante (Pota)",
      descripcion:
        "Uno de los invertebrados más representativos y capturados en el mar peruano.",
      caracteristicas: [
        "Puede superar los 2 metros.",
        "Muy veloz y de comportamiento migratorio.",
        "Importancia económica en la pesca.",
      ],
      imagen: "calamar.jpg",
    }
  ];

  return (
    <div className="w-[95%] mx-auto mt-10 mb-20 p-10 md:p-14 bg-sky-100 rounded-3xl shadow-2xl">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-sky-700 mb-12">
        Fauna Marina del Perú
      </h1>

      {animales.map((animal, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={animal.imagen}
              alt={animal.nombre}
              className="w-full md:w-72 rounded-2xl object-cover shadow-xl transition-all duration-500 hover:scale-105"
            />

            <div className="flex-1 text-sky-900">
              <h2 className="text-2xl font-semibold text-sky-700 mb-3 border-b-4 border-sky-300 pb-1 inline-block">
                {animal.nombre}
              </h2>

              <p className="leading-relaxed text-lg mb-3">{animal.descripcion}</p>

              <ul className="list-disc ml-5 text-sky-900/90">
                {animal.caracteristicas.map((item, i) => (
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
  );
};

export default Fauna;
