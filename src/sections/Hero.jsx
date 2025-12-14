import { motion } from "framer-motion";
import { bottomToTop } from "../animations/scrollVariants";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white"
      id="hero"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-40"
        style={{
          backgroundImage: "url('/img/hero.JPG')",
        }}
      ></div>

      {/* Contenido */}
      <motion.div
        variants={bottomToTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Se activa cuando el 30% del div entra en vista
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Moda Petite Diseñada para Mujeres de Tallas Pequeñas
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white">
          Prendas diseñadas para mujeres petite: Mejor fit, estilo y comodidad.
        </p>

        <a
          href="#"
          className="mt-8 inline-block px-8 py-3 bg-[var(--color-medio)] shadow-lg text-white rounded-lg text-lg font-medium transition"
        >
          Visita nuestro sitio web
        </a>
      </motion.div>
    </section>
  );
}
