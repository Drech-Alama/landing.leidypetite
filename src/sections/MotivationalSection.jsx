import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componente: MotivationalSection
// Uso: import MotivationalSection from './MotivationalSection';
// <MotivationalSection />

export default function MotivationalSection({
  rotateInterval = 4000,
  className = "",
}) {
  // Frases motivacionales (rotan en el hero)
  const motivational = [
    "Tu estatura no define tu estilo, tu actitud sí.",
    "Pequeña en centímetros, gigante en presencia.",
    "Diseñado para tu altura, creado para tu grandeza.",
    "La talla no te limita, te hace única.",
    "La moda también se hace a tu medida.",
    "Cuando la ropa te queda bien, la seguridad se nota.",
    "La verdadera medida está en cómo te haces notar.",
    "El tamaño no importa, el fit sí.",
  ];

  // Frases de propuesta de valor (lista lateral)
  const valueProps = [
    "Encuentra piezas que por fin respetan tus proporciones.",
    "Porque mereces ropa que te quede bien desde el primer intento.",
    "Por fin, un espacio donde la ropa petite sí existe.",
    "Tu estilo elevado, sin ajustes ni complicaciones.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % motivational.length);
    }, rotateInterval);
    return () => clearInterval(timer);
  }, [rotateInterval, motivational.length]);

  return (
    <section
      className={`w-full py-32 px-6 md:px-12 lg:px-24 ${className}`}
      id="foryou"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Hero con frase rotante */}
        <div className="p-6 h-[500px]  md:h-[450px] rounded-2xl shadow-lg border border-gray-100">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Frases que inspiran tu estilo
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Mensajes cortos para celebrar nuestra identidad petite.
              </p>
            </div>

            <div className="h-40 md:h-48 flex items-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45 }}
                  className="text-xl md:text-2xl font-semibold text-gray-800"
                >
                  “{motivational[index]}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="flex gap-3 items-center">
              {/* Indicadores */}
              <div className="flex gap-2">
                {motivational.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Mostrar frase ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-transform transform cursor-pointer  ${
                      i === index ? "scale-110" : "opacity-60"
                    }`}
                    style={{
                      backgroundColor:
                        i === index
                          ? "var(--color-medio)"
                          : "var(--color-claro)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <a
                href="#catalogo"
                className="inline-block px-4 py-2 rounded-lg font-medium shadow-sm bg-[var(--color-medio)] text-white"
              >
                Ver catálogo
              </a>
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg font-medium border border-[var(--color-medio)]"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>

        {/* Lista de propuestas de valor */}
        <div className="p-6 h-[530px] md:h-[450px] rounded-2xl border border-[var(--color-claro)] shadow-lg bg-[var(--color-claro)]">
          <h3 className="text-xl font-bold">Por qué nos eligen</h3>
          <p className="text-sm mt-1">
            Propuestas pensadas para quienes buscan fit real y cómodo.
          </p>

          <ul className="mt-6 space-y-4">
            {valueProps.map((vp, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">{vp}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href="#garments"
              className="inline-block bg-white text-[var(--color-negro)] border border-[var(--color-medio)] px-4 py-2 rounded-lg font-medium shadow-lg"
            >
              Explora la colección petite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
