import React, { useState, useEffect, useRef } from "react";

const images = [
  "/sol.jpg",
  "/kulo.jpg",
  "/kullo.jpg",
  "/oki.jpg",
  "/upps.jpg",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const totalItems = images.length;
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cuando llega al final de la lista duplicada…
    if (index === totalItems) {
      // Quitamos la transición para evitar el salto brusco
      sliderRef.current.style.transition = "none";

      // Reset al inicio
      setIndex(0);

      // Esperamos un pequeño tiempo y volvemos a activar la transición
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "transform 1s ease-in-out";
        }
      }, 20);
    }
  }, [index, totalItems]);

  return (
    <div className="relative w-full h-[65vh] overflow-hidden">
      <div
        ref={sliderRef}
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${(index % totalItems) * 100}%)`,
        }}
      >
        {[...images, images[0]].map((img, i) => (
          <div className="min-w-full h-full flex-shrink-0" key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
