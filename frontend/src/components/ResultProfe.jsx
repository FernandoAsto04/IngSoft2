import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const profesoresData = [
  {
    nombre: "Dr. Ana Pérez",
    email: "ana.perez@ulima.edu.pe",
    departamento: "Ingeniería de Sistemas",
    especialidades: ["Inteligencia Artificial", "Machine Learning"],
  },
  {
    nombre: "Ing. Carlos Ramírez",
    email: "carlos.ramirez@ulima.edu.pe",
    departamento: "Ingeniería Industrial",
    especialidades: ["Optimización", "Gestión de Proyectos"],
  },
  {
    nombre: "Dra. María López",
    email: "maria.lopez@ulima.edu.pe",
    departamento: "Ciencias de la Computación",
    especialidades: ["Algoritmos", "Bases de Datos"],
  },
];

// Extraemos especialidades y departamentos únicos para filtros
const allEspecialidades = Array.from(
  new Set(profesoresData.flatMap((p) => p.especialidades))
);
const allDepartamentos = Array.from(
  new Set(profesoresData.map((p) => p.departamento))
);

export default function ListaProfesores() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(null);
  const [selectedEspecialidades, setSelectedEspecialidades] = useState(
    new Set(allEspecialidades)
  );
  const [selectedDepartamentos, setSelectedDepartamentos] = useState(
    new Set(allDepartamentos)
  );

  // Toggle menú acordeón
  function toggleMenu(menuName) {
    setOpenMenu(openMenu === menuName ? null : menuName);
  }

  // Toggle selección filtros
  function toggleSelection(setter, selectedSet, value) {
    const newSet = new Set(selectedSet);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setter(newSet);
  }

  // Filtrar profesores según selección
  const profesoresFiltrados = profesoresData.filter(
    (p) =>
      p.especialidades.some((e) => selectedEspecialidades.has(e)) &&
      selectedDepartamentos.has(p.departamento)
  );

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
      {/* Sidebar */}
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

      {/* Main contenido */}
      <main
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 0 20px rgba(255,127,0,0.3)",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Botón Buscar (podrías conectar con ruta resultados) */}
        <button
          onClick={() => navigate("/resulprofes")}
          style={{
            backgroundColor: "#ff7f00",
            color: "#000",
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(255,127,0,0.8)",
            userSelect: "none",
            alignSelf: "flex-start",
          }}
        >
          Buscar Profesor
        </button>

        

        {/* Lista filtrada de profesores */}
        <section>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "24px",
              marginBottom: "16px",
              color: "#ff7f00",
            }}
          >
            Profesores encontrados ({profesoresFiltrados.length})
          </h2>

          {profesoresFiltrados.length === 0 && (
            <p>No se encontraron profesores con esos filtros.</p>
          )}

          {profesoresFiltrados.map(({ nombre, email, departamento, especialidades }) => (
            <article
              key={nombre}
              style={{
                borderBottom: "1px solid #ff7f00",
                padding: "12px 0",
              }}
            >
              <p style={{ fontWeight: "700", fontSize: "18px" }}>{nombre}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>{email}</p>
              <p style={{ fontSize: "14px", color: "#777" }}>
                <b>Departamento:</b> {departamento}
              </p>
              <p style={{ fontSize: "14px", color: "#777" }}>
                <b>Especialidades:</b> {especialidades.join(", ")}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
