import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    comentario: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${form.nombre}, tu mensaje fue enviado con éxito 🌷`);
    setForm({ nombre: "", apellido: "", comentario: "" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 font-[Poppins] overflow-hidden px-6 py-20">

      {/* BURBUJAS MÁS PEQUEÑAS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="burbuja-celeste b1"></div>
        <div className="burbuja-celeste b2"></div>
      </div>

      {/* LUZ SUAVE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] animate-glow"></div>

      {/* CONTENEDOR */}
      <div className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(0,100,255,0.15)] border border-white/50 px-10 py-16 animate-rise">

        {/* TÍTULO */}
        <div className="text-center space-y-4 animate-pop">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Contáctanos 💎
          </h1>
          <p className="text-blue-700 text-xl font-medium opacity-90">
            Escríbenos con confianza 💬
          </p>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-10 animate-slide-up mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="space-y-1">
              <label className="block text-blue-800 font-semibold text-lg">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 border border-blue-200 rounded-2xl text-lg bg-white/70 shadow-md hover:shadow-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-blue-800 font-semibold text-lg">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 border border-blue-200 rounded-2xl text-lg bg-white/70 shadow-md hover:shadow-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Tu apellido"
              />
            </div>

          </div>

          <div className="space-y-1">
            <label className="block text-blue-800 font-semibold text-lg">
              Comentario
            </label>
            <textarea
              name="comentario"
              value={form.comentario}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-6 py-3 border border-blue-200 rounded-2xl text-lg bg-white/70 shadow-md hover:shadow-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
              placeholder="Escribe tu mensaje..."
            ></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full md:w-2/3 py-3 text-xl font-bold text-white rounded-2xl shadow-lg bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Enviar mensaje ✨
            </button>
          </div>
        </form>

        {/* INFO DE CONTACTO */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-blue-800 text-center animate-float-slow">
          <div className="flex flex-col items-center gap-3">
            <FaMapMarkerAlt className="text-3xl text-sky-500" />
            <p className="font-semibold text-lg">Av. Milagros de Jesus </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <FaEnvelope className="text-3xl text-sky-500" />
            <p className="font-semibold text-lg">trummpsva@gmail.com</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <FaPhoneAlt className="text-3xl text-sky-500" />
            <p className="font-semibold text-lg">+51 981034017</p>
          </div>
        </div>

        {/* REDES SOCIALES CON LINKS */}
        <div className="flex justify-center gap-12 mt-14 text-4xl animate-pop">
          <a
            href="https://www.instagram.com/kussy_pee?igsh=b3FlcWx3ZTRyY3dm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-tr from-pink-300 to-rose-400 text-white rounded-full shadow-md hover:scale-125 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Trummps_VA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-tr from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:scale-125 transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/51981034017"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-tr from-green-300 to-green-500 text-white rounded-full shadow-md hover:scale-125 transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* ANIMACIONES */}
      <style>{`
        @keyframes glow { 0%,100%{opacity:.8;} 50%{opacity:1;} }
        .animate-glow { animation: glow 8s infinite ease-in-out; }

        @keyframes rise { from{transform:translateY(20px);opacity:0;} to{transform:translateY(0);opacity:1;} }
        .animate-rise { animation: rise .9s ease forwards; }

        @keyframes pop { 0%{transform:scale(.9);opacity:0;} 100%{transform:scale(1);opacity:1;} }
        .animate-pop { animation: pop .7s ease forwards; }

        @keyframes slide-up { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        .animate-slide-up { animation: slide-up .9s ease forwards; }

        @keyframes float-slow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-4px);} }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }

        /* Burbujas pequeñas */
        .burbuja-celeste {
          position: absolute;
          width: 110px;
          height: 110px;
          background: rgba(170,210,255,0.4);
          filter: blur(30px);
          border-radius: 50%;
          animation: float-bubble 10s infinite ease-in-out;
        }
        .b1 { top: 10%; left: 15%; }
        .b2 { bottom: 15%; right: 15%; }

        @keyframes float-bubble {
          0% { transform: translateY(0) scale(1); opacity: .6; }
          50% { transform: translateY(-25px) scale(1.05); opacity: .9; }
          100% { transform: translateY(0) scale(1); opacity: .6; }
        }
      `}</style>
    </section>
  );
}

export default Contacto;
