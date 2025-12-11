import React from "react";

const Flora = () => {
  const floraPorSector = [
    {
      sector: "Costa Norte",
      bloques: [
        {
          bloque: "Algas Grandes y Pardas",
          plantas: [
            {
              nombre: "🌿 Macrocystis",
              descripcion: "Alga parda que forma bosques submarinos en la costa norte de Perú.",
              caracteristicas: [
                "Puede medir más de 30 metros.",
                "Refugio de peces y organismos marinos.",
                "Alta productividad fotosintética.",
                "Presente en Piura y Tumbes."
              ],
              peso: "Variable, hasta 50 kg",
              ecosistema: "Zonas costeras rocosas y frías",
              imagen: "/macrocystis.jpg"
            },
            {
              nombre: "🍃 Gracilaria",
              descripcion: "Alga roja usada en gastronomía y producción de agar.",
              caracteristicas: [
                "Rica en polisacáridos.",
                "Habita arrecifes y rocas.",
                "Adaptable a cambios de marea.",
                "Importante en suplementos."
              ],
              peso: "Pequeña a mediana",
              ecosistema: "Costas rocosas y arrecifes",
              imagen: "/gracilaria.jpg"
            },
            {
              nombre: "🟢 Caulerpa racemosa",
              descripcion: "Alga filamentosa que forma tapetes en fondos arenosos.",
              caracteristicas: [
                "Fuente de alimento para peces y erizos.",
                "Ayuda a estabilizar sedimentos.",
                "Crece rápido.",
                "Presente en costas norteñas."
              ],
              peso: "Pequeña a mediana",
              ecosistema: "Fondos arenosos y rocosos",
              imagen: "/caulerpa.jpg"
            },
            {
              nombre: "🌿 Lechuga de Mar",
              descripcion: "Alga verde comestible.",
              caracteristicas: [
                "Alto contenido de calcio.",
                "Crece en zonas intermareales.",
                "De color verde intenso.",
                "Usada en gastronomía y suplementos."
              ],
              peso: "Mediano, hasta 5 kg",
              ecosistema: "Zonas intermareales",
              imagen: "/lechuga_mar.jpg"
            }
          ]
        }
      ]
    },
    {
      sector: "Costa Centro",
      bloques: [
        {
          bloque: "Algas Rojas y Calcáreas",
          plantas: [
            {
              nombre: "🌸 Gelidium",
              descripcion: "Alga roja utilizada para producir agar.",
              caracteristicas: [
                "Crece en marea baja.",
                "Resistente al sol directo.",
                "Usada en alimentos y laboratorios.",
                "Presente en Lima y Callao."
              ],
              peso: "Pequeña",
              ecosistema: "Zonas rocosas someras",
              imagen: "/gelidium.jpg"
            },
            {
              nombre: "🟣 Corallina officinalis",
              descripcion: "Alga roja calcárea que forma hábitats para invertebrados.",
              caracteristicas: [
                "Endurece estructuras con calcio.",
                "Forma hábitat para pequeños animales marinos.",
                "Presente en rocas intermareales.",
                "Base de biodiversidad marina."
              ],
              peso: "Pequeña",
              ecosistema: "Zonas rocosas intermareales",
              imagen: "/corallina.jpg"
            },
            {
              nombre: "🌾 Algas Pardas",
              descripcion: "Algas productoras primarias.",
              caracteristicas: [
                "Tonos cafés oscuros.",
                "Forman praderas oceánicas.",
                "Ricas en yodo.",
                "Base de alimentación para animales marinos."
              ],
              peso: "Mediano a grande",
              ecosistema: "Zonas frías costeras",
              imagen: "/algaspardas.jpg"
            },
            {
              nombre: "🌿 Codium fragile",
              descripcion: "Alga verde filamentosa resistente a corrientes.",
              caracteristicas: [
                "Habita zonas rocosas intermareales.",
                "Usada en gastronomía local.",
                "Contribuye a la biodiversidad marina.",
                "Filamentos densos y resistentes."
              ],
              peso: "Pequeña a mediana",
              ecosistema: "Rocas costeras intermareales",
              imagen: "/codium.jpg"
            }
          ]
        }
      ]
    },
    {
      sector: "Costa Sur",
      bloques: [
        {
          bloque: "Microalgas y Fitoplancton",
          plantas: [
            {
              nombre: "🌱 Fitoplancton",
              descripcion: "Microalgas esenciales en la cadena alimentaria peruana.",
              caracteristicas: [
                "Forman la base de la cadena alimentaria.",
                "Producen más del 50% del oxígeno global.",
                "Altamente presentes por la corriente de Humboldt.",
                "Fundamentales para peces y crustáceos."
              ],
              peso: "Microscópico",
              ecosistema: "Agua superficial del mar peruano",
              imagen: "/fitoplancton.jpg"
            },
            {
              nombre: "🌸 Algas Verdes",
              descripcion: "Algas verdes que habitan zonas rocosas y arenosas del sur peruano.",
              caracteristicas: [
                "Pueden vivir en zonas intermareales.",
                "Importantes en la cadena alimentaria.",
                "Algunas especies comestibles.",
                "Adaptadas a luz solar y corrientes locales."
              ],
              peso: "Pequeñas a medianas",
              ecosistema: "Zonas intermareales y rocosas",
              imagen: "/algas_verdes.jpg"
            },
            {
              nombre: "🌊 Sargassum",
              descripcion: "Alga parda flotante y fijada en la costa sur.",
              caracteristicas: [
                "Forma praderas flotantes.",
                "Base para ecosistemas marinos.",
                "Usada como fertilizante natural.",
                "Presente en zonas intermareales."
              ],
              peso: "Variable, hasta 10 kg",
              ecosistema: "Zonas intermareales y rocosas",
              imagen: "/sargassum.jpg"
            },
            {
              nombre: "🍃 Algas Rojas",
              descripcion: "Grupo de algas usadas en gastronomía y cosmética peruana.",
              caracteristicas: [
                "Ricas en carragenina.",
                "Habitan zonas rocosas poco profundas.",
                "Gran diversidad de especies peruanas.",
                "Importante en alimentos y cosmética."
              ],
              peso: "Pequeñas",
              ecosistema: "Costas rocosas y arrecifes",
              imagen: "/algas_rojas.jpg"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-[95%] mx-auto mt-12 mb-20 p-6 md:p-14 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 rounded-3xl shadow-2xl border border-sky-200 backdrop-blur-lg">
      <h1 className="text-center text-4xl md:text-6xl font-extrabold text-sky-800 mb-14 tracking-wide drop-shadow-lg">
        Flora Marina Nativa del Perú por Sector
      </h1>

      {floraPorSector.map((sectorData, sectorIndex) => (
        <div key={sectorIndex} className="mb-16">
          <h2 className="text-4xl font-extrabold text-sky-600 mb-10 text-center">{sectorData.sector}</h2>
          {sectorData.bloques.map((bloqueData, bloqueIndex) => (
            <div key={bloqueIndex} className="mb-12">
              <h3 className="text-3xl font-bold text-sky-700 mb-8 text-center">{bloqueData.bloque}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {bloqueData.plantas.map((planta, index) => (
                  <div
                    key={index}
                    className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-sky-100 overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={planta.imagen}
                        alt={planta.nombre}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-5 text-sky-900">
                      <h4 className="text-xl font-bold text-sky-800 mb-2">{planta.nombre}</h4>
                      <p className="text-sky-900/80 text-sm leading-relaxed mb-3">{planta.descripcion}</p>
                      <ul className="list-disc ml-5 text-sky-900/80 space-y-1 mb-2 text-sm">
                        {planta.caracteristicas.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-sky-700 mb-1"><strong>Peso:</strong> {planta.peso}</p>
                      <p className="text-sm text-sky-700"><strong>Ecosistema:</strong> {planta.ecosistema}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Flora;