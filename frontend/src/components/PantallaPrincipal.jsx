import React from "react";
import { useNavigate } from "react-router-dom";

const trabajos = [
  {
    titulo: "TRABAJO DE PRUEBA 1",
    fecha: "15 May 2025",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    temas: ["Tema", "Tema"],
  },
  {
    titulo: "TRABAJO DE PRUEBA 2",
    fecha: "12 May 2025",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    temas: ["Tema", "Tema"],
  },
];

export default function PantallaPrincipal({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          backgroundColor: "#f8f8f8",
          width: "280px",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "2px 0 10px rgb(0 0 0 / 0.1)",
        }}
      >
        <div>
          {/* User info */}
          <div
            style={{
              textAlign: "center",
              color: "#111111",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "2px solid #ff7f00",
                margin: "0 auto 15px auto",
                backgroundColor: "#5f2f80",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "38px",
                fontWeight: "bold",
              }}
            >
              {/* User icon silhouette */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="40px"
                height="40px"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            <p style={{ fontWeight: "700", fontSize: "18px", margin: "10px 0 6px 0" }}>
              Fernando Jesús <br /> Asto Mallqui
            </p>
            <p style={{ color: "#666", fontSize: "14px", margin: "4px 0" }}>
              fernando.asto@ulima.edu.pe
            </p>
            <p style={{ color: "#999", fontSize: "14px", marginTop: "4px" }}>
              Ingeniería de Sistemas
            </p>
          </div>
        </div>

        {/* Cerrar sesión button */}
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "#ff7f00",
            color: "black",
            fontWeight: "600",
            padding: "14px 24px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgb(255 127 0 / 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            width="22px"
            height="22px"
            style={{ marginRight: "8px" }}
          >
            <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z" />
          </svg>
          Cerrar sesión
        </button>
      </aside>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          padding: "50px 50px",
          backgroundColor: "#fcf5e9",
        }}
      >
        {/* Top buttons */}
        <div style={{ marginBottom: "40px", display: "flex", gap: "18px" }}>
          {[
            { icon: "🔍", label: "Buscar Profesor", onClick: () => {} },
            { icon: "🔍", label: "Buscar Tema", onClick: () => navigate("/buscar-tema") },
            { icon: "📊", label: "Ver estadísticas", onClick: () => {} },
            { icon: "📁", label: "Ver trabajos", onClick: () => {} },
          ].map(({ icon, label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              style={{
                backgroundColor: "#ff7f00",
                border: "none",
                borderRadius: "15px",
                padding: "10px 24px",
                boxShadow: "0 3px 8px rgb(255 127 0 / 0.8)",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "black",
              }}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </div>

        {/* Title */}
        <h2
          style={{
            fontWeight: "700",
            fontSize: "30px",
            marginBottom: "25px",
            color: "#111111",
          }}
        >
          Trabajos subidos recientemente...
        </h2>

        {/* List of trabajos */}
        {trabajos.map(({ titulo, fecha, abstract, temas }) => (
          <section
            key={titulo}
            style={{
              backgroundColor: "#fff2e0",
              boxShadow: "0 0 20px rgb(255 127 0 / 0.15)",
              borderRadius: "15px",
              padding: "25px 40px",
              marginBottom: "30px",
              color: "#763200",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "14px",
              }}
            >
              <h3 style={{ fontWeight: "700", fontSize: "20px", margin: 0 }}>
                {titulo}
              </h3>
              <span
                style={{
                  backgroundColor: "#9c3a10",
                  color: "white",
                  borderRadius: "15px",
                  padding: "8px 18px",
                  fontWeight: "600",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  alignSelf: "center",
                }}
              >
                {fecha}
              </span>
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.4",
                marginBottom: "15px",
                color: "#6f4b30",
              }}
            >
              Abstract <br />
              {abstract}
            </p>
            {temas.map((tema, i) => (
              <p
                key={i}
                style={{ fontWeight: "700", fontSize: "15px", margin: "2px 0" }}
              >
                {tema}
              </p>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
