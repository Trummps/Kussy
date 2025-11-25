import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Registrar usuario solo con Gmail
  const registrar = async () => {
    if (!email || !password) {
      alert("Ingresa correo y contraseña");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Solo se permiten cuentas Gmail");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("¡Felicidades! Se creó tu perfil 💙");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Error al crear cuenta: " + error.message);
    }
  };

  // Login con Google
  const iniciarConGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Bienvenido ${result.user.displayName || result.user.email} 💙`);
    } catch (error) {
      alert("Error al iniciar con Google: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 p-10 relative overflow-hidden font-[Poppins]">

      {/* Burbujas dinámicas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="burbuja b1"></div>
        <div className="burbuja b2"></div>
        <div className="burbuja b3"></div>
      </div>

      {/* Glow suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.55),transparent_70%)] animate-glow"></div>

      {/* TARJETA */}
      <div className="relative z-10 w-[750px] bg-white/70 backdrop-blur-3xl border border-white/60 shadow-[0_30px_120px_rgba(90,160,255,0.35)] rounded-[55px] px-20 py-20 animate-rise">

        <h1 className="text-7xl font-extrabold text-center text-sky-700 drop-shadow-lg tracking-wide animate-pop">
          Kussy 💙
        </h1>

        <p className="text-center text-2xl text-sky-800 mt-6 mb-14 opacity-90 font-medium animate-fade">
          Tu espacio celeste de skincare, fragancias y self-care ✨
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-14 animate-slide-up">

          {/* EMAIL */}
          <div className="transition-all duration-300 hover:scale-[1.02]">
            <label className="text-sky-900 font-semibold text-2xl">Correo Gmail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tunombre@gmail.com"
              className="w-full mt-4 p-6 rounded-3xl bg-white/85 border border-sky-300 focus:ring-4 focus:ring-sky-400 outline-none text-xl shadow-lg transition-all"
            />
          </div>

          {/* PASSWORD */}
          <div className="transition-all duration-300 hover:scale-[1.02] relative">
            <label className="text-sky-900 font-semibold text-2xl">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña segura"
              className="w-full mt-4 p-6 rounded-3xl bg-white/85 border border-sky-300 focus:ring-4 focus:ring-sky-400 outline-none text-xl shadow-lg transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-600 font-semibold"
            >
              {showPassword ? "Ocultar" : "Ver"}
            </button>
          </div>

          {/* BOTÓN CREAR */}
          <button
            type="button"
            onClick={registrar}
            className="w-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white p-6 text-2xl rounded-3xl shadow-xl font-semibold hover:scale-[1.06] hover:shadow-3xl transition-all tracking-wide"
          >
            Crear cuenta ✨
          </button>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={iniciarConGoogle}
            className="w-full bg-white/90 text-sky-700 border border-sky-300 p-6 text-2xl rounded-3xl hover:bg-sky-50 transition-all shadow-md tracking-wide hover:scale-[1.03]"
          >
            Ingresar con Google 💙
          </button>
        </form>
      </div>

      {/* ANIMACIONES */}
      <style>{`
        @keyframes glow {0%,100% { opacity: .85; }50% { opacity: 1; }}
        .animate-glow { animation: glow 7s ease-in-out infinite; }

        @keyframes rise {from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; }}
        .animate-rise { animation: rise 1.2s ease forwards; }

        @keyframes pop {0% { transform: scale(.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; }}
        .animate-pop { animation: pop .9s ease forwards; }

        @keyframes fade {0% { opacity: 0; } 100% { opacity: 1; }}
        .animate-fade { animation: fade 1.5s ease-in forwards; }

        @keyframes slide-up {from { opacity:0; transform: translateY(40px); } to { opacity:1; transform: translateY(0); }}
        .animate-slide-up { animation: slide-up 1.3s ease forwards; }

        .burbuja {position: absolute;width: 180px;height: 180px;background: rgba(180,220,255,0.45);filter: blur(40px);border-radius: 50%;animation: float 10s infinite ease-in-out;}
        .b1 { top: 15%; left: 10%; animation-delay: 0s; }
        .b2 { bottom: 20%; right: 12%; animation-delay: 3s; }
        .b3 { top: 50%; left: 70%; animation-delay: 6s; }
        @keyframes float {0% { transform: translateY(0) scale(1); opacity: .7; }50% { transform: translateY(-35px) scale(1.1); opacity: 1; }100% { transform: translateY(0) scale(1); opacity: .7; }}
      `}</style>
    </div>
  );
}

export default Login;
