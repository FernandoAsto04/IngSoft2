import React, { useEffect, useState } from "react";
import { obtenerTrabajos } from "../../Service/trabajoService";
import { useNavigate } from "react-router-dom";

export default function VerTrabajos() {
  const [trabajos, setTrabajos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarTrabajos = async () => {
      try {
        const data = await obtenerTrabajos();
        if (!Array.isArray(data)) {
          throw new Error("El backend no devolvió una lista de trabajos.");
        }
        setTrabajos(data);
      } catch (error) {
        console.error("Error al cargar trabajos:", error.message);
        setTrabajos([]);
      } finally {
        setCargando(false);
      }
    };

    cargarTrabajos();
  }, []);

  return (
    <div style={paginaStyle}>
      <div style={contenedorStyle}>
        <h2 style={tituloStyle}>Lista de Trabajos</h2>

        <button onClick={() => navigate(-1)} style={botonVolverStyle}>
          ⬅ Volver
        </button>

        {cargando ? (
          <p style={mensajeStyle}>Cargando trabajos...</p>
        ) : trabajos.length === 0 ? (
          <p style={mensajeStyle}>No se encontraron trabajos registrados.</p>
        ) : (
          <div style={listaStyle}>
            {trabajos.map((trabajo) => (
              <div key={trabajo.id} style={tarjetaStyle}>
                <h3 style={trabajoTitulo}>{trabajo.titulo}</h3>
                <p><strong>Descripción:</strong> {trabajo.descripcion}</p>
                <p><strong>Ciclo:</strong> {trabajo.ciclo}</p>
                <p><strong>Palabras clave:</strong> {trabajo.palabrasclave}</p>
                <p><strong>Área:</strong> {trabajo.area?.nombre || "Sin área"}</p>
                <p><strong>Tipo:</strong> {trabajo.tipo?.nombre || "Sin tipo"}</p>
                <p><strong>Estado:</strong> {trabajo.estado?.nombre || "Sin estado"}</p>
              </div>
            ))}
          </div>
        )}
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

const contenedorStyle = {
  width: "100%",
  maxWidth: "900px",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const tituloStyle = {
  textAlign: "center",
  fontSize: "32px",
  color: "#333",
  marginBottom: "20px",
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

const mensajeStyle = {
  fontSize: "18px",
  textAlign: "center",
  marginTop: "20px",
};

const listaStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "20px",
};

const tarjetaStyle = {
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};

const trabajoTitulo = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};
