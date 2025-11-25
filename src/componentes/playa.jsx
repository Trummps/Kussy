import React from "react";

const PlayasPeru = () => {
  const playas = [
    {
      nombre: "Punta Sal (Tumbes)",
      descripcion:
        "Playa cálida y de aguas claras, con arena blanca, ideal para descansar en familia.",
      razones: "Clima cálido todo el año, ambiente tranquilo, vistas hermosas.",
      consejo:
        "En temporada baja es más silenciosa; en alta, ofrece más servicios.",
      imagen: "puntasal.jpg",
    },
    {
      nombre: "Máncora (Piura)",
      descripcion:
        "La playa más famosa del norte para surf, gastronomía y ambiente vibrante.",
      razones: "Perfecta para quienes buscan playa + surf + vida costera.",
      consejo:
        "Si prefieres calma, quédate en zonas más alejadas del centro.",
      imagen: "mANCORA.jpg",
    },
    {
      nombre: "Costa Verde (Lima)",
      descripcion:
        "Franja costera urbana con playas y miradores modernos en la capital.",
      razones: "Ideal para disfrutar mar + ciudad sin viajar lejos.",
      consejo:
        "Ve al atardecer para disfrutar vistas espectaculares.",
      imagen: "costaverde.jpg",
    },
    {
      nombre: "Islas Ballestas y Paracas (Ica)",
      descripcion:
        "Aventura costera con fauna marina y paisajes únicos.",
      razones:
        "Permite ver lobos marinos, aves y formaciones costeras.",
      consejo:
        "Lleva cámara y combina la visita con el desierto de Paracas.",
      imagen: "islasballestas.png",
    },
  ];

  return (
    <div
      className="relative w-[95%] mx-auto mt-10 mb-20 p-12 md:p-16 rounded-3xl 
      bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300
      shadow-2xl overflow-hidden 
      animate-[waveBg_10s_ease-in-out_infinite]"
    >

      {/* TÍTULO FLOTANTE */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold 
        text-sky-700 mb-12 
        animate-[float_4s_ease-in-out_infinite]
        drop-shadow-md"
      >
        Playas del Perú
      </h1>

      {/* TARJETAS */}
      {playas.map((playa, index) => (
        <div
          key={index}
          className="bg-sky-50/90 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-10 
          shadow-xl shadow-sky-200
          hover:shadow-2xl hover:shadow-sky-300
          transition-all duration-500
          animate-[slideUp_0.8s_ease-out_forwards] opacity-0
          hover:-translate-y-1 hover:scale-[1.01]"
          style={{ animationDelay: `${index * 0.25}s` }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* IMAGEN MÁS CELESTE Y PASTEL */}
            <img
              src={playa.imagen}
              alt={playa.nombre}
              className="w-full md:w-80 rounded-2xl object-cover 
              shadow-xl shadow-sky-300
              transition-all duration-500 
              hover:scale-110 hover:rotate-1 hover:shadow-sky-400"
            />

            {/* TEXTO */}
            <div className="flex-1 text-sky-800">
              <h2 className="text-2xl font-semibold text-sky-700 mb-3 
              border-b-4 border-sky-300 pb-1 inline-block">
                {playa.nombre}
              </h2>

              <p className="leading-relaxed text-lg mb-2 text-sky-900/80">
                {playa.descripcion}
              </p>

              <p className="leading-relaxed text-lg text-sky-900/80">
                <strong className="text-sky-700">Por qué visitarla:</strong>{" "}
                {playa.razones}
              </p>

              <p className="leading-relaxed mt-1 text-lg text-sky-900/80">
                <strong className="text-sky-700">Consejo:</strong>{" "}
                {playa.consejo}
              </p>
            </div>
          </div>
        </div>
      ))}


      {/* ANIMACIONES */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes waveBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </div>
  );
};

export default PlayasPeru;
