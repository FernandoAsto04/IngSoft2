import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const temasData = [
  {
    titulo: "Optimización de Algoritmos para la Solución de Problemas Computacionales",
    fecha: "15 May 2025",
    abstract:
      "Este trabajo presenta un enfoque para el diseño y optimización de algoritmos aplicados a la resolución de problemas complejos en sistemas computacionales.",
    temas: ["Algoritmos y sistemas computacionales", "Diseño de algoritmos"],
  },
  {
    titulo: "Aplicación de Minería y Simulación de Procesos en la Gestión Organizacional",
    fecha: "12 May 2025",
    abstract:
      "El estudio explora cómo las tecnologías emergentes y la minería de procesos pueden mejorar la toma de decisiones dentro de las organizaciones.",
    temas: ["Tecnologías y Gestión organizacional", "Minería de procesos", "Computación Aplicada"],
  },
  {
    titulo: "Estrategias para la Sostenibilidad en Sistemas de Tecnologías de Información",
    fecha: "12 May 2025",
    abstract:
      "Este trabajo analiza el impacto ambiental de los sistemas de TI y propone estrategias sostenibles para su desarrollo y operación.",
    temas: ["Sistemas de TI", "Sostenibilidad en TI"],
  },
  {
    titulo: "Diseño de Interfaces para la Mejora de la Experiencia Humano-Computadora",
    fecha: "12 May 2025",
    abstract:
      "El presente estudio se enfoca en la interacción humano-media y el diseño centrado en el usuario.",
    temas: ["Interacción Humano-media", "HCI (Interacción Humano-Computadora)"],
  },
];

// Temas únicos para filtros
const allTemas = Array.from(
  new Set(temasData.flatMap((t) => t.temas))
);

export default function ListaTemas() {
  const navigate = useNavigate();

  const [selectedTemas, setSelectedTemas] = useState(new Set(allTemas));

  function toggleTema(value) {
    const newSet = new Set(selectedTemas);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setSelectedTemas(newSet);
  }

  const temasFiltrados = temasData.filter((t) =>
    t.temas.some((tema) => selectedTemas.has(tema))
  );

  return (
    <div style={{
      backgroundColor: "#fff",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      gap: "40px",
      color: "#000",
    }}>
      {/* Sidebar */}
      <aside style={{
        width: "280px",
        backgroundColor: "#ff7f00",
        borderRadius: "25px",
        padding: "30px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 0 15px rgba(255,127,0,0.7)"
      }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>Filtrar por tema</h2>
          {allTemas.map((tema) => (
            <div key={tema} style={{ marginBottom: "10px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedTemas.has(tema)}
                  onChange={() => toggleTema(tema)}
                  style={{ marginRight: "8px" }}
                />
                {tema}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#fff",
            color: "#ff7f00",
            padding: "12px 25px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(255,127,0,0.7)",
            userSelect: "none",
            marginTop: "30px",
            alignSelf: "stretch",
          }}
        >
          Volver
        </button>
      </aside>

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0 0 20px rgba(255,127,0,0.3)",
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}>
        <h2 style={{
          fontWeight: "700",
          fontSize: "24px",
          marginBottom: "16px",
          color: "#ff7f00",
        }}>
          Temas encontrados ({temasFiltrados.length})
        </h2>

        {temasFiltrados.length === 0 && (
          <p>No se encontraron temas con esos filtros.</p>
        )}

        {temasFiltrados.map(({ titulo, fecha, abstract, temas }) => (
          <article
            key={titulo}
            style={{
              borderBottom: "1px solid #ff7f00",
              padding: "12px 0",
            }}
          >
            <p style={{ fontWeight: "700", fontSize: "18px" }}>{titulo}</p>
            <p style={{ fontSize: "14px", color: "#777" }}>
              <b>Fecha:</b> {fecha}
            </p>
            <p style={{ fontSize: "14px", color: "#555" }}>{abstract}</p>
            <p style={{ fontSize: "14px", color: "#777" }}>
              <b>Temas:</b> {temas.join(", ")}
            </p>
          </article>
        ))}
      </main>
    </div>
  );
}
