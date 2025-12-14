import React, { useState } from "react";

export default function GaleriaResponsive() {
  const images = [
    "/img/img1.jpeg",
    "/img/img2.jpeg",
    "/img/img3.jpeg",
    "/img/img4.jpeg",
    "/img/img5.jpeg",
    "/img/img6.jpeg",
    "/img/img7.jpeg",
    "/img/img8.jpeg",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-10" id="garments">
      {/* --- TITLE & PARAGRAPH --- */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Moda Petite: Diseñada para Ti
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Las prendas petite están pensadas para resaltar tu figura con
          proporciones perfectas y cortes estilizados. Encuentra piezas que
          realzan tu estilo, te brindan comodidad y te hacen lucir increíble en
          cualquier ocasión.
        </p>
        <a
          href="#"
          className="mt-8 inline-block px-8 py-3 bg-[var(--color-medio)] shadow-lg text-white rounded-lg text-lg font-medium transition"
        >
          Visita nuestro sitio web
        </a>
      </div>

      {/* --- MOBILE VERSION (Slider) --- */}
      <div className="sm:hidden relative w-full h-1/2 overflow-hidden px-5">
        <img
          src={images[index]}
          className="w-full h-[450px] object-cover rounded-xl"
          alt="slide"
        />

        {/* Left arrow */}
        <button
          onClick={prevImage}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={nextImage}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* --- DESKTOP VERSION (Grid) --- */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 mx-16">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-full object-cover rounded-xl shadow-md"
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
