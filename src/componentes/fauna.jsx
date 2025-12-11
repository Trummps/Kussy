import React, { useState } from "react";

const Fauna = () => {
  
  // ---------------------- DATOS ----------------------

  const mamiferos = [
    {
      nombre: "🐬 Delfín Nariz de Botella",
      descripcion: "Mamífero marino inteligente que habita aguas templadas del mar peruano.",
      caracteristicas: ["Velocidad hasta 35 km/h", "Viven en manadas", "Se comunican con sonidos complejos"],
      peso: "150 kg aprox.",
      ecosistema: "Aguas costeras y mar abierto",
      alimentacion: "Peces y calamares",
      infoExtra: "Muy sociables, suelen interactuar con barcos y se les puede ver realizando saltos acrobáticos.",
      imagen: "/delfin.jpg",
    },
    {
      nombre: "🦭 Lobo Marino Sudamericano",
      descripcion: "Uno de los mamíferos más representativos del litoral peruano.",
      caracteristicas: ["Machos con melena característica", "Excelentes nadadores", "Se alimentan de peces y mariscos"],
      peso: "200-300 kg",
      ecosistema: "Playas rocosas y islas",
      alimentacion: "Peces y mariscos",
      infoExtra: "Se agrupan en colonias llamadas 'loberías'. Emiten fuertes vocalizaciones para comunicarse.",
      imagen: "/lobo.jpg",
    },
    {
      nombre: "🐳 Ballena Jorobada",
      descripcion: "Gran cetáceo migratorio del océano Pacífico.",
      caracteristicas: ["Puede saltar fuera del agua", "Emite cantos complejos", "Depende del krill"],
      peso: "30-40 toneladas",
      ecosistema: "Mar profundo",
      alimentacion: "Krill y peces pequeños",
      infoExtra: "Realiza largas migraciones y es muy apreciada en ecoturismo.",
      imagen: "/BallenaJorobada.jpg",
    },
    {
      nombre: "🦦 Nutria Marina",
      descripcion: "Pequeño mamífero que habita las costas del Perú.",
      caracteristicas: ["Agilidad en el agua", "Usa herramientas para romper conchas", "Vive en grupos familiares"],
      peso: "10-15 kg",
      ecosistema: "Riberas y estuarios",
      alimentacion: "Moluscos y crustáceos",
      infoExtra: "Ayuda al equilibrio ecológico controlando poblaciones de moluscos.",
      imagen: "/nutria.jpg",
    },
    {
      nombre: "🦈 Tiburón Toro",
      descripcion: "Depredador costero del litoral peruano.",
      caracteristicas: ["Gran fuerza", "Puede vivir en agua salada y dulce", "Alimentación carnívora"],
      peso: "100-200 kg",
      ecosistema: "Costas y estuarios",
      alimentacion: "Peces y pequeños mamíferos marinos",
      infoExtra: "Importante regulador de la población de peces.",
      imagen: "/tiburon.jpg",
    },
    {
      nombre: "🦭 Lobo Marino de Pelaje Oscuro",
      descripcion: "Variedad del lobo marino sudamericano, de pelaje más oscuro.",
      caracteristicas: ["Colonias numerosas", "Fuerza y agilidad", "Comportamiento social complejo"],
      peso: "220-280 kg",
      ecosistema: "Islas y playas rocosas",
      alimentacion: "Peces y cefalópodos",
      infoExtra: "Se adapta muy bien a distintos climas costeros.",
      imagen: "/lobo_oscuro.jpg",
    },
  ];

  const peces = [
    {
      nombre: "🐠 Anchoveta Peruana",
      descripcion: "Base de la cadena trófica del mar peruano.",
      caracteristicas: ["Pesquería muy grande", "Dependiente de la corriente de Humboldt", "Se alimenta de fitoplancton"],
      peso: "3-4 g",
      ecosistema: "Aguas templadas superficiales",
      alimentacion: "Plancton",
      infoExtra: "Recurso económico clave para el Perú, fundamental en la alimentación de aves y mamíferos marinos.",
      imagen: "/anchoveta.jpg",
    },
    {
      nombre: "🐟 Merluza",
      descripcion: "Especie importante para la pesca industrial y artesanal.",
      caracteristicas: ["Depredador de peces pequeños", "Aporta proteína a la población", "Habita aguas templadas"],
      peso: "1-2 kg",
      ecosistema: "Aguas costeras y fondos rocosos",
      alimentacion: "Peces pequeños y crustáceos",
      infoExtra: "Se captura de manera sostenible en algunas regiones, es fuente de empleo y alimento.",
      imagen: "/merluza.jpg",
    },
    {
      nombre: "🐟 Jurel",
      descripcion: "Pez migratorio común en nuestras costas.",
      caracteristicas: ["Forman cardúmenes grandes", "Rápida reproducción", "Depredador de plancton y peces pequeños"],
      peso: "0.5-1 kg",
      ecosistema: "Aguas costeras y abiertas",
      alimentacion: "Plancton y peces pequeños",
      infoExtra: "Clave en la alimentación de aves y mamíferos marinos.",
      imagen: "/jurel.jpg",
    },
    {
      nombre: "🐠 Pez Loro",
      descripcion: "Pez colorido que habita arrecifes y fondos rocosos.",
      caracteristicas: ["Colores vibrantes", "Se alimenta de algas", "Viven cerca de arrecifes"],
      peso: "0.7-1.2 kg",
      ecosistema: "Arrecifes y zonas rocosas",
      alimentacion: "Algas",
      infoExtra: "Ayuda a controlar el crecimiento de algas en arrecifes.",
      imagen: "/pezloro.jpg",
    },
    {
      nombre: "🐟 Pez Espada",
      descripcion: "Depredador rápido y migratorio del Pacífico.",
      caracteristicas: ["Cuerpo alargado", "Aletas fuertes", "Caza peces grandes"],
      peso: "30-50 kg",
      ecosistema: "Mar abierto",
      alimentacion: "Peces y calamares",
      infoExtra: "Importante para la pesca deportiva y comercial.",
      imagen: "/pez_espada.jpg",
    },
    {
      nombre: "🐠 Corvina",
      descripcion: "Pez apreciado en gastronomía peruana.",
      caracteristicas: ["Fácil de capturar", "Sabor delicioso", "Habita fondos arenosos"],
      peso: "1-5 kg",
      ecosistema: "Aguas costeras y estuarios",
      alimentacion: "Moluscos y crustáceos",
      infoExtra: "Comercialmente relevante en restaurantes y pesca local.",
      imagen: "/corvina.jpg",
    },
  ];

  const oviparos = [
    {
      nombre: "🐧 Pingüino de Humboldt",
      descripcion: "Ave marina característica de la corriente fría de Humboldt.",
      caracteristicas: ["No vuela", "Anida en cuevas costeras", "Especie vulnerable"],
      peso: "4-5 kg",
      ecosistema: "Islas y costas rocosas",
      alimentacion: "Peces pequeños y calamares",
      infoExtra: "Protegido por su vulnerabilidad, realiza migraciones cortas y se adapta al clima frío.",
      imagen: "/pinguino.jpg",
    },
    {
      nombre: "🐢 Tortuga Marina",
      descripcion: "Reptil migratorio que visita nuestras costas.",
      caracteristicas: ["Puede vivir 80 años", "Alimentación de algas y medusas", "Migratoria"],
      peso: "100-150 kg",
      ecosistema: "Playas y mar abierto",
      alimentacion: "Algas, medusas y pequeños crustáceos",
      infoExtra: "Se encuentra protegida, y sus playas de anidación son monitoreadas para conservación.",
      imagen: "/tortuga.jpg",
    },
    {
      nombre: "🦎 Lagartija Marina",
      descripcion: "Pequeño reptil que habita zonas rocosas costeras.",
      caracteristicas: ["Rápida y escurridiza", "Se alimenta de insectos y pequeños crustáceos", "Se camufla en las rocas"],
      peso: "0.1 kg",
      ecosistema: "Costas rocosas",
      alimentacion: "Insectos y crustáceos",
      infoExtra: "Protege la biodiversidad local controlando poblaciones de insectos.",
      imagen: "/lagartija.jpg",
    },
    {
      nombre: "🐟 Pez Payaso Peruano",
      descripcion: "Pez ovíparo que habita corales y rocas.",
      caracteristicas: ["Colores llamativos", "Forma parejas monógamas", "Se esconde entre corales"],
      peso: "0.2-0.3 kg",
      ecosistema: "Arrecifes y zonas rocosas",
      alimentacion: "Plancton y pequeños invertebrados",
      infoExtra: "Protege los corales de algas invasoras.",
      imagen: "/pezpayaso.jpg",
    },
    {
      nombre: "🦅 Gaviota Peruana",
      descripcion: "Ave costera común en playas y estuarios.",
      caracteristicas: ["Alas fuertes", "Ojos agudos", "Se alimenta de peces y crustáceos"],
      peso: "0.8-1.5 kg",
      ecosistema: "Playas y estuarios",
      alimentacion: "Peces y crustáceos",
      infoExtra: "Muy adaptable a entornos costeros y alimenticios diversos.",
      imagen: "/gaviota.jpg",
    },
    {
      nombre: "🦢 Cisne Costero",
      descripcion: "Ave migratoria que habita lagunas y estuarios.",
      caracteristicas: ["Cuello largo", "Pico especializado", "Migratoria parcial"],
      peso: "3-6 kg",
      ecosistema: "Lagunas, estuarios y mar abierto",
      alimentacion: "Plantas acuáticas y pequeños peces",
      infoExtra: "Participa en la dispersión de semillas acuáticas.",
      imagen: "/cisne.jpg",
    },
  ];

  const invertebrados = [
    {
      nombre: "🐙 Pulpo Común",
      descripcion: "Invertebrado inteligente de zonas rocosas.",
      caracteristicas: ["Tres corazones", "Puede camuflarse", "Ocho brazos con ventosas fuertes"],
      peso: "10 kg aprox.",
      ecosistema: "Fondos rocosos y arrecifes",
      alimentacion: "Crustáceos y peces pequeños",
      infoExtra: "Puede regenerar brazos y usa tinta como defensa. Muy valorado en la gastronomía peruana.",
      imagen: "/pulpo.jpg",
    },
    {
      nombre: "🦑 Calamar Gigante",
      descripcion: "Invertebrado representativo del mar peruano.",
      caracteristicas: ["Puede superar 2 metros", "Muy veloz", "Importancia económica"],
      peso: "50-100 kg",
      ecosistema: "Mar profundo",
      alimentacion: "Peces y otros cefalópodos",
      infoExtra: "Clave en la alimentación de peces grandes y aves marinas, y en la pesca comercial.",
      imagen: "/calamar.jpg",
    },
    {
      nombre: "🦀 Cangrejo de Río",
      descripcion: "Crustáceo común en estuarios y playas rocosas.",
      caracteristicas: ["Caparazón duro", "Pinzas fuertes", "Se esconde en madrigueras"],
      peso: "0.5-1 kg",
      ecosistema: "Estuarios y costas rocosas",
      alimentacion: "Algas y pequeños invertebrados",
      infoExtra: "Importante en la cadena alimenticia y limpieza de fondos marinos.",
      imagen: "/cangrejo.jpg",
    },
    {
      nombre: "🦐 Camarón de Playa",
      descripcion: "Crustáceo pequeño que vive en la arena húmeda.",
      caracteristicas: ["Pequeño y ágil", "Alimenta aves marinas", "Forma colonias densas"],
      peso: "20-50 g",
      ecosistema: "Playa y estuarios",
      alimentacion: "Detritos y algas",
      infoExtra: "Sirve como alimento para aves y peces juveniles.",
      imagen: "/camaron.jpg",
    },
    {
      nombre: "🦑 Sepia Peruana",
      descripcion: "Molusco cefalópodo que habita aguas costeras.",
      caracteristicas: ["Puede cambiar de color", "Tentáculos fuertes", "Depredador activo"],
      peso: "5-8 kg",
      ecosistema: "Fondos rocosos y arena",
      alimentacion: "Peces y crustáceos",
      infoExtra: "Muy importante en pesca artesanal y ecosistemas costeros.",
      imagen: "/sepia.jpg",
    },
    {
      nombre: "🦀 Jaiba Peruana",
      descripcion: "Cangrejo de gran tamaño que habita costas rocosas.",
      caracteristicas: ["Caparazón resistente", "Pinzas grandes", "Vida en madrigueras"],
      peso: "3-4 kg",
      ecosistema: "Playas rocosas",
      alimentacion: "Moluscos y algas",
      infoExtra: "Alimento importante para aves y pescadores locales.",
      imagen: "/jaiba.jpg",
    },
  ];

const Section = ({ title, animales }) => (
  <section
    className="p-8 
               bg-gradient-to-br 
               from-sky-100 via-sky-200 to-sky-300 
               rounded-3xl shadow-2xl border border-sky-400"
  >
    <h2 className="text-4xl font-extrabold text-sky-800 text-center mb-8">
      {title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {animales.map((animal, i) => (
        <AnimalCard key={i} animal={animal} />
      ))}
    </div>
  </section>
);


  // ---------------------- TARJETAS ----------------------

  const AnimalCard = ({ animal }) => {
    const [open, setOpen] = useState(false);

    const esInvertebrado =
      animal.nombre.includes("🐙") ||
      animal.nombre.includes("🦑") ||
      animal.nombre.includes("🦀") ||
      animal.nombre.includes("🦐");

    return (
      <div
        className={
          esInvertebrado
            ? "bg-cyan-100/80 backdrop-blur-xl rounded-3xl shadow-lg border border-cyan-300 overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
            : "bg-cyan-50/80 backdrop-blur-xl rounded-3xl shadow-lg border border-cyan-300 overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
        }
        onClick={() => setOpen(!open)}
      >
        <div className="overflow-hidden">
          <img
            src={animal.imagen}
            alt={animal.nombre}
            className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        <div className="p-6 text-sky-900">
          <h3 className="text-2xl font-bold text-sky-800 mb-2">{animal.nombre}</h3>
          <p className="text-sky-900/80 mb-2">{animal.descripcion}</p>

          <ul className="list-disc ml-5 text-sky-900/80 space-y-1">
            {animal.caracteristicas.map((item, i) => (
              <li key={i} className="text-sm">
                {item}
              </li>
            ))}
          </ul>

          {open && (
            <div className="mt-4 p-3 bg-cyan-100 rounded-xl text-sky-900/90 text-sm space-y-1">
              <p><strong>Peso:</strong> {animal.peso}</p>
              <p><strong>Ecosistema:</strong> {animal.ecosistema}</p>
              <p><strong>Alimentación:</strong> {animal.alimentacion}</p>
              <p>{animal.infoExtra}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ---------------------- RENDER ----------------------

  return (
    <div className="w-[95%] mx-auto mt-12 mb-20 space-y-20">
      <Section title="Mamíferos" color="cyan" animales={mamiferos} />
      <Section title="Peces" color="sky" animales={peces} />
      <Section title="Ovíparos" color="blue" animales={oviparos} />
      <Section title="Invertebrados" color="cyan" animales={invertebrados} />
    </div>
  );
};

export default Fauna;
