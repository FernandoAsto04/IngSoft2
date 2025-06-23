import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuscarTema({ usuario }) {
  const navigate = useNavigate();

  const ciclos = ["2024-1", "2023-2", "2023-1", "2022-2", "2022-1", "2021-2"];
  const temas = [
    "Aplicaciones en inteligencia artificial",
    "Sistemas de TI",
    "Algoritmos y sistemas computacionales",
  ];

  const [selectedCiclos, setSelectedCiclos] = useState(new Set());
  const [selectedTemas, setSelectedTemas] = useState(new Set());

  const [menuCicloAbierto, setMenuCicloAbierto] = useState(false);
  const [menuTemaAbierto, setMenuTemaAbierto] = useState(false);

  function toggleSelection(setter, selectedSet, value) {
    const newSet = new Set(selectedSet);
    newSet.has(value) ? newSet.delete(value) : newSet.add(value);
    setter(newSet);
  }

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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  }}
>
  <div
    style={{
      width: "100px",
      height: "100px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ff7f00",
      fontWeight: "900",
      fontSize: "48px",
      userSelect: "none",
      textTransform: "uppercase",
    }}
  >
    <span>{usuario.nombres?.charAt(0) || "?"}</span>
  </div>
</div>


          <p style={{ fontSize: "18px", fontWeight: "700", lineHeight: "1.2" }}>
            {usuario.nombres} <br /> {usuario.apellidos}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px" }}>
            {usuario.email}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "500" }}>Ingeniería de Sistemas</p>
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
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            marginTop: "30px",
            width: "100%",
          }}
        >
          Volver
        </button>
      </aside>
      {/* Main */}
      <main
        style={{
          flex: 1,
          marginLeft: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          color: "#000",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "25px",
            backgroundColor: "rgba(255,255,255,0.85)",
            borderRadius: "15px",
            padding: "16px",
          }}
        >
          BUSCAR TRABJO POR TEMA
        </h2>

        <button
          onClick={() => navigate("/resultemas")}
          style={{
            backgroundColor: "#ff7f00",
            color: "#000",
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            fontWeight: "700",
            fontSize: "16px",
            marginBottom: "24px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(255,127,0,0.8)",
            alignSelf: "center",
          }}
        >
          Buscar Tema
        </button>

        {/* Ciclo académico */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "12px",
            border: "2px solid #ff7f00",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => setMenuCicloAbierto((prev) => !prev)}
            style={{
              width: "100%",
              backgroundColor: "#ff7f00",
              color: "#000",
              padding: "12px 20px",
              fontWeight: "700",
              fontSize: "16px",
              border: "none",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            Ciclo académico
            <span>{menuCicloAbierto ? "−" : "+"}</span>
          </button>
          {menuCicloAbierto && (
            <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {ciclos.map((ciclo) => (
                <label key={ciclo} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={selectedCiclos.has(ciclo)}
                    onChange={() => toggleSelection(setSelectedCiclos, selectedCiclos, ciclo)}
                  />
                  {ciclo}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Tema */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "12px",
            border: "2px solid #ff7f00",
          }}
        >
          <button
            onClick={() => setMenuTemaAbierto((prev) => !prev)}
            style={{
              width: "100%",
              backgroundColor: "#ff7f00",
              color: "#000",
              padding: "12px 20px",
              fontWeight: "700",
              fontSize: "16px",
              border: "none",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            Tema
            <span>{menuTemaAbierto ? "−" : "+"}</span>
          </button>
          {menuTemaAbierto && (
            <div
              style={{
                padding: "18px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "rgba(255,255,255,0.9)",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              {temas.map((tema) => (
                <label key={tema} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={selectedTemas.has(tema)}
                    onChange={() => toggleSelection(setSelectedTemas, selectedTemas, tema)}
                  />
                  {tema}
                </label>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
