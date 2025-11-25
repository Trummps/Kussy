import React from "react";

const Mar = () => {
  return (
    <div className="w-[95%] mx-auto mt-10 mb-20 p-10 md:p-14 bg-blue-100 rounded-3xl shadow-2xl">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-blue-700 mb-10">
        Calidad del Agua del Mar Peruano
      </h1>

      {/* Imagen única */}
      <img
        src="maaar.jpg"
        alt="Calidad del agua del mar peruano"
        className="w-full rounded-3xl shadow-xl object-cover mb-8"
      />

      <p className="text-lg leading-relaxed text-blue-900/90">
        El mar peruano es uno de los más productivos del mundo, impulsado por la corriente de
        Humboldt. Sin embargo, su calidad de agua puede verse afectada por factores como la
        contaminación industrial, desechos sólidos, derrames de petróleo y aguas residuales. A
        pesar de ello, muchas zonas mantienen un alto nivel de biodiversidad y condiciones
        favorables para la vida marina.
      </p>
    </div>
  );
};

export default Mar;
