export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white"
      id="hero"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80')",
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          La verdadera moda comienza donde nace la actitud.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Inspira, crea y transforma tu estilo cada día.
        </p>

        <a
          href="#contacto"
          className="mt-8 inline-block px-8 py-3 bg-[#676D59] text-white rounded-lg text-lg font-medium transition"
        >
          Visita nuestro sitio web
        </a>
      </div>
    </section>
  );
}
