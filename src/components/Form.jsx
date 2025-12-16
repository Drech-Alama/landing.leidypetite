import { useState } from "react";
import { motion } from "framer-motion";
import { bottomToTop } from "../animations/scrollVariants";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    medida: "",
    provincia: "",
    distrito: "",
    correo: "",
  });

  const [enviando, setEnviando] = useState(false);

  const endpoint =
    "https://script.google.com/macros/s/AKfycbyLB4YvIrG_sQAU4Oy0xbFT3yrRQ9Q_qsYhlDQHeZ_ORQ6w5CKgEWkpN4r0i_bnC403/exec";

  const provincias = {
    Lima: [
      "Ancón",
      "Ate",
      "Barranco",
      "Breña",
      "Carabayllo",
      "Chaclacayo",
      "Chorrillos",
      "Cieneguilla",
      "Comas",
      "El Agustino",
      "Independencia",
      "Jesús María",
      "La Molina",
      "La Victoria",
      "Lima",
      "Lince",
      "Los Olivos",
      "Lurigancho",
      "Lurín",
      "Magdalena del Mar",
      "Miraflores",
      "Pachacámac",
      "Pucusana",
      "Pueblo Libre",
      "Puente Piedra",
      "Punta Hermosa",
      "Punta Negra",
      "Rímac",
      "San Bartolo",
      "San Borja",
      "San Isidro",
      "San Juan de Lurigancho",
      "San Juan de Miraflores",
      "San Luis",
      "San Martín de Porres",
      "San Miguel",
      "Santa Anita",
      "Santa María del Mar",
      "Santa Rosa",
      "Santiago de Surco",
      "Surquillo",
      "Villa El Salvador",
      "Villa María del Triunfo",
    ],
    Piura: [
      // Provincia de Piura
      "Piura",
      "Castilla",
      "Catacaos",
      "Cura Mori",
      "El Tallán",
      "La Arena",
      "La Unión",
      "Las Lomas",
      "Tambo Grande",

      // Provincia de Ayabaca
      "Ayabaca",
      "Frías",
      "Jililí",
      "Lagunas",
      "Montero",
      "Pacaipampa",
      "Paimas",
      "Sapillica",
      "Sícchez",
      "Suyo",

      // Provincia de Huancabamba
      "Huancabamba",
      "Canchaque",
      "El Carmen de la Frontera",
      "Huarmaca",
      "Lalaquiz",
      "San Miguel de El Faique",
      "Sóndor",
      "Sóndorillo",

      // Provincia de Morropón
      "Chulucanas",
      "Buenos Aires",
      "Chalaco",
      "La Matanza",
      "Morropón",
      "Salitral",
      "San Juan de Bigote",
      "Santa Catalina de Mossa",
      "Santo Domingo",
      "Yamango",

      // Provincia de Paita
      "Paita",
      "Amotape",
      "Arenal",
      "Colán",
      "La Huaca",
      "Tamarindo",
      "Vichayal",

      // Provincia de Sechura
      "Sechura",
      "Bellavista de la Unión",
      "Bernal",
      "Cristo Nos Valga",
      "Vice",
      "Rinconada Llicuar",

      // Provincia de Sullana
      "Sullana",
      "Bellavista",
      "Ignacio Escudero",
      "Lancones",
      "Marcavelica",
      "Miguel Checa",
      "Querecotillo",
      "Salitral",

      // Provincia de Talara
      "Pariñas",
      "El Alto",
      "La Brea",
      "Lobitos",
      "Los Órganos",
      "Máncora",
    ],
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      alert("Datos enviados correctamente");

      setForm({
        nombre: "",
        medida: "",
        provincia: "",
        distrito: "",
        correo: "",
      });
    } catch (error) {
      alert("Error al enviar");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/fondo.jpg')" }}
    >
      <motion.form
        variants={bottomToTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4 bg-white px-5 py-7 rounded-lg shadow-xl"
      >
        <h2 className="text-center font-bold text-lg">
          ÚNETE A NUESTRA COMUNIDAD
        </h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y apellidos"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

       <div>
  <p className="mb-2 text-sm font-medium">Selecciona una medida</p>

<div className="grid grid-cols-4 gap-2">
  <label
    className={`cursor-pointer border rounded p-2 text-center text-sm font-semibold transition
      ${
        form.medida === "( X - C )"
          ? "bg-[var(--color-medio)] text-white border-[var(--color-medio)]"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
  >
    <input
      type="radio"
      name="medida_petite"
      value="( X - C )"
      checked={form.medida === "( X - C )"}
      onChange={() => setForm({ ...form, medida: "( X - C )" })}
      required
      className="hidden"
    />
    ( X - C )
  </label>

  <label
    className={`cursor-pointer border rounded p-2 text-center text-sm font-semibold transition
      ${
        form.medida === "( S - C )"
          ? "bg-[var(--color-medio)] text-white border-[var(--color-medio)]"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
  >
    <input
      type="radio"
      name="medida_petite"
      value="( S - C )"
      checked={form.medida === "( S - C )"}
      onChange={() => setForm({ ...form, medida: "( S - C )" })}
      className="hidden"
    />
    ( S - C )
  </label>

  <label
    className={`cursor-pointer border rounded p-2 text-center text-sm font-semibold transition
      ${
        form.medida === "( M - C )"
          ? "bg-[var(--color-medio)] text-white border-[var(--color-medio)]"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
  >
    <input
      type="radio"
      name="medida_petite"
      value="( M - C )"
      checked={form.medida === "( M - C )"}
      onChange={() => setForm({ ...form, medida: "( M - C )" })}
      className="hidden"
    />
    ( M - C )
  </label>

  <label
    className={`cursor-pointer border rounded p-2 text-center text-sm font-semibold transition
      ${
        form.medida === "( L - C )"
          ? "bg-[var(--color-medio)] text-white border-[var(--color-medio)]"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
  >
    <input
      type="radio"
      name="medida_petite"
      value="( L - C )"
      checked={form.medida === "( L - C )"}
      onChange={() => setForm({ ...form, medida: "( L - C )" })}
      className="hidden"
    />
    ( L - C )
  </label>
</div>

         
          <option value="" disabled>
            Selecciona una medida
          </option>
          <option value="XS-C">XS-C</option>
          <option value="S-C">S-C</option>
          <option value="M-C">M-C</option>
          <option value="L-C">L-C</option>
        </select>

        <select
          name="provincia"
          value={form.provincia}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Selecciona una provincia</option>
          {Object.keys(provincias).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          name="distrito"
          value={form.distrito}
          onChange={handleChange}
          required
          disabled={!form.provincia}
          className="w-full border p-2 rounded"
        >
          <option value="">Selecciona un distrito</option>
          {form.provincia &&
            provincias[form.provincia].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
        </select>

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-[var(--color-medio)] text-white py-2 rounded cursor-pointer shadow-lg"
        >
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </motion.form>
    </section>
  );
}
