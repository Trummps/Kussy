import React from "react";

// =============================
// TARJETA (sin subida de imagen)
// =============================
const Tarjeta = ({ item }) => (
  <div
    className="
      bg-gradient-to-br 
      from-sky-100 via-sky-50 to-blue-100
      rounded-2xl
      shadow-[0_10px_25px_rgba(120,180,255,0.18)]
      border border-sky-200/60
      overflow-hidden 
      hover:-translate-y-2 
      hover:shadow-[0_16px_40px_rgba(140,190,255,0.28)]
      transition-all duration-700
      group
    "
  >
    {/* Imagen */}
    <div className="overflow-hidden h-52 md:h-64 bg-sky-200/30">
      {item.imagen ? (
        <img
          src={item.imagen} // <--- AHORA FUNCIONA "./mar.jpg"
          alt={item.titulo}
          className="
            w-full h-full object-cover 
            group-hover:scale-110 
            transition-transform duration-700
          "
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-sky-400">
          Sin imagen
        </div>
      )}
    </div>

    {/* Texto */}
    <div className="p-6">
      <h2
        className="
          text-xl md:text-2xl font-bold text-sky-700 mb-3 
          group-hover:text-sky-600 transition-colors
        "
      >
        {item.titulo}
      </h2>

      <p className="text-sky-800/80 text-sm md:text-base mb-3 leading-relaxed">
        {item.descripcion}
      </p>

      <p className="text-sky-600 text-sm italic border-l-4 border-sky-300 pl-3">
        {item.extra}
      </p>

      <div className="mt-4 h-[3px] w-20 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full"></div>
    </div>
  </div>
);

// =============================
// SECCIÓN
// =============================
const Seccion = ({ titulo, data }) => (
  <>
    <div className="flex items-center gap-4 mb-10">
      <div className="h-1 w-14 bg-sky-300 rounded-full"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-sky-700 drop-shadow-sm">
        {titulo}
      </h2>
      <div className="h-1 w-14 bg-sky-300 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
      {data.map((item, i) => (
        <Tarjeta key={i} item={item} />
      ))}
    </div>
  </>
);

// =============================
// DATOS
// =============================
const seccionAgua = [
  {
    titulo: "Temperatura del Agua",
    descripcion:
      "El mar peruano mantiene temperaturas frías entre 14°C y 20°C debido a la corriente de Humboldt.",
    extra: "El norte suele ser ligeramente más cálido.",
    imagen: "/mar.jpg",   // <--- EJEMPLO
  },
  {
    titulo: "Corriente de Humboldt",
    descripcion:
      "Una corriente fría que transporta nutrientes desde el sur y alimenta la gran biodiversidad marina.",
    extra: "Uno de los sistemas marinos más productivos del mundo.",
    imagen: "/corriente.png",
  },
  {
    titulo: "Zonas de Surgencia",
    descripcion:
      "Movimientos que llevan nutrientes desde el fondo hacia la superficie.",
    extra: "Clave para la riqueza pesquera peruana.",
    imagen: "/surgencia.jpg",
  },
  {
    titulo: "Oxigenación del Agua",
    descripcion:
      "Las aguas frías favorecen una alta oxigenación, ideal para muchas especies.",
    extra: "Entre las más oxigenadas del planeta.",
    imagen: "/oxigeno.jpg",
  },
];

const seccionBiodiversidad = [
  {
    titulo: "Biodiversidad Marina",
    descripcion:
      "Miles de especies conviven en el mar peruano, desde peces hasta mamíferos y aves.",
    extra: "Más de 1,000 especies de peces registradas.",
    imagen: "/biodiversidad.jpg",
  },
  {
    titulo: "Ecosistemas Costeros",
    descripcion:
      "Playas, roqueríos y humedales sirven de refugio para especies migratorias.",
    extra: "Pantanos de Villa es clave para aves migratorias.",
    imagen: "/ecosistema.png",
  },
  {
    titulo: "Productividad Marina",
    descripcion:
      "El fitoplancton vuelve al mar peruano uno de los más productivos del planeta.",
    extra: "Base de la cadena alimenticia.",
    imagen: "/productividad.png",
  },
  {
    titulo: "Pesca Sostenible",
    descripcion:
      "La gestión adecuada permite conservar especies y el equilibrio marino.",
    extra: "La anchoveta es la más regulada.",
    imagen: "/pesca.png",
  },
];

const seccionProblemas = [
  {
    titulo: "Contaminación",
    descripcion:
      "Residuos plásticos y derrames petroleros afectan gravemente al ecosistema.",
    extra: "Las zonas urbanas son las más afectadas.",
    imagen: "/contaminacion.jpg",
  },
  {
    titulo: "Acidificación del Océano",
    descripcion:
      "El aumento de CO₂ altera el pH del agua y afecta a especies sensibles.",
    extra: "Impacta a organismos con conchas o esqueletos calcáreos.",
    imagen: "/acido.png",
  },
  {
    titulo: "Calentamiento del Mar",
    descripcion:
      "El incremento de temperatura altera ecosistemas completos.",
    extra: "Fenómenos como El Niño aceleran estos cambios.",
    imagen: "/calor.png",
  },
  {
    titulo: "Pesca Ilegal",
    descripcion:
      "La extracción no regulada reduce poblaciones de peces.",
    extra: "Afecta al equilibrio y a especies vulnerables.",
    imagen: "/pescaaa.jpg",
  },
];

// =============================
// COMPONENTE PRINCIPAL
// =============================
const Mar = () => {
  return (
    <div
    
  className="
    w-[95%] mx-auto mt-20 mb-32 
    bg-gradient-to-b from-sky-200 via-sky-300 to-sky-200
    rounded-3xl p-10 
    shadow-xl 
    border border-sky-300
  "
>

      
    
      <h1
  className="
    text-center text-5xl md:text-6xl font-extrabold 
    bg-gradient-to-r from-sky-700 via-blue-600 to-blue-800
    bg-clip-text text-transparent
    drop-shadow-sm
    mb-16 tracking-wide
  "
>
  Calidad del Agua del Mar Peruano
</h1>


      <Seccion titulo="🌊 Agua y Corrientes" data={seccionAgua} />
      <Seccion titulo="🐠 Biodiversidad Marina" data={seccionBiodiversidad} />
      <Seccion titulo="⚠️ Problemas Ambientales" data={seccionProblemas} />
    </div>
  );
};

export default Mar;
