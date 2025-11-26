import { Routes, Route } from "react-router-dom";

import Header from "./componentes/header";
import Carousel from "./componentes/carousel";

import Lentes from "./componentes/lentes";
import Perfume from "./componentes/perfume";
import Crema from "./componentes/crema";
import Labial from "./componentes/labial";
import Shampoos from "./componentes/shampoos";
import Sombras from "./componentes/sombras";
import Correctores from "./componentes/correctores";
import Rubores from "./componentes/rubores";
import Rimeles from "./componentes/rimeles";
import Jabones from "./componentes/jabones";
import Cejas from "./componentes/cejas";
import Pestanas from "./componentes/pestañas";

import Fauna from "./componentes/fauna";
import PlayasPeru from "./componentes/playa";
import RecursosMarinos from "./componentes/recursos";
import Footer from "./componentes/footer";
import Contacto from "./componentes/contacto";
import Login from "./componentes/Login";
import Hola from "./componentes/Hola";


import { CarritoProvider } from "./componentes/CarritoContext";
import NavbarVisitante from "./componentes/NavbarVisitante";
import NavbarUsuario from "./componentes/NavbarUsuario";
import Comunidad from "./componentes/comunidad";
import Mar from "./componentes/Mar";
import Pago from "./componentes/Pago";
import Serums from "./componentes/serums";
import Flora from "./componentes/flora";
import Fundadores from "./componentes/Fundadores"

import "./App.css";
function App() {
  return (
    <CarritoProvider>
      <Header />
      <NavbarVisitante />
      <NavbarUsuario />
      <Carousel />

      <Routes>
        {/* PAGINAS PRINCIPALES */}
        <Route path="/" element={<Hola />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/iniciar-sesion" element={<Login />} />

        {/* RUTAS VISITANTE */}
        <Route
          path="/Mar-Peruano"
          element={
            <>
               <Mar/>
              <RecursosMarinos />
              <PlayasPeru />
              <Fauna />
               <Flora/>
            </>
          }
        />

        <Route
          path="/Higiene"
          element={
            <>
              <Shampoos />
              <Jabones />
            </>
          }
        />

        <Route
          path="/Fragancias"
          element={
            <>
              <Perfume />
              <Lentes />
            </>
          }
        />

      
        
        <Route
          path="/skincare"
          element={
            <>
              <Crema />
              <Serums />
            </>
          }
        />

        <Route path="/Cabello" element={<Shampoos />} />

        <Route
          path="/Maquillaje"
          element={
            <>
              <Sombras />
              <Cejas />
              <Rimeles />
              <Rubores />
              <Pestanas />
              <Labial />
              <Correctores />
            </>
          }
        />
         <Route path="/Pago" element={<Pago />} />
        
        <Route path="/Blog" element={<Comunidad />} />
       <Route path="/Fundadores" element={<Fundadores />} />
        <Route path="/registrarse" element={<Hola />} />
       


     


        {/* RUTAS INDIVIDUALES DEL CATÁLOGO */}
        <Route path="/lentes" element={<Lentes />} />
        <Route path="/labial" element={<Labial />} />
        <Route path="/correctores" element={<Correctores />} />
        <Route path="/rubores" element={<Rubores />} />
        <Route path="/rimeles" element={<Rimeles />} />
        <Route path="/jabones" element={<Jabones />} />
        <Route path="/cejas" element={<Cejas />} />
        <Route path="/pestanas" element={<Pestanas />} />
        <Route path="/recursos" element={<RecursosMarinos />} />
      </Routes>

      <Footer />
    </CarritoProvider>
  );
}

export default App;
