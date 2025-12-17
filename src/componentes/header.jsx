import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarritoContext } from "./CarritoContext";
import Carrito from "./carrito";
import { todosLosProductos } from "../data/productos";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState([]);
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const totalCantidad = carrito.reduce(
    (acc, p) => acc + (p.cantidad || 0),
    0
  );

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => setUsuario(user));
    return () => unsubscribe();
  }, []);

  const cerrarSesion = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/iniciar-sesion");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const filtrados = todosLosProductos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        p.marca.toLowerCase().includes(search.toLowerCase())
    );
    setResultados(filtrados);
  };

  return (
    <>
      <header className="w-full bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 shadow-lg relative z-[100] overflow-visible">

        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6">
          {/* LOGO */}
          <img
            src="/andre.png"
            className="h-28 cursor-pointer hover:scale-110 transition-transform"
            alt="Logo"
          />

          {/* BUSCADOR */}
          <form onSubmit={handleSearch} className="flex mt-4 md:mt-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="px-4 py-3 rounded-l-lg w-72 bg-sky-50 font-semibold outline-none shadow-inner"
            />
            <button className="px-4 py-3 bg-sky-400 hover:bg-sky-500 text-white rounded-r-lg shadow">
              🔍
            </button>
          </form>

          {/* USUARIO / CARRITO */}
          <div className="flex gap-4 items-center mt-4 md:mt-0 relative">
            {usuario ? (
              <>
                <span className="font-semibold text-sky-900">
                  {usuario.displayName || "Mi Perfil"}
                </span>
                <button
                  onClick={cerrarSesion}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/iniciar-sesion" className="font-semibold text-sky-900">
                  Iniciar sesión
                </Link>
                <Link to="/registrarse" className="font-semibold text-sky-900">
                  Registrarse
                </Link>
              </>
            )}

            <button
              onClick={() => setMostrarCarrito(!mostrarCarrito)}
              className="relative text-xl"
            >
              🛒
              {totalCantidad > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {totalCantidad}
                </span>
              )}
            </button>
          </div>
        </div>

     {/* NAVBAR */}
        <nav className="bg-sky-200/70 backdrop-blur-md py-4 px-10 rounded-lg mx-6 mb-4 shadow-inner relative z-40">
          <ul className="flex flex-wrap gap-8">
            {/* MAR PERUANO */}
            <li className="relative group">
              <Link to="/Mar-Peruano" className="font-semibold text-white hover:text-yellow-300">
                Mar Peruano
              </Link>

              {/* SUBMENU */}
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col
                             bg-white bg-opacity-95 backdrop-blur-md text-sky-900 font-semibold
                             border border-sky-300 rounded-2xl shadow-2xl
                             min-w-[200px] z-50">
                <li>
                  <Link to="/Mar-Peruano/recursos" className="px-6 py-3 hover:bg-sky-300 hover:text-white block rounded-xl">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link to="/Mar-Peruano/playas" className="px-6 py-3 hover:bg-sky-300 hover:text-white block rounded-xl">
                    Playas
                  </Link>
                </li>
                <li>
                  <Link to="/Mar-Peruano/fauna" className="px-6 py-3 hover:bg-sky-300 hover:text-white block rounded-xl">
                    Fauna
                  </Link>
                </li>
                <li>
                  <Link to="/Mar-Peruano/flora" className="px-6 py-3 hover:bg-sky-300 hover:text-white block rounded-xl">
                    Flora
                  </Link>
                </li>
                <li>
                  <Link to="/Mar-Peruano/mar" className="px-6 py-3 hover:bg-sky-300 hover:text-white block rounded-xl">
                    Mar
                  </Link>
                </li>
              </ul>
            </li>

            <li><Link to="/Fragancias" className="font-semibold text-white hover:text-yellow-300">Fragancias</Link></li>
            <li><Link to="/skincare" className="font-semibold text-white hover:text-yellow-300">Skincare</Link></li>
            <li><Link to="/Cabello" className="font-semibold text-white hover:text-yellow-300">Cabello</Link></li>
            <li><Link to="/Maquillaje" className="font-semibold text-white hover:text-yellow-300">Maquillaje</Link></li>
            <li><Link to="/Higiene" className="font-semibold text-white hover:text-yellow-300">Higiene</Link></li>
            {usuario && <li><Link to="/Blog" className="font-semibold text-white hover:text-yellow-300">Blog</Link></li>}
            <li><Link to="/Pago" className="font-semibold text-white hover:text-yellow-300">Medios de Pago</Link></li>
            <li><Link to="/contacto" className="font-semibold text-white hover:text-yellow-300">Contáctanos</Link></li>
            <li><Link to="/Fundadores" className="font-semibold text-white hover:text-yellow-300">Fundadores</Link></li>
          </ul>
        </nav>

        {/* RESULTADOS */}
        {resultados.length > 0 && (
          <div className="bg-sky-50 rounded-xl shadow p-4 mx-6 mb-6 relative z-[300]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sky-700">Resultados</h3>
              <button
                onClick={() => setResultados([])}
                className="text-sm px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500"
              >
                Cerrar ventana ✖
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resultados.map((p) => (
                <div key={p.id} className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition">
                  <img src={p.imagen} className="h-40 w-full object-cover rounded mb-2" alt={p.nombre} />
                  <h4 className="font-semibold">{p.nombre}</h4>
                  <button
                    onClick={() => agregarProducto(p)}
                    className="mt-2 w-full bg-sky-400 hover:bg-sky-500 text-white py-2 rounded-lg"
                  >
                    Añadir al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* CARRITO */}
      {mostrarCarrito && (
        <div className="fixed top-24 right-10 z-[99999]">
          <Carrito />
        </div>
      )}
    </>
  );
}
