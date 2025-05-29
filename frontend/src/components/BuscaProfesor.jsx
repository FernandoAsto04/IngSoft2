import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuscarProfesor() {
  const navigate = useNavigate();

  const especialidades = [
    "Tecnologías y Gestión organizacional",
    "Aplicaciones en inteligencia artificial",
    "Interacción Humano-media",
    "Algoritmos y sistemas computacionales",
  ];

  const experiencias = [
    "Docente Universitario",
    "Investigador",
    "Consultor",
    "Desarrollador de Software",
  ];

  const [selectedEspecialidades, setSelectedEspecialidades] = useState(new Set(especialidades));
  const [selectedExperiencias, setSelectedExperiencias] = useState(new Set(experiencias));

  const [openMenu, setOpenMenu] = useState(null);

  function toggleSelection(setter, selectedSet, value) {
    const newSet = new Set(selectedSet);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setter(newSet);
  }

  function toggleMenu(menuName) {
    setOpenMenu(openMenu === menuName ? null : menuName);
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        gap: "40px",
        color: "#000",
      }}
    >
      {/* Sidebar (igual que antes) */}
      <aside
        style={{
          width: "280px",
          backgroundColor: "#ff7f00",
          borderRadius: "25px",
          padding: "30px",
          fontWeight: "700",
          fontSize: "18px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 0 15px rgba(255,127,0,0.7)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ff7f00",
              fontWeight: "900",
              fontSize: "50px",
              userSelect: "none",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            P
          </div>

          <p
            style={{
              marginBottom: "6px",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.2",
              userSelect: "text",
            }}
          >
            Fernando Jesús <br /> Asto Mallqui
          </p>

          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#fff",
              marginBottom: "15px",
              userSelect: "text",
            }}
          >
            fernando.asto@ulima.edu.pe
          </p>

          <p style={{ fontWeight: "500", fontSize: "14px", color: "#fff" }}>
            Ingeniería de Sistemas
          </p>
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

      {/* Main filtros */}
      <main
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 0 20px rgba(255,127,0,0.3)",
          maxWidth: "700px",
        }}
      >
        <button
          style={{
            backgroundColor: "#ff7f00",
            color: "#000",
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "700",
            fontSize: "16px",
            marginBottom: "20px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(255,127,0,0.8)",
            userSelect: "none",
          }}
          onClick={() => navigate("/resultprofes")}
        >
          Buscar Profesor
        </button>

        {/* Accordion: Especialidad */}
        <div
          style={{
            marginBottom: "20px",
            border: "2px solid #ff7f00",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => toggleMenu("especialidad")}
            style={{
              width: "100%",
              backgroundColor: "#ff7f00",
              color: "#000",
              padding: "12px 20px",
              fontWeight: "700",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            Especialidad
            <span style={{ fontWeight: "900", fontSize: "20px" }}>
              {openMenu === "especialidad" ? "−" : "+"}
            </span>
          </button>
          {openMenu === "especialidad" && (
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                color: "#000",
              }}
            >
              {especialidades.map((esp) => (
                <label
                  key={esp}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedEspecialidades.has(esp)}
                    onChange={() =>
                      toggleSelection(setSelectedEspecialidades, selectedEspecialidades, esp)
                    }
                  />
                  <span>{esp}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Accordion: Experiencia */}
        <div
          style={{
            marginBottom: "20px",
            border: "2px solid #ff7f00",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => toggleMenu("experiencia")}
            style={{
              width: "100%",
              backgroundColor: "#ff7f00",
              color: "#000",
              padding: "12px 20px",
              fontWeight: "700",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            Experiencia
            <span style={{ fontWeight: "900", fontSize: "20px" }}>
              {openMenu === "experiencia" ? "−" : "+"}
            </span>
          </button>
          {openMenu === "experiencia" && (
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                color: "#000",
              }}
            >
              {experiencias.map((exp) => (
                <label
                  key={exp}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedExperiencias.has(exp)}
                    onChange={() =>
                      toggleSelection(setSelectedExperiencias, selectedExperiencias, exp)
                    }
                  />
                  <span>{exp}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
