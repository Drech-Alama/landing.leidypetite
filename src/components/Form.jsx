import { useState } from "react";

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

  const medidas = ["XS", "XM", "XL"];

  const provincias = {
    Lima: ["Miraflores", "San Isidro", "Surco"],
    Arequipa: ["Cercado", "Yanahuara"],
    Cusco: ["Santiago", "Wanchaq"],
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
      <form
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
      </form>
    </section>
  );
}
