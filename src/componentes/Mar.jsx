import React from "react";

const Mar = () => {
  return (
    <div className="w-[95%] mx-auto mt-10 mb-20 p-10 md:p-14 bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 rounded-3xl shadow-xl border border-white/60">

      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-sky-700 mb-10 drop-shadow-sm tracking-wide">
        Calidad del Agua del Mar Peruano
      </h1>

      {/* Imagen única */}
      <div className="overflow-hidden rounded-3xl shadow-xl border border-white/50">
        <img
          src="maaar.jpg"
          alt="Calidad del agua del mar peruano"
          className="w-full h-[320px] md:h-[420px] object-cover hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>

      <p className="mt-8 text-lg md:text-xl leading-relaxed text-sky-900/90 bg-white/60 p-6 rounded-2xl shadow-md border border-white/40">
        El mar peruano destaca por su inmensa productividad gracias a la
        corriente de Humboldt, una de las más frías y nutritivas del mundo.
        No obstante, su calidad de agua puede verse comprometida por factores
        como desechos sólidos, aguas residuales, contaminación industrial y
        derrames de petróleo. Aun así, muchas zonas conservan una biodiversidad
        notable y siguen siendo hábitats esenciales para especies marinas de
        gran importancia ecológica.
      </p>
    </div>
  );
};

export default Mar;
