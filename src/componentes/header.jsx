import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./CarritoContext";
import Carrito from "./carrito";

export default function Header({ productos = [] }) {
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((acc, p) => acc + (p.cantidad || 0), 0);

  // Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    const filtrados = productos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        (p.categoria && p.categoria.toLowerCase().includes(search.toLowerCase()))
    );
    setResultados(filtrados);
  };

  return (
    <header
      className="
        w-full shadow-xl overflow-hidden animated-header select-none relative
        bg-sky-100 text-sky-900
      "
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          <img
            src="/andre.png"
            className="h-28 transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>

        {/* BUSCADOR */}
        <form onSubmit={handleSearch} className="flex items-center mt-4 md:mt-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos..."
            className="
              px-4 py-3 rounded-l-lg w-72 md:w-80 outline-none
              text-sky-900 font-bold shadow-sm text-lg bg-sky-50
            "
          />
          <button
            type="submit"
            className="
              px-4 py-3 bg-sky-500 hover:bg-sky-600 transition-all 
              rounded-r-lg font-bold text-white text-lg
            "
          >
            🔍
          </button>
        </form>

        {/* LOGIN / REGISTRO / CARRITO */}
        <div className="flex gap-6 mt-4 md:mt-0 items-center relative">
          <Link to="/iniciar-sesion" className="header-link">Login</Link>
          <Link to="/registrarse" className="header-link">Registrarse</Link>

          <div className="relative">
            <button
              onClick={() => setMostrarCarrito(!mostrarCarrito)}
              className="header-link flex items-center gap-1"
            >
              🛒 Carrito
            </button>

            {totalCantidad > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {totalCantidad}
              </span>
            )}

            {mostrarCarrito && (
              <div className="absolute top-12 right-0 z-50">
                <Carrito />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className="
          bg-sky-200/60 backdrop-blur-md py-4 px-10 rounded-lg mx-6 mb-4
        "
      >
   <div className="relative">
  <ul className="flex flex-wrap gap-8">
    <li className="relative group">
      <Link 
        to="/mar-peruano" 
        className="nav-item font-bold text-white hover:text-yellow-300"
      >
        Mar Peruano
      </Link>

      {/* Submenu sobresaliendo sobre imágenes */}
      <ul className="absolute top-full left-0 mt-2 w-56 hidden group-hover:flex flex-col
                     bg-white bg-opacity-95 backdrop-blur-md text-blue-900 font-bold 
                     border-2 border-blue-400 rounded-3xl shadow-2xl
                     z-[9999] transform transition-all duration-300 scale-95 
                     group-hover:scale-100 group-hover:opacity-100 opacity-0">
        <li>
          <Link 
            to="/mar-peruano/pescados" 
            className="block px-6 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-200"
          >
            Pescados
          </Link>
        </li>
        <li>
          <Link 
            to="/mar-peruano/mariscos" 
            className="block px-6 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-200"
          >
            Mariscos
          </Link>
        </li>
        <li>
          <Link 
            to="/mar-peruano/algas" 
            className="block px-6 py-3 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-200"
          >
            Algas
          </Link>
        </li>
      </ul>
    </li>

    <li><Link to="/fragancias" className="nav-item">Fragancias</Link></li>
    <li><Link to="/skincare" className="nav-item">Skincare</Link></li>
    <li><Link to="/maquillaje" className="nav-item">Maquillaje</Link></li>
    <li><Link to="/higiene" className="nav-item">Higiene</Link></li>
    <li><Link to="/blog" className="nav-item">Blog</Link></li>
    <li><Link to="/Pago" className="nav-item">Medios de Pago</Link></li>
    <li><Link to="/contacto" className="nav-item">Contáctanos</Link></li>
    <li><Link to="/Fundadores" className="nav-item">Fundadores</Link></li>
  </ul>
</div>

      </nav>

      {/* RESULTADOS */}
      {resultados.length > 0 && (
        <div
          className="
            bg-blue-50 rounded-xl shadow p-4 mx-6 mb-6
          "
        >
          <h3 className="font-bold text-blue-700 mb-2">
            Resultados:
          </h3>
          <ul>
            {resultados.map((p) => (
              <li
                key={p.id}
                className="border-b border-blue-200 py-2"
              >
                {p.nombre} - <span className="text-blue-500">{p.categoria}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ESTILOS */}
      <style>{`
        .header-link {
          font-weight: bold;
          color: #0c4a6e;
          font-size: 1.15rem;
          transition: .3s;
        }
        .header-link:hover { color: #0284c7; }

        .nav-item { 
          font-weight: bold;
          color: #0c4a6e;
          font-size: 1.15rem;
          transition: .3s;
        }
        .nav-item:hover { color: #0284c7; }

        .animated-header {
          background: linear-gradient(-45deg, #d0f0ff, #a0e0ff, #80d4ff, #b0e6ff);
          background-size: 400% 400%;
          animation: gradientMove 30s ease infinite;
          font-family: 'Poppins', sans-serif;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
}
