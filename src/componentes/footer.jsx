import { Facebook, Instagram, Phone, Mail, MapPin, Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24 pb-14 font-[Poppins] select-none pastel-bg shadow-inner">

      {/* OLAS SUPERIORES */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-95">
        <svg
          className="block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#c7e4ff"
            d="M0,96L60,122.7C120,149,240,203,360,218.7C480,235,600,213,720,181.3C840,149,960,107,1080,85.3C1200,64,1320,64,1380,64L1440,64V0H0Z"
          ></path>
        </svg>
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 px-10 z-10">

        {/* MARCA */}
        <div>
          <h3 className="text-3xl font-extrabold text-sky-900 tracking-wide flex items-center gap-2">
            Mar del Perú
            <Waves className="w-8 h-8 text-sky-700" />
          </h3>
          <p className="text-sky-800 mt-4 text-sm md:text-base font-medium leading-relaxed">
            Conocimiento accesible y visual sobre la riqueza marina del Perú.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-lg font-bold text-sky-900 mb-3">Navegación</h4>
          <ul className="space-y-2 text-sky-800 font-medium">
            {["Inicio", "Recursos", "Fauna Marina", "Contacto"].map((item, i) => (
              <li
                key={i}
                className="hover:text-sky-950 cursor-pointer transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-lg font-bold text-sky-900 mb-3">Contacto</h4>
          <ul className="space-y-3 text-sky-800 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sky-700" />
              +51 981 034 017
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-700" />
              trumppsva@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-700" />
              Lima — Perú
            </li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h4 className="text-lg font-bold text-sky-900 mb-3">Síguenos</h4>
          <div className="flex gap-6">
            {[Facebook, Instagram, Phone].map((Icon, i) => (
              <a
                key={i}
                className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition transform hover:scale-110 shadow-sm cursor-pointer"
              >
                <Icon className="w-6 h-6 text-sky-800" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* DIVISOR */}
      <div className="w-[90%] mx-auto mt-12 border-t border-sky-300/70"></div>

      {/* COPYRIGHT */}
      <p className="relative mt-6 text-center text-sky-900 font-semibold text-sm md:text-base opacity-95 z-10">
        © Kusy {new Date().getFullYear()} — Todos los derechos reservados.
      </p>

      {/* ANIMACIÓN PASTEL */}
      <style>{`
        .pastel-bg {
          background: linear-gradient(135deg,
            #e8f6ff,
            #d7ebff,
            #c9defe,
            #d8f4ff
          );
          background-size: 350% 350%;
          animation: pastelFlow 22s ease infinite;
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
