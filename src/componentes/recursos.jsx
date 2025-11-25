import React from "react";

const RecursosMarinos = () => {
  const recursos = [
    {
      titulo: "Recursos Hidrobiológicos",
      descripcion:
        "Peces, moluscos e invertebrados son especialmente abundantes en el ecosistema peruano. La corriente de Humboldt favorece una alta productividad que convierte al Perú en uno de los mayores productores pesqueros del mundo. Un ejemplo es la Anchoveta, con una biomasa estimada de hasta 10 millones de toneladas durante los mejores años.",
      imagen: "uwwwu.jpg",
    },
    {
      titulo: "Recursos Minerales",
      descripcion:
        "Debajo del lecho marino se encuentran depósitos valiosos como fosfatos, nódulos minerales y complejos hidrocarburíferos offshore. Estos recursos representan un enorme potencial económico para el país si se gestionan de manera sostenible.",
      imagen: "uwwu.jpg",
    },
  ];

  const retos = [
    {
      titulo: "Sobreexplotación",
      descripcion:
        "El aprovechamiento excesivo de algunas especies puede generar desequilibrios en la cadena alimentaria marina. La pesca excesiva afecta poblaciones clave y puede comprometer la sostenibilidad a largo plazo del ecosistema y la industria pesquera.",
      imagen: "pesca1.jpg",
    },
    {
      titulo: "Contaminación",
      descripcion:
        "Residuos plásticos, vertimientos industriales y derrames de petróleo representan una amenaza directa para la biodiversidad marina. La contaminación altera hábitats, intoxica especies y deteriora la calidad del agua, afectando a comunidades costeras y al turismo.",
      imagen: "pesca2.jpg",
    },
  ];

  return (
    <div
      className="relative w-[95%] mx-auto mt-10 mb-20 p-12 md:p-16 rounded-3xl 
      bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300
      shadow-2xl overflow-hidden 
      animate-[waveBg_10s_ease-in-out_infinite]"
    >

      {/* TÍTULO PRINCIPAL (H1) */}
      <h1
        className="text-center text-4xl md:text-5xl font-bold 
        text-sky-700 mb-12 
        animate-[float_4s_ease-in-out_infinite]
        drop-shadow-md"
      >
        🌊  Recursos y Retos 
        <span className="block text-2xl mt-2 text-sky-800 font-semibold">
          Una visión general sobre la riqueza natural y los desafíos de conservación en uno de los mares más productivos del planeta
        </span>
      </h1>

    

      {recursos.map((item, index) => (
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

            {/* IMAGEN */}
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full md:w-80 rounded-2xl object-cover 
              shadow-xl shadow-sky-300
              transition-all duration-500 
              hover:scale-110 hover:rotate-1 hover:shadow-sky-400"
            />

            {/* TEXTO */}
            <div className="flex-1 text-sky-800">
              <h3 className="text-2xl font-semibold text-sky-700 mb-3 
              border-b-4 border-sky-300 pb-1 inline-block">
                {item.titulo}
              </h3>

              <p className="leading-relaxed text-lg text-sky-900/80">
                {item.descripcion}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* SECCIÓN RETOS */}
      <h2 className="text-3xl font-semibold text-sky-700 mt-16 mb-10 text-center">
        Retos y Gestión  
        <span className="block text-lg text-sky-900/80 mt-1">
          Desafíos actuales que requieren estrategias responsables para proteger el ecosistema marino peruano
        </span>
      </h2>

      {retos.map((item, index) => (
        <div
          key={index}
          className="bg-sky-50/90 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-10 
          shadow-xl shadow-sky-200
          hover:shadow-2xl hover:shadow-sky-300
          transition-all duration-500
          animate-[slideUp_0.8s_ease-out_forwards] opacity-0
          hover:-translate-y-1 hover:scale-[1.01]"
          style={{ animationDelay: `${(index + 3) * 0.25}s` }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* IMAGEN */}
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full md:w-80 rounded-2xl object-cover 
              shadow-xl shadow-sky-300
              transition-all duration-500 
              hover:scale-110 hover:rotate-1 hover:shadow-sky-400"
            />

            {/* TEXTO */}
            <div className="flex-1 text-sky-800">
              <h3 className="text-2xl font-semibold text-sky-700 mb-3 
              border-b-4 border-sky-300 pb-1 inline-block">
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
          50% { transform: translateY(-10px); }
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
