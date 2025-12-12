import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F4E0CF] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className={`font-bold text-xl transition-all ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          LEIDY PETITE
        </h1>

        {/* Botón Mobile */}
        <button
          className={`md:hidden text-3xl cursor-pointer font-bold transition-all ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`
            md:flex md:gap-6 md:static absolute left-0 w-full md:w-auto 
            transition-all duration-300 overflow-hidden
            ${
              isOpen
                ? "top-16 opacity-100"
                : "top-[-500px] opacity-0 md:opacity-100"
            }
            ${
              scrolled
                ? "bg-[#F4E0CF] md:bg-transparent"
                : "bg-[#F4E0CF]/80 md:bg-transparent"
            }
            md:py-0 py-6 text-center
          `}
        >
          <li>
            <a
              href="#hero"
              className={`font-bold text-xl transition-all ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="#foryou"
              className={`font-bold text-xl transition-all ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              PARA TI
            </a>
          </li>
          <li>
            <a
              href="#garments"
              className={`font-bold text-xl transition-all ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              PRENDAS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`font-bold text-xl transition-all ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
