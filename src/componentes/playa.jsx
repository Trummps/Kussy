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
      bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100
      shadow-xl shadow-sky-200/40 border border-white/70 
      overflow-hidden animate-[waveBg_12s_ease-in-out_infinite]"
    >

      {/* TÍTULO FLOTANTE */}
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold 
        text-sky-700 mb-12 tracking-wide
        animate-[float_4s_ease-in-out_infinite]"
      >
        🌴 Playas del Perú
        <span className="block text-xl md:text-2xl mt-3 text-sky-800/90 font-medium">
          Un recorrido por las costas más hermosas del país
        </span>
      </h1>

      {/* TARJETAS */}
      {playas.map((playa, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-10
          shadow-lg shadow-sky-200/50 border border-sky-50
          hover:shadow-2xl hover:shadow-sky-300/60
          transition-all duration-500
          animate-[slideUp_0.8s_ease-out_forwards] opacity-0
          hover:-translate-y-1 hover:scale-[1.01]"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* IMAGEN PASTEL SUAVECITA */}
            <img
              src={playa.imagen}
              alt={playa.nombre}
              className="w-full md:w-80 rounded-2xl object-cover 
              shadow-md shadow-sky-200/60 border border-sky-100
              transition-all duration-500 
              hover:scale-105 hover:shadow-sky-300/80"
            />

            {/* TEXTO */}
            <div className="flex-1 text-sky-800">
              <h2 className="text-2xl font-semibold text-sky-700 mb-3 
              border-b-4 border-sky-200 pb-1 inline-block">
                {playa.nombre}
              </h2>

              <p className="leading-relaxed text-lg mb-2 text-sky-900/80">
                {playa.descripcion}
              </p>

              <p className="leading-relaxed text-lg text-sky-900/80">
                <strong className="text-teal-700">Por qué visitarla:</strong>{" "}
                {playa.razones}
              </p>

              <p className="leading-relaxed mt-1 text-lg text-sky-900/80">
                <strong className="text-teal-700">Consejo:</strong>{" "}
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
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
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
