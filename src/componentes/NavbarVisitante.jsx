import { Link } from "react-router-dom";

function NavbarVisitante() {
    return (
        <header>
            <div className="container">
                <h1 className="logo"></h1>

                <nav>
                    <ul>
                        <li><Link to="/MarPeruano"> </Link></li>
                        <li><Link to="/Fragancias"></Link></li>
                        <li><Link to="/skincare"></Link></li>
                        <li><Link to="/Cabello"></Link></li>
                        <li><Link to="/Maquillaje"></Link></li>
                        <li><Link to="/Blog"></Link></li>
                        <li><Link to="/contacto"></Link></li>
                        <li><Link to="/iniciar-sesion"></Link></li>
                        <li><Link to="/registrarse"></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavbarVisitante;
