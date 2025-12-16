import React, { useState } from "react";

const PlayasPeru = () => {
  const regiones = [
    { region: "Norte" },
    { region: "Centro" },
    { region: "Centro / Oeste" },
    { region: "Sur" },
  ];

  const playasPorRegion = [
    [
      {
        nombre: "🏝️ Punta Sal (Tumbes)",
        descripcion: "Aguas cálidas y tranquilas ideales para descansar.",
        caracteristicas: [
          "Soleado todo el año",
          "Hoteles frente al mar",
          "Arena clara y fina",
        ],
        extra:
          "Dato curioso: Punta Sal tiene agua de más de 24°C y presencia de delfines.",
        imagen: "/puntasal.jpg",
      },
      {
        nombre: "🏄‍♂️ Máncora (Piura)",
        descripcion: "Ambiente juvenil y olas ideales para surf.",
        caracteristicas: [
          "Sol eterno",
          "Alta actividad turística",
          "Vida nocturna activa",
        ],
        extra:
          "Dato curioso: Máncora es famosa por sus olas largas y constantes.",
        imagen: "/mancora.jpg",
      },
    ],
    [
      {
        nombre: "🌊 Ancón (Lima)",
        descripcion: "Balneario histórico con mar sereno.",
        caracteristicas: [
          "Clima templado",
          "Restaurantes",
          "Aguas tranquilas",
        ],
        extra:
          "Dato curioso: fue uno de los balnearios más exclusivos del país.",
        imagen: "/ancon.jpg",
      },
      {
        nombre: "⛱️ Cerro Azul (Cañete)",
        descripcion: "Playa tranquila con muelle icónico.",
        caracteristicas: [
          "Ambiente familiar",
          "Atardeceres hermosos",
          "Aguas limpias",
        ],
        extra: "Dato curioso: su muelle aparece en varias películas.",
        imagen: "/cerroazul.jpg",
      },
    ],
    [
      {
        nombre: "🏝️ Huanchaco (La Libertad)",
        descripcion: "Famosa por los caballitos de totora.",
        caracteristicas: [
          "Reserva mundial de surf",
          "Cultura viva",
          "Mar templado",
        ],
        extra:
          "Dato curioso: los caballitos de totora tienen más de 3000 años.",
        imagen: "/huanchaco.jpg",
      },
      {
        nombre: "🛥️ Islas Ballestas (Ica)",
        descripcion: "Islas con gran biodiversidad marina.",
        caracteristicas: [
          "Aves marinas",
          "Lobos marinos",
          "Paisajes únicos",
        ],
        extra:
          "Dato curioso: albergan una de las mayores colonias de lobos marinos.",
        imagen: "/islasballestas.png",
      },
    ],
    [
      {
        nombre: "🏖️ La Mina (Paracas)",
        descripcion: "Aguas cristalinas dentro de la reserva.",
        caracteristicas: [
          "Arena clara",
          "Ideal para snorkel",
          "Zona protegida",
        ],
        extra:
          "Dato curioso: su forma crea una piscina natural.",
        imagen: "/lamina.jpg",
      },
      {
        nombre: "🏝️ Playa Roja (Paracas)",
        descripcion: "Arena rojiza por rocas volcánicas.",
        caracteristicas: [
          "Fotografía ideal",
          "Clima estable",
          "Acantilados",
        ],
        extra:
          "Dato curioso: el color proviene de la erosión volcánica.",
        imagen: "/playaroja.jpg",
      },
    ],
  ];

  const PlayaCard = ({ playa }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => setOpen(!open)}
        className="bg-[#A9C7DA] rounded-3xl shadow-lg 
        border border-white/40 overflow-hidden 
        transition-all duration-500 hover:scale-[1.02] cursor-pointer"
      >
        <img
          src={playa.imagen}
          alt={playa.nombre}
          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="p-6 text-sky-900">
          <h3 className="text-2xl font-extrabold mb-2">
            {playa.nombre}
          </h3>

          <p className="opacity-80 mb-3">
            {playa.descripcion}
          </p>

          <ul className="list-disc ml-5 space-y-1 text-sm opacity-80">
            {playa.caracteristicas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div
            className={`mt-4 bg-white/70 rounded-xl px-4 py-3 text-sm italic
            transition-all duration-500 ${
              open
                ? "max-h-32 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {playa.extra}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#CFE8FF] py-16 px-4">
      <h1 className="text-center text-5xl font-extrabold text-sky-900 mb-20">
        Playas del Perú
      </h1>

      <div className="w-[95%] mx-auto space-y-24">
        {regiones.map((region, idx) => (
          <section key={idx}>
            <h2 className="text-4xl font-bold text-center mb-12 text-sky-900">
              {region.region}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {playasPorRegion[idx].map((playa, i) => (
                <PlayaCard key={i} playa={playa} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PlayasPeru;
