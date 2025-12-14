export default function Footer() {
  return (
    <footer
      className="w-full py-8"
      style={{ backgroundColor: "var(--color-claro)" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Nombre o marca */}
        <h2 className="text-xl font-semibold mb-4 text-black">Leidy Petite</h2>

        {/* Iconos */}
        <div className="flex justify-center gap-6 mb-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/51912245169"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:text-[#25D366]"
          >
            <svg
              className="w-7 h-7 text-[var(--color-medio)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 3.99 1.67 5.75L2 22l4.46-1.75c1.64.9 3.4 1.35 5.58 1.35 5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.07c-1.87 0-3.3-.45-4.72-1.23l-.34-.2-2.64 1.03.97-2.57-.22-.36c-.98-1.55-1.45-3.04-1.45-4.74 0-4.38 3.56-7.94 7.94-7.94s7.94 3.56 7.94 7.94-3.56 7.94-7.94 7.94z" />
              <path d="M16.58 14.2c-.25-.12-1.48-.73-1.7-.82-.23-.1-.4-.12-.57.12-.17.23-.66.82-.81.99-.15.17-.3.18-.55.06-.25-.12-1.06-.39-2.02-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.12-.12.25-.3.37-.45.12-.15.15-.25.23-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.43l-.49-.01c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.3 3.79.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.09.15-1.18-.06-.1-.23-.15-.48-.27z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@jaquifloresyovera1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:text-black"
          >
            <svg
              className="w-7 h-7 text-[var(--color-medio)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 3c.1 1.3.6 2.3 1.5 3.2s2 1.4 3.2 1.5v3.3c-1.9-.2-3.5-1-4.7-2.3v6.9c0 4-3.3 7.3-7.3 7.3S2 19.6 2 15.6c0-4 3.3-7.3 7.3-7.3.4 0 .8 0 1.2.1v3.4c-.4-.1-.8-.1-1.2-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V3h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/leidy_jaqueline_2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:text-pink-500"
          >
            <svg
              className="w-7 h-7 text-[var(--color-medio)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/leydi.floresyovera"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:text-blue-600"
          >
            <svg
              className="w-7 h-7 text-[var(--color-medio)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-black">
          © {new Date().getFullYear()} Leidy Petite.
        </p>
      </div>
    </footer>
  );
}
