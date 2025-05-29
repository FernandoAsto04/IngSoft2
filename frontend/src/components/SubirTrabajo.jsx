import React, { useState } from "react";

export default function FormularioTrabajo() {
  const [formData, setFormData] = useState({
    titulo: "",
    abstract: "",
    area: "",
    lineaInvestigacion: "",
    palabrasClave: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoTrabajo = {
      ...formData,
      palabrasClave: formData.palabrasClave
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p !== ""),
    };

    console.log("Trabajo guardado:", nuevoTrabajo);

    // Aquí puedes hacer un POST a tu backend si deseas
    // fetch('/api/trabajos', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(nuevoTrabajo)
    // })

    alert("Trabajo guardado correctamente");
    setFormData({
      titulo: "",
      abstract: "",
      area: "",
      lineaInvestigacion: "",
      palabrasClave: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 0 20px rgba(255,127,0,0.3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fcf5e9", // Fondo crema
      }}
    >
      <h2 style={{ color: "#ff7f00", marginBottom: "20px" }}>
        Registrar nuevo trabajo
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Abstract:
          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            required
            rows="4"
            style={inputStyle}
          />
        </label>

        <label>
          Área:
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Línea de investigación:
          <input
            type="text"
            name="lineaInvestigacion"
            value={formData.lineaInvestigacion}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Palabras clave (separadas por coma):
          <input
            type="text"
            name="palabrasClave"
            value={formData.palabrasClave}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#ff7f00",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "25px",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px",
  backgroundColor: "#ffffff", // Fondo blanco para inputs y textarea
  color: "#000000", // Texto negro para contraste
};
