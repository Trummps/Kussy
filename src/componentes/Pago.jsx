import React, { useState } from "react";

const Pago = () => {
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [comentario, setComentario] = useState("");

  const [procesando, setProcesando] = useState(false);
  const [completado, setCompletado] = useState(false);

  const pagos = [
    {
      nombre: "Tarjeta de Crédito / Débito",
      descripcion: "Visa, Mastercard, American Express",
      icono: "/visa.jpg",
    },
    {
      nombre: "Yape / Plin",
      descripcion: "Pago inmediato desde tu celular",
      icono: "/yape.jpg",
    },
    {
      nombre: "Transferencia Bancaria",
      descripcion: "Disponible para bancos nacionales",
      icono: "/transferencia.jpg",
    },
    {
      nombre: "Pago Contra Entrega",
      descripcion: "Válido en zonas seleccionadas",
      icono: "/pago.jpg",
    },
  ];

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (file) setImagen(URL.createObjectURL(file));
  };

  const procesarPago = () => {
    if (!nombre || !cantidad || !imagen) {
      alert("Por favor completa todos los campos y adjunta el comprobante.");
      return;
    }

    setProcesando(true);

    setTimeout(() => {
      setProcesando(false);
      setCompletado(true);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 p-8 md:p-12 rounded-3xl shadow-2xl bg-white overflow-hidden mb-24">

      {/* Título superior */}
      <h1 className="text-center text-4xl font-extrabold text-sky-700 drop-shadow-sm mb-10 tracking-wide">
        Página de Pago
      </h1>

      {/* Sección: Datos del cliente */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Información del Cliente</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-4 border border-sky-300 rounded-xl shadow-sm focus:ring-2 focus:ring-sky-400 outline-none"
          />

          <input
            type="number"
            placeholder="Cantidad del pedido"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="p-4 border border-sky-300 rounded-xl shadow-sm focus:ring-2 focus:ring-sky-400 outline-none"
          />
        </div>
      </div>

      {/* Sección: Medios de pago */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-sky-800 mb-6">Selecciona tu método de pago</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pagos.map((pago, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-sky-50 border border-sky-200 rounded-2xl hover:bg-sky-100 transition shadow-md"
            >
              <img
                src={pago.icono}
                className="w-16 h-16 object-contain rounded-xl shadow"
              />
              <div>
                <h3 className="text-xl font-semibold text-sky-800">{pago.nombre}</h3>
                <p className="text-sky-700 text-sm">{pago.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección: Subida del comprobante */}
      <div className="p-6 bg-sky-50 border border-sky-200 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Adjuntar Comprobante</h2>

        <div className="flex flex-col items-center gap-4">
          <label className="cursor-pointer bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl shadow-md transition text-lg">
            Seleccionar imagen
            <input type="file" accept="image/*" className="hidden" onChange={handleImagen} />
          </label>

          {imagen && (
            <img
              src={imagen}
              alt="comprobante"
              className="w-48 h-48 object-cover rounded-xl shadow-lg border border-sky-300"
            />
          )}
        </div>

        <textarea
          placeholder="Comentario adicional (opcional)"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="w-full mt-6 p-4 border border-sky-300 rounded-xl focus:ring-2 focus:ring-sky-400 outline-none shadow-inner"
        ></textarea>
      </div>

      {/* Botón principal */}
      <button
        onClick={procesarPago}
        disabled={procesando}
        className={`w-full mt-8 py-4 rounded-xl text-white text-xl font-bold shadow-lg transition ${
          completado
            ? "bg-green-600"
            : procesando
            ? "bg-yellow-500"
            : "bg-sky-700 hover:bg-sky-800"
        }`}
      >
        {procesando
          ? "Procesando pago..."
          : completado
          ? "✔ Pago Completado"
          : "Confirmar Pago"}
      </button>

      {/* Resumen final */}
      {completado && (
        <div className="mt-10 bg-green-50 border border-green-300 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-green-700 mb-3">Pago registrado correctamente</h3>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Cantidad:</strong> {cantidad}</p>
          <p><strong>Comentario:</strong> {comentario || "Sin comentario"}</p>
        </div>
      )}
    </div>
  );
};

export default Pago;
