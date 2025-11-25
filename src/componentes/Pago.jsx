import React from "react";

const Pago = () => {
  const pagos = [
    {
      nombre: "💳 Tarjeta de Crédito / Débito",
      descripcion: "Aceptamos Visa, Mastercard, American Express y más.",
      icono: "/tarjeta.png",
    },
    {
      nombre: "📱 Yape / Plin",
      descripcion: "Pagos rápidos y sin comisión desde tu celular.",
      icono: "/yape.png",
    },
    {
      nombre: "🏦 Transferencia Bancaria",
      descripcion: "Disponible para bancos nacionales.",
      icono: "/transferencia.png",
    },
    {
      nombre: "💵 Pago Contra Entrega",
      descripcion: "Disponible en zonas seleccionadas.",
      icono: "/pagos.png",
    },
  ];

  return (
    <div className="relative w-[95%] mx-auto mt-10 mb-20 p-10 md:p-14 rounded-3xl shadow-2xl overflow-hidden">

      {/* Fondo animado suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-sky-100 to-sky-300 opacity-90 animate-gradientMove"></div>

      <h1 className="relative text-center text-4xl md:text-5xl font-extrabold text-sky-800 drop-shadow-lg mb-12 tracking-wide">
        Medios de Pago
      </h1>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
        {pagos.map((pago, index) => (
          <div
            key={index}
            className="group flex items-center gap-6 bg-white/70 backdrop-blur-xl p-6 rounded-3xl 
                       shadow-lg hover:shadow-2xl transition-all duration-500 
                       hover:-translate-y-2 border border-sky-200"
          >
            <img
              src={pago.icono}
              alt={pago.nombre}
              className="w-20 h-20 object-contain rounded-xl shadow-md 
                         group-hover:scale-110 transition-transform duration-500"
            />

            <div>
              <h2 className="text-2xl font-bold text-sky-700 mb-2 tracking-wide group-hover:text-sky-900 transition-all">
                {pago.nombre}
              </h2>
              <p className="text-sky-900/80 text-lg leading-relaxed">
                {pago.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animación del fondo */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-gradientMove {
          background-size: 300% 300%;
          animation: gradientMove 12s ease infinite;
        }
      `}</style>

    </div>
  );
};

export default Pago;
