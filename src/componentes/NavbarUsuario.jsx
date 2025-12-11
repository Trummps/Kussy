import { Link } from "react-router-dom";

export default function NavbarUsuario() {
  return (
    <nav className="bg-sky-100 shadow-inner py-3 px-6">
      <ul className="flex flex-wrap gap-6 max-w-7xl mx-auto font-semibold text-sky-900">
        <li>
          <Link
            to="/Mar-Peruano"
            className="hover:text-yellow-400 transition-colors"
          >
            Mar Peruano
          </Link>
        </li>
        <li>
          <Link
            to="/Fragancias"
            className="hover:text-yellow-400 transition-colors"
          >
            Fragancias
          </Link>
        </li>
        <li>
          <Link to="/skincare" className="hover:text-yellow-400 transition-colors">
            Skincare
          </Link>
        </li>
        <li>
          <Link
            to="/Cabello"
            className="hover:text-yellow-400 transition-colors"
          >
            Cabello
          </Link>
        </li>
        <li>
          <Link
            to="/Maquillaje"
            className="hover:text-yellow-400 transition-colors"
          >
            Maquillaje
          </Link>
        </li>
        <li>
          <Link to="/Blog" className="hover:text-yellow-400 transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/Pago" className="hover:text-yellow-400 transition-colors">
            Medios de Pago
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:text-yellow-400 transition-colors">
            Contáctanos
          </Link>
        </li>
        <li>
          <Link to="/Fundadores" className="hover:text-yellow-400 transition-colors">
            Fundadores
          </Link>
        </li>
      </ul>
    </nav>
  );
}
