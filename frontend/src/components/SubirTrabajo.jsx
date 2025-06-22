// Subirtrabajo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTrabajos } from "./Trabajoscontext";

export default function FormularioTrabajo() {
  const { agregarTrabajo } = useTrabajos();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: "",
    abstract: "",
    area: "",
    lineaInvestigacion: "",
    palabrasClave: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoTrabajo = {
      titulo: formData.titulo,
      fecha: new Date().toLocaleDateString("es-PE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      abstract: formData.abstract,
      temas: [
        formData.area,
        formData.lineaInvestigacion,
        ...formData.palabrasClave
          .split(",")
          .map((p) => p.trim())
          .filter((p) => p !== ""),
      ],
    };

    agregarTrabajo(nuevoTrabajo);
    alert("Trabajo guardado correctamente");
    navigate("/pantalla-principal");
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#ff7f00", marginBottom: "20px" }}>
        Registrar nuevo trabajo
      </h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Título:
          <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required style={inputStyle} />
        </label>
        <label>
          Abstract:
          <textarea name="abstract" value={formData.abstract} onChange={handleChange} required rows="4" style={inputStyle} />
        </label>
        <label>
          Área:
          <input type="text" name="area" value={formData.area} onChange={handleChange} required style={inputStyle} />
        </label>
        <label>
          Línea de investigación:
          <input type="text" name="lineaInvestigacion" value={formData.lineaInvestigacion} onChange={handleChange} required style={inputStyle} />
        </label>
        <label>
          Palabras clave (separadas por coma):
          <input type="text" name="palabrasClave" value={formData.palabrasClave} onChange={handleChange} required style={inputStyle} />
        </label>
        <button type="submit" style={buttonStyle}>Guardar</button>
      </form>
    </div>
  );
}

const containerStyle = {
  maxWidth: "700px",
  margin: "40px auto",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 0 20px rgba(255,127,0,0.3)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#fcf5e9",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px",
  backgroundColor: "#ffffff",
  color: "#000000",
};

const buttonStyle = {
  backgroundColor: "#ff7f00",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: "25px",
  fontWeight: "700",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};
