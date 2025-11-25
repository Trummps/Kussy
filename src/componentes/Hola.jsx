import { useState } from "react";

function Hola() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrar = () => {
    if (email && password) {
      setMensaje("✅ Usuario registrado correctamente!");
      setEmail("");
      setPassword("");
    } else {
      setMensaje("❌ Por favor, completa todos los campos.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 font-poppins px-6 py-10">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-14 animate-fade bounce-in">
        
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-8 tracking-wide">
          Crear Cuenta ✨
        </h1>

        {mensaje && (
          <p className="text-center text-lg mb-6 font-semibold text-blue-700 animate-pulse">
            {mensaje}
          </p>
        )}

        {/* Email */}
        <div className="mb-6">
          <label className="block text-blue-800 font-semibold mb-2 text-lg">
            Correo
          </label>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-blue-300 bg-white/90 shadow-md text-lg
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 
            hover:scale-105 hover:shadow-lg"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block text-blue-800 font-semibold mb-2 text-lg">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-blue-300 bg-white/90 shadow-md text-lg
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300
            hover:scale-105 hover:shadow-lg"
          />
        </div>

        {/* Botón */}
        <button
          onClick={registrar}
          className="w-full py-4 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 
          text-white font-bold text-xl rounded-2xl shadow-xl 
          hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300"
        >
          Registrar cuenta 🔐
        </button>

        <p className="text-center mt-6 text-base text-blue-700">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="font-semibold underline hover:text-blue-900">
            Inicia sesión
          </a>
        </p>
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.9); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-fade { animation: fade 0.8s ease-out forwards; }
        .bounce-in { animation: bounceIn 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
}

export default Hola;
