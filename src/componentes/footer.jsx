export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 font-[Poppins] select-none pastel-bg">

      {/* Olas superiores en tonos pastel */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-80">
        <svg
          className="block w-full h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#c0e0ff"
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,112C960,128,1056,128,1152,112C1248,96,1344,64,1392,48L1440,32V0H0Z"
          ></path>
        </svg>
      </div>

      {/* Contenido */}
      <div className="relative text-center px-6 z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-sky-900 drop-shadow-md tracking-wide">
          🌊 Mar del Perú
        </h3>

        <p className="text-base md:text-lg mt-2 font-medium text-sky-800 opacity-95">
          Conectando conocimiento y belleza del océano peruano.
        </p>

        <p className="text-sm md:text-base mt-3 font-semibold text-sky-900 opacity-90">
          ©Kusy {new Date().getFullYear()}
        </p>
      </div>

      {/* Estilos pastel animados */}
      <style>{`
        .pastel-bg {
          background: linear-gradient(135deg, 
            #dff6ff, 
            #c7e8ff, 
            #b0dbff, 
            #d4f1ff
          );
          background-size: 300% 300%;
          animation: pastelFlow 20s ease-in-out infinite;
        }

        @keyframes pastelFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
}
