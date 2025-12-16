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

        <select
          name="medida"
          value={form.medida}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Selecciona una medida</option>
          <option value="XS-C">XS-C</option>
          <option value="S-C">S-C</option>
          <option value="M-C">M-C</option>
          <option value="L-C">LC</option>
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
