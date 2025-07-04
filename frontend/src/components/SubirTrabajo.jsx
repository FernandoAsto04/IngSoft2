import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { crearTrabajo } from "../../Service/trabajoService";
import { obtenerAreas } from "../../Service/areaService";
import { obtenerLineas } from "../../Service/lineaService";

export default function FormularioTrabajo() {
  const navigate = useNavigate();
  const [areas, setAreas] = useState([]);
  const [lineas, setLineas] = useState([]);

  const [formData, setFormData] = useState({
    titulo: "",
    abstract: "",
    area: "",
    lineaInvestigacion: "",
    tipo: "1",
    palabrasClave: "",
    archivo: null,
    observaciones: "",
    ciclo: "2025-1",
    estado: "1",
  });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const areasBD = await obtenerAreas();
        const lineasBD = await obtenerLineas();
        setAreas(areasBD);
        setLineas(lineasBD);
      } catch (error) {
        alert("Error al cargar áreas o líneas: " + error.message);
      }
    };
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "archivo") {
      setFormData((prev) => ({ ...prev, archivo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trabajoParaEnviar = {
      titulo: formData.titulo,
      descripcion: formData.abstract,
      fecharegistro: new Date().toISOString(),
      observaciones: formData.observaciones,
      palabrasclave: formData.palabrasClave,
      ciclo: formData.ciclo,
      visible: true,
      Areaid: parseInt(formData.area),
      Estadoid: parseInt(formData.estado),
      Tipoid: parseInt(formData.tipo),
      Lineaid: parseInt(formData.lineaInvestigacion),
    };

    try {
      await crearTrabajo(trabajoParaEnviar);
      alert("Trabajo guardado correctamente");
      navigate("/");
    } catch (error) {
      alert("Error al guardar trabajo: " + error.message);
    }
  };

  return (
    <div style={paginaStyle}>
      <div style={containerStyle}>
        <h2 style={tituloStyle}>Registrar nuevo trabajo</h2>

        <button type="button" onClick={() => navigate(-1)} style={botonVolverStyle}>
          ⬅ Volver
        </button>

        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>
            Adjuntar documento:
            <input
              type="file"
              name="archivo"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
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

          <label style={labelStyle}>
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

          <label style={labelStyle}>
            Observaciones:
            <textarea
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              rows="3"
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
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

          <label style={labelStyle}>
            Ciclo:
            <input
              type="text"
              name="ciclo"
              value={formData.ciclo}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            Área:
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Seleccione un área</option>
              {areas.map((area) => (
                <option key={area.id} value={area.id}>{area.nombre}</option>
              ))}
            </select>
          </label>

          <label style={labelStyle}>
            Línea de investigación:
            <select
              name="lineaInvestigacion"
              value={formData.lineaInvestigacion}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Seleccione una línea</option>
              {lineas.map((linea) => (
                <option key={linea.id} value={linea.id}>{linea.nombre}</option>
              ))}
            </select>
          </label>

          <label style={labelStyle}>
            Tipo:
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="1">Tesis</option>
              <option value="2">Proyecto</option>
              <option value="3">Investigación</option>
            </select>
          </label>

          <label style={labelStyle}>
            Estado:
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="1">En desarrollo</option>
              <option value="2">Abandonado</option>
              <option value="3">Terminado</option>
            </select>
          </label>

          <button type="submit" style={buttonStyle}>Guardar</button>
        </form>
      </div>
    </div>
  );
}

// 🎨 Estilos
const paginaStyle = {
  backgroundImage: 'url("/img/fondo2.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  padding: "40px 20px",
  overflowY: "auto",
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

const tituloStyle = {
  color: "#000",
  marginBottom: "20px",
  textAlign: "center",
  fontWeight: "700",
  fontSize: "34px",
};

const botonVolverStyle = {
  backgroundColor: "#ccc",
  color: "#000",
  padding: "8px 16px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  marginBottom: "20px",
  alignSelf: "flex-start",
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
