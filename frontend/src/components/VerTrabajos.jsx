import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerTrabajos } from "../../Service/trabajoService.js";

export default function VerTrabajos() {
  const [trabajos, setTrabajos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarTrabajos = async () => {
      try {
        const datos = await obtenerTrabajos();
        setTrabajos(datos);
      } catch (error) {
        console.error("Error al obtener trabajos:", error.message);
      }
    };
    cargarTrabajos();
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: "40px 60px",
        backgroundColor: "#fcf5e9",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Botón de retroceso */}
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#5f2f80",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "30px",
          cursor: "pointer",
          boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        ⬅️ Volver
      </button>

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#111111",
          marginBottom: "40px",
        }}
      >
        Trabajos disponibles
      </h1>

      {trabajos.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>
          No hay trabajos disponibles.
        </p>
      ) : (
        trabajos.map((trabajo) => (
          <div
            key={trabajo.id}
            style={{
              backgroundColor: "#fff2e0",
              borderRadius: "15px",
              padding: "25px 30px",
              marginBottom: "30px",
              boxShadow: "0 0 20px rgba(255, 127, 0, 0.15)",
              color: "#763200",
              position: "relative",
              width: "100%",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "#9c3a10",
                color: "white",
                padding: "6px 16px",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {new Date(trabajo.fecharegistro).toLocaleDateString("es-PE")}
            </span>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                margin: "0 0 10px 0",
              }}
            >
              {trabajo.titulo}
            </h2>

            <p
              style={{
                fontSize: "15px",
                marginBottom: "10px",
                color: "#6f4b30",
              }}
            >
              {trabajo.descripcion}
            </p>

            <p><strong>Área:</strong> {trabajo.area?.nombre || "N/A"}</p>
            <p><strong>Tipo:</strong> {trabajo.tipo?.nombre || "N/A"}</p>
            <p><strong>Estado:</strong> {trabajo.estado?.nombre || "N/A"}</p>
            <p><strong>Palabras clave:</strong> {trabajo.palabrasclave || "N/A"}</p>
            <p><strong>Ciclo:</strong> {trabajo.ciclo}</p>
            <p><strong>Observaciones:</strong> {trabajo.observaciones || "Sin observaciones"}</p>
          </div>
        ))
      )}
    </div>
  );
}
