import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuscarTema() {
  const navigate = useNavigate();

  const ciclos = ["2024-1", "2023-2", "2023-1", "2022-2", "2022-1", "2021-2"];
  const años = ["2024", "2023", "2022", "2021"];
  const temas = [
    "Aplicaciones en inteligencia artificial",
    "Sistemas de TI",
    "Algoritmos y sistemas computacionales",
  ];

  const [selectedCiclos, setSelectedCiclos] = useState(new Set(ciclos));
  const [selectedAños, setSelectedAños] = useState(new Set(años));
  const [selectedTemas, setSelectedTemas] = useState(new Set(temas));

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
            A
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

          {/* Correo debajo del nombre */}
          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#fff",
              marginBottom: "15px",
              userSelect: "text",
            }}
          >
            20213456@aloe.ulima.edu.pe
          </p>

          <p style={{ fontWeight: "500", fontSize: "14px", color: "#fff" }}>
            Ingeniería de Sistemas
          </p>
        </div>

        {/* Botón Volver */}
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
          onClick={() => navigate("/resultemas")}
        >
          Buscar Tema
        </button>

        {/* Accordion: Ciclo académico */}
        <div
          style={{
            marginBottom: "20px",
            border: "2px solid #ff7f00",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => toggleMenu("ciclo")}
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
            Ciclo académico
            <span style={{ fontWeight: "900", fontSize: "20px" }}>
              {openMenu === "ciclo" ? "−" : "+"}
            </span>
          </button>
          {openMenu === "ciclo" && (
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
              {ciclos.map((ciclo) => (
                <label
                  key={ciclo}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCiclos.has(ciclo)}
                    onChange={() =>
                      toggleSelection(setSelectedCiclos, selectedCiclos, ciclo)
                    }
                  />
                  <span>{ciclo}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Accordion: Año */}
        <div
          style={{
            marginBottom: "20px",
            border: "2px solid #ff7f00",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => toggleMenu("año")}
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
            Año
            <span style={{ fontWeight: "900", fontSize: "20px" }}>
              {openMenu === "año" ? "−" : "+"}
            </span>
          </button>
          {openMenu === "año" && (
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
              {años.map((año) => (
                <label
                  key={año}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedAños.has(año)}
                    onChange={() =>
                      toggleSelection(setSelectedAños, selectedAños, año)
                    }
                  />
                  <span>{año}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Accordion: Tema */}
        <div
          style={{
            marginBottom: "20px",
            border: "2px solid #ff7f00",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => toggleMenu("tema")}
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
            Tema
            <span style={{ fontWeight: "900", fontSize: "20px" }}>
              {openMenu === "tema" ? "−" : "+"}
            </span>
          </button>
          {openMenu === "tema" && (
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
              {temas.map((tema) => (
                <label
                  key={tema}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedTemas.has(tema)}
                    onChange={() =>
                      toggleSelection(setSelectedTemas, selectedTemas, tema)
                    }
                  />
                  <span>{tema}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
