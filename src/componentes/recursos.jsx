import React from "react";

const RecursosMarinos = () => {
  const recursos = [
    {
      titulo: "Recursos Hidrobiológicos",
      descripcion:
        "Peces, moluscos e invertebrados son abundantes gracias a la corriente de Humboldt, que convierte al Perú en uno de los mares más productivos del mundo. Un ejemplo notable es la Anchoveta, con biomasas que pueden llegar a los 10 millones de toneladas en años favorables.",
      imagen: "uwwwu.jpg",
    },
    {
      titulo: "Recursos Minerales",
      descripcion:
        "El fondo marino peruano alberga depósitos de fosfatos, nódulos minerales y reservas hidrocarburíferas offshore, representando un alto potencial económico si se explotan de forma sostenible.",
      imagen: "uwwu.jpg",
    },
  ];

  const retos = [
    {
      titulo: "Sobreexplotación",
      descripcion:
        "La pesca excesiva de especies clave puede alterar la cadena alimentaria marina y afectar la sostenibilidad del ecosistema y la industria pesquera.",
      imagen: "pesca1.jpg",
    },
    {
      titulo: "Contaminación",
      descripcion:
        "Residuos plásticos, vertimientos industriales y derrames de petróleo amenazan directamente la biodiversidad marina y deterioran la calidad del agua.",
      imagen: "pesca2.jpg",
    },
  ];

  return (
    <div
      className="relative w-[95%] mx-auto mt-10 mb-20 p-12 md:p-16 rounded-3xl 
      bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100
      shadow-xl shadow-sky-200/40 border border-white/70 
      overflow-hidden animate-[waveBg_12s_ease-in-out_infinite]"
    >

      {/* TÍTULO PRINCIPAL */}
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold 
        text-sky-700 mb-12 tracking-wide
        animate-[float_4s_ease-in-out_infinite]"
      >
        🌊 Recursos y Retos del Mar Peruano
        <span className="block text-xl md:text-2xl mt-3 text-sky-800/90 font-medium">
          Riqueza marina y desafíos de conservación en uno de los ecosistemas más productivos del planeta
        </span>
      </h1>

      {/* SECCIÓN RECURSOS */}
      {recursos.map((item, index) => (
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

            {/* IMAGEN */}
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full md:w-80 rounded-2xl object-cover
              shadow-md shadow-sky-200/60 border border-sky-100
              transition-all duration-500 
              hover:scale-105 hover:shadow-sky-300/80"
            />

            {/* TEXTO */}
            <div className="flex-1 text-sky-800">
              <h3 className="text-2xl font-semibold text-sky-700 mb-3
              border-b-4 border-sky-200 pb-1 inline-block">
                {item.titulo}
              </h3>

              <p className="leading-relaxed text-lg text-sky-900/80">
                {item.descripcion}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* SUBTÍTULO RETOS */}
      <h2 className="text-3xl font-semibold text-sky-700 mt-16 mb-10 text-center">
        Retos y Gestión
        <span className="block text-lg text-sky-900/80 mt-1">
          Desafíos clave que requieren estrategias responsables para proteger el ecosistema marino peruano
        </span>
      </h2>

      {/* SECCIÓN RETOS */}
      {retos.map((item, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-10
          shadow-lg shadow-sky-200/50 border border-sky-50
          hover:shadow-2xl hover:shadow-sky-300/60
          transition-all duration-500
          animate-[slideUp_0.8s_ease-out_forwards] opacity-0
          hover:-translate-y-1 hover:scale-[1.01]"
          style={{ animationDelay: `${(index + 3) * 0.3}s` }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* IMAGEN */}
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full md:w-80 rounded-2xl object-cover
              shadow-md shadow-sky-200/60 border border-sky-100
              transition-all duration-500 
              hover:scale-105 hover:shadow-sky-300/80"
            />

            {/* TEXTO */}
            <div className="flex-1 text-sky-800">
              <h3 className="text-2xl font-semibold text-sky-700 mb-3
              border-b-4 border-sky-200 pb-1 inline-block">
                {item.titulo}
              </h3>

              <p className="leading-relaxed text-lg text-sky-900/80">
                {item.descripcion}
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

export default RecursosMarinos;
