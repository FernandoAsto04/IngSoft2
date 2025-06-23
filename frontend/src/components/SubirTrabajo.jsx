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
    archivo: null,
    estado: "En proceso",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "archivo") {
      setFormData((prev) => ({ ...prev, archivo: files[0] }));
    }else{
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
      archivo: formData.archivo,
      estado: formData.estado,
    };

    agregarTrabajo(nuevoTrabajo);
    alert("Trabajo guardado correctamente");
    navigate("/");
  };

  return (
    <div style={paginaStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: "#000", marginBottom: "20px", textAlign: "center", fontWeight: "700", fontSize: "34px" }}>
          Registrar nuevo trabajo
        </h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>
            Adjuntar documento:
            <input
              type="file"
              name="archivo"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              style={inputStyle}
              />
          </label>
          <label style={labelStyle}>
            Título:
            <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Abstract:
            <textarea name="abstract" value={formData.abstract} onChange={handleChange} required rows="4" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Área:
            <input type="text" name="area" value={formData.area} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Línea de investigación:
            <input type="text" name="lineaInvestigacion" value={formData.lineaInvestigacion} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Palabras clave (separadas por coma):
            <input type="text" name="palabrasClave" value={formData.palabrasClave} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Estado:
            <select name="estado" value={formData.estado} onChange={handleChange} style={inputStyle}>
              <option value="En desarrollo">En desarrollo</option>
              <option value="Abandonado">Abandonado</option>
              <option value="Termiando ">Terminado</option>
            </select>
          </label>
          <button type="submit" style={buttonStyle}>Guardar</button>
        </form>
      </div>
    </div>
  );
}

// 💡 Estilos
const paginaStyle = {
  backgroundImage: 'url("/img/fondo2.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
};

const containerStyle = {
  width: "100%",
  maxWidth: "700px",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "15px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const labelStyle = {
  color: "#000",
  fontWeight: "bold",
  fontSize: "13px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "4px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  backgroundColor: "#fff",
  color: "#000",
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

