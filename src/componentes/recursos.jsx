import React from "react";

const RecursosMarinos = () => {
  const recursos = [
    {
      titulo: "Recursos Hidrobiológicos",
      descripcion:
        "Peces, moluscos y crustáceos abundan gracias a la Corriente de Humboldt, que convierte al Perú en uno de los mares más productivos del mundo.",
      infoExtra: "La pesca sostenible es clave para la economía y seguridad alimentaria.",
      imagen: "/uwwu.jpg",
    },
    {
      titulo: "Recursos Minerales",
      descripcion:
        "El fondo marino peruano tiene depósitos de fosfatos, nódulos minerales y reservas offshore de hidrocarburos.",
      infoExtra: "Requiere regulaciones estrictas para evitar impactos ambientales graves.",
      imagen: "/wwu.jpg",
    },
    {
      titulo: "Algas y Plantas Marinas",
      descripcion:
        "Algas rojas, pardas y verdes proporcionan alimento, hábitat y compuestos industriales importantes.",
      infoExtra: "Vitales para biodiversidad y cosméticos.",
      imagen: "/algarojas.jpg",
    },
  ];

  const retos = [
    {
      titulo: "Sobreexplotación Pesquera",
      descripcion:
        "La pesca excesiva altera la cadena alimentaria y afecta la sostenibilidad del ecosistema.",
      solucion: "Aplicar cuotas de pesca y monitoreo constante.",
      imagen: "/pesca1.jpg",
    },
    {
      titulo: "Contaminación Marina",
      descripcion:
        "Plásticos, vertimientos industriales y petróleo afectan la biodiversidad.",
      solucion: "Reciclaje, limpieza costera y control de vertimientos.",
      imagen: "/pesca2.jpg",
    },
    {
      titulo: "Cambio Climático",
      descripcion:
        "El aumento de temperatura y acidificación afecta la distribución de especies.",
      solucion: "Investigación y políticas climáticas responsables.",
      imagen: "/clima.jpg",
    },
  ];

  const fallbackImg = "default-foto.jpg";

  const Card = ({ titulo, descripcion, infoExtra, solucion, imagen }) => (
    <div
   
  className="
  bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200
  rounded-3xl border border-sky-400
  shadow-[0_4px_14px_rgba(70,130,180,0.30)]
  hover:shadow-[0_6px_20px_rgba(70,130,180,0.40)]
  hover:scale-[1.03]
  transition-all duration-500"
>

   
      <div className="w-full h-64 bg-sky-100 overflow-hidden border-b border-sky-300">
        <img
          src={imagen}
          alt={titulo}
          loading="lazy"
          onError={(e) => (e.target.src = fallbackImg)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-sky-700 mb-3 tracking-wide drop-shadow-sm">
          {titulo}
        </h3>

        <p className="text-sky-900/80 mb-2 leading-relaxed">
          {descripcion}
        </p>

        {infoExtra && (
          <p className="text-sky-600 text-sm mb-2">
            <strong className="text-sky-700">Info extra:</strong> {infoExtra}
          </p>
        )}

        {solucion && (
          <p className="text-sky-600 text-sm">
            <strong className="text-sky-700">Solución:</strong> {solucion}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#EAF7FF] py-12">
      <div className="w-[95%] mx-auto">

        <h1
          className="
          text-center text-4xl md:text-5xl font-extrabold
          text-sky-700 mb-14 drop-shadow-md
        "
        >
          🌊 Recursos y Retos del Mar Peruano
        </h1>

        {/* Recursos */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-sky-600 mb-10 text-center">
            Recursos Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recursos.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Retos */}
        <section>
          <h2 className="text-3xl font-bold text-sky-600 mb-10 text-center">
            Retos y Gestión
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {retos.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecursosMarinos;
