import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResultProfesores({ usuario }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    const fetchProfesores = async () => {
      if (!state?.lineaIds?.length) return;

      try {
        const res = await axios.post("http://localhost:3002/profesores/lineas", {
          lineaIds: state.lineaIds,
        });
        setProfesores(res.data);
      } catch (error) {
        console.error("Error al obtener profesores:", error);
      }
    };

    fetchProfesores();
  }, [state]);

  return (
    <div
      style={{
        backgroundImage: 'url("/img/fondo2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        padding: "30px 20px",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "280px",
          backgroundColor: "rgba(255,127,0,0.95)",
          borderRadius: "25px",
          padding: "30px 20px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 0 15px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ff7f00",
              fontWeight: "900",
              fontSize: "42px",
              userSelect: "none",
              margin: "0 auto",
            }}
          >
            {usuario?.nombres?.charAt(0) || "?"}
          </div>

          <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "1.2" }}>
            {usuario?.nombres} <br /> {usuario?.apellidos}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px" }}>
            {usuario?.email}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "500" }}>Ingeniería de Sistemas</p>
        </div>

        <button
          onClick={() => navigate("/buscarprofe")}
          style={{
            backgroundColor: "#fff",
            color: "#ff7f00",
            padding: "12px 25px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            marginTop: "30px",
            width: "100%",
          }}
        >
          Nueva búsqueda
        </button>
      </aside>

      {/* Resultados */}
      <main
        style={{
          flex: 1,
          marginLeft: "40px",
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: "30px 40px",
          borderRadius: "20px",
          overflowY: "auto",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          color: "#000",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "25px",
            backgroundColor: "rgba(255,255,255,0.85)",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          PROFESORES ENCONTRADOS
        </h2>

        {profesores.filter(p => p.Usuario).length === 0 ? (
          <p
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "20px",
              borderRadius: "12px",
              border: "2px solid #ff7f00",
              textAlign: "center",
            }}
          >
            No se encontraron profesores para las líneas seleccionadas.
          </p>
        ) : (
          profesores
            .filter((prof) => prof.Usuario)
            .map((prof) => (
              <div
                key={prof.id}
                style={{
                  backgroundColor: "#fff",
                  padding: "20px 24px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  marginBottom: "20px",
                  borderLeft: "6px solid #ff7f00",
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  {prof.Usuario.nombres} {prof.Usuario.apellidos}
                </h3>
                <p><b>Correo:</b> {prof.Usuario.email}</p>
                <p><b>Líneas:</b>{" "}
                  {prof.AreasAsignadas?.[0]?.Lineas?.map(l => l.nombre).join(", ") || "—"}
                </p>
                <p><b>Horario:</b> {prof.Asesorias?.[0]?.horario || "—"}</p>
                <p><b>Lugar:</b> {prof.Asesorias?.[0]?.lugar || "—"}</p>
                <p><b>Link de asesoría:</b>{" "}
                  {prof.Asesorias?.[0]?.link ? (
                    <a href={prof.Asesorias[0].link} target="_blank" rel="noreferrer">
                      {prof.Asesorias[0].link}
                    </a>
                  ) : "—"}
                </p>
              </div>
            ))
        )}
      </main>
    </div>
  );
}
