import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./componentes/Header";
import Carousel from "./componentes/Carousel";

import Lentes from "./componentes/Lentes";
import Perfume from "./componentes/Perfume";
import Crema from "./componentes/Crema";
import Labial from "./componentes/Labial";
import Shampoos from "./componentes/Shampoos";
import Sombras from "./componentes/Sombras";
import Correctores from "./componentes/Correctores";
import Rubores from "./componentes/Rubores";
import Rimeles from "./componentes/Rimeles";
import Jabones from "./componentes/Jabones";
import Cejas from "./componentes/Cejas";
import Pestanas from "./componentes/Pestanas";

import Fauna from "./componentes/Fauna";
import PlayasPeru from "./componentes/Playa"; // <-- corregido
import RecursosMarinos from "./componentes/Recursos"; // <-- corregido
import Flora from "./componentes/Flora";
import Mar from "./componentes/Mar";
import Footer from "./componentes/Footer";
import Contacto from "./componentes/Contacto";
import Login from "./componentes/Login";
import Hola from "./componentes/Hola";
import Fundadores from "./componentes/Fundadores";
import Pago from "./componentes/Pago";
import Serums from "./componentes/Serums";
import Comunidad from "./componentes/Comunidad";

import { CarritoProvider } from "./componentes/CarritoContext"; // <-- corregido
import Carrito from "./componentes/Carrito"; // <-- corregido

import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [usuario, setUsuario] = useState(null);
  const auth = getAuth();

  // Detecta si el usuario está logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <CarritoProvider>
      <Header />
      <Carousel />

      <Routes>
        <Route path="/" element={<Hola />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Hola />} />

        {/* MAR PERUANO */}
        <Route path="/Mar-Peruano" element={<RecursosMarinos />} />
        <Route path="/Mar-Peruano/recursos" element={<RecursosMarinos />} />
        <Route path="/Mar-Peruano/playas" element={<PlayasPeru />} />
        <Route path="/Mar-Peruano/fauna" element={<Fauna />} />
        <Route path="/Mar-Peruano/flora" element={<Flora />} />
        <Route path="/Mar-Peruano/mar" element={<Mar />} />

        {/* HIGIENE */}
        <Route path="/Higiene" element={<><Shampoos /><Jabones /></>} />

        {/* FRAGANCIAS */}
        <Route path="/Fragancias" element={<><Perfume /><Lentes /></>} />

        {/* SKINCARE */}
        <Route path="/skincare" element={<><Crema /><Serums /></>} />

        {/* MAQUILLAJE */}
        <Route path="/Maquillaje" element={<><Sombras /><Cejas /><Rimeles /><Rubores /><Pestanas /><Labial /><Correctores /></>} />

        <Route path="/Cabello" element={<Shampoos />} />
        <Route path="/Pago" element={<Pago />} />
        <Route path="/Fundadores" element={<Fundadores />} />

        {/* SOLO USUARIO LOGUEADO PUEDE VER COMUNIDAD */}
        {usuario && <Route path="/Blog" element={<Comunidad />} />}

        {/* RUTAS INDIVIDUALES */}
        <Route path="/lentes" element={<Lentes />} />
        <Route path="/labial" element={<Labial />} />
        <Route path="/correctores" element={<Correctores />} />
        <Route path="/rubores" element={<Rubores />} />
        <Route path="/rimeles" element={<Rimeles />} />
        <Route path="/jabones" element={<Jabones />} />
        <Route path="/cejas" element={<Cejas />} />
        <Route path="/pestanas" element={<Pestanas />} />

        {/* RUTA SUELTA DE RECURSOS */}
        <Route path="/recursos" element={<RecursosMarinos />} />
      </Routes>

      <Footer />
    </CarritoProvider>
  );
}

export default App;
