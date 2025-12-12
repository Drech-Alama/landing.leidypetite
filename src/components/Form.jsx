import { motion } from "framer-motion";
import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    medida: "",
    provincia: "",
    distrito: "",
    correo: "",
  });

  const endpoint = "PEGAR_AQUI_TU_URL_WEBAPP";

  const provincias = ["Lima", "Arequipa", "Cusco", "Piura"];
  const distritos = {
    Lima: ["Miraflores", "San Isidro", "Surco"],
    Arequipa: ["Cercado", "Yanahuara", "Cayma"],
    Cusco: ["Wanchaq", "Santiago", "San Sebastián"],
    Piura: ["Castilla", "Catacaos", "Veintiséis de Octubre"],
  };

  const medidas = ["XS", "XM", "XL"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.result === "success") {
        alert("Datos enviados correctamente");
        setForm({
          nombre: "",
          medida: "",
          provincia: "",
          distrito: "",
          correo: "",
        });
      }
    } catch (err) {
      alert("Error al enviar.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/fondo.jpg')" }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto p-6 bg-white/90 backdrop-blur-md shadow-lg rounded-xl flex flex-col gap-4"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-xl font-bold text-center">
          Formulario de Registro
        </h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombres y Apellidos"
          value={form.nombre}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <select
          name="medida"
          value={form.medida}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Seleccione una medida</option>
          {medidas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          name="provincia"
          value={form.provincia}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Seleccione provincia</option>
          {provincias.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          name="distrito"
          value={form.distrito}
          onChange={handleChange}
          className="border p-2 rounded"
          required
          disabled={!form.provincia}
        >
          <option value="">Seleccione distrito</option>
          {form.provincia &&
            distritos[form.provincia].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
        </select>

        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={form.correo}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <motion.button
          type="submit"
          className="text-white py-2 rounded"
          style={{ backgroundColor: "var(--color-medio)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Enviar
        </motion.button>
      </motion.form>
    </section>
  );
}
