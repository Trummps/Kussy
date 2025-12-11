import React from "react";

const perfiles = [
  {
    nombre: "Rosa Vargas",
    apodo: "Trummps",
    usuario: "@trummps",
    genero: "Femenino",
    biografia:
      "Programadora Web · Amante del diseño limpio ✨\nCreando interfaces suaves y funcionales. Cuida tu ambiente y de ti mismo.",
    seguidores: "320",
    seguidos: "28",
    publicaciones: "15",
    imagen: "tri.png",
    hobbies: [
      "Viajes 🚐",
      "Animalitos🐈‍🐕‍🦺",
      "Naturaleza 🍃",
      "Postres🥮",
      "Blog🎞️",
      "Páginas web 💻",
      "Liderazgo💁🏻‍♀️",
    ],
    instagram: "https://www.instagram.com/trummps?igsh=cWl3YWpheXl3M2c0",
  },
  {
    nombre: "Luciana Gonzales",
    apodo: "Banana",
    usuario: "luci.l.g",
    genero: "Femenino",
    biografia:
      "Makeup Artist 💄✨\nCreadora de labiales artesanales en tonos pastel.",
    seguidores: "480",
    seguidos: "12",
    publicaciones: "33",
    imagen: "luciana.png",
    hobbies: [
      "Pintar 🎨",
      "Caminar 🚶🏻‍♀",
      "Hacer manualidades ✨",
      "Escuchar música 🎶",
      "Bailar 💃",
      "Dibujar 🖍️",
    ],
    instagram: "https://www.instagram.com/luci.l.g?igsh=M3EzYzJvZ282NHEy",
  },
];

export default function PerfilesPastel() {
  return (
    <>
      {/* HEADER */}
      <section className="py-20 bg-gradient-to-b from-sky-200/70 via-white to-sky-100">
        <h2 className="text-5xl md:text-6xl text-center mb-12 tracking-tight text-sky-800 drop-shadow-md font-serif font-extrabold">
          FUNDADORAS
        </h2>
      </section>

      {/* CARTAS CENTRADAS CON FONDO BEBÉ CLARITO */}
      <section className="pb-20 pt-10 flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E0F7FF] via-[#F0FCFF] to-[#E0F7FF] animate-gradient bg-[length:400%_400%] z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center relative z-10">
          {perfiles.map((p, i) => (
            <div
              key={i}
              className="
                relative w-full max-w-[520px] rounded-4xl p-10
                bg-white border border-sky-300/60
                shadow-[0_10px_35px_rgba(120,180,255,0.30)]
                hover:shadow-[0_15px_55px_rgba(120,180,255,0.45)]
                transition-all duration-700 hover:-translate-y-2 overflow-hidden
              "
            >
              {/* BG ANIMADO DE LA CARTA */}
              <div className="absolute inset-0 rounded-4xl pointer-events-none">
                <div className="absolute inset-0 rounded-4xl opacity-40 blur-2xl bg-gradient-to-r from-sky-300 via-sky-200 to-sky-400 animate-spin-slow"></div>
                <div className="absolute inset-[3px] rounded-4xl bg-white"></div>
              </div>

              <div className="relative z-10">
                {/* FOTO */}
                <div className="flex justify-center mb-7">
                  <div className="p-[7px] rounded-full bg-gradient-to-br from-sky-300 via-sky-200 to-sky-400 animate-pulse-slow">
                    <div className="p-[5px] rounded-full bg-white shadow-inner">
                      <img
                        src={p.imagen}
                        className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* APODO */}
                <p className="text-center text-sm text-sky-700 font-semibold mb-1 opacity-80">
                  {p.apodo}
                </p>

                {/* NOMBRE */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-sky-900">{p.nombre}</h3>
                  <p className="text-sky-600 text-lg">{p.usuario}</p>
                </div>

                {/* GÉNERO */}
                <p className="text-center mt-2 text-sky-700 text-sm">
                  <span className="font-semibold">Género:</span> {p.genero}
                </p>

                {/* BIO */}
                <p className="mt-5 whitespace-pre-line text-center text-sky-900 text-[15px] leading-relaxed tracking-wide">
                  {p.biografia}
                </p>

                {/* HOBBIES */}
                <div className="mt-6">
                  <p className="text-center text-sky-700 font-semibold text-sm mb-2">
                    Hobbies:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {p.hobbies.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-sky-900 text-xs bg-sky-200/70 border border-sky-300 px-3 py-1 rounded-full shadow-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTÓN INSTAGRAM MEJORADO */}
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full block mt-6
                    bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500
                    text-white font-bold
                    py-3 rounded-3xl text-center
                    shadow-lg hover:shadow-2xl
                    hover:-translate-y-1
                    transform transition-all duration-300
                    text-lg tracking-wide
                    animate-pulse-slow
                  "
                >
                  Seguir
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANIMACIONES */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 2.5s infinite;
          }

          @keyframes gradient {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
          }
          .animate-gradient {
            animation: gradient 15s ease infinite;
          }
        `}
      </style>
    </>
  );
}
