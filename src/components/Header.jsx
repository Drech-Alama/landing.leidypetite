import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true);
        if (window.innerWidth < 768) setIsOpen(false);
      } else {
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 👉 Color de texto correcto
  const linkColor = isOpen
    ? "text-black"
    : scrolled
    ? "text-black"
    : "text-white";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
        ${hideHeader ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "bg-[#F4E0CF] shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a href="/" className="w-40">
          <img
            src={
              scrolled
                ? "./img/logoLeidyPetitePositivo.png"
                : "./img/logoLeidyPetiteNegativo.png"
            }
            alt="Logo Leidy Petite"
            className="transition-all duration-300"
          />
        </a>

        {/* BOTÓN MOBILE */}
        <button
          className={`md:hidden text-3xl font-bold transition-all cursor-pointer ${
            scrolled || isOpen ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* MENÚ */}
        <ul
          className={`
            md:flex md:gap-6 md:static absolute left-0 w-full md:w-auto
            transition-all duration-300 overflow-hidden
            ${
              isOpen
                ? "top-24 opacity-100"
                : "top-[-500px] opacity-0 md:opacity-100"
            }
            bg-[#F4E0CF] md:bg-transparent
            md:py-0 py-6 text-center
          `}
        >
          {[
            { label: "INICIO", href: "#hero" },
            { label: "PARA TI", href: "#foryou" },
            { label: "PRENDAS", href: "#garments" },
            { label: "CONTACTO", href: "#contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  font-bold text-xl block py-4 transition-all duration-300
                  ${linkColor}
                  hover:text-[#C28B68] hover:scale-105
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
