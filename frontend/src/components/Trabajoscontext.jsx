// TrabajosContext.jsx
import React, { createContext, useContext, useState } from "react";

const TrabajosContext = createContext();

export function useTrabajos() {
  return useContext(TrabajosContext);
}

export function TrabajosProvider({ children }) {
  const [trabajos, setTrabajos] = useState([
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
      temas: [
        "Tecnologías y Gestión organizacional",
        "Minería de procesos, Simulación de procesos, Computación Aplicada",
      ],
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
  ]);

  const agregarTrabajo = (trabajo) => {
    setTrabajos((prev) => [trabajo, ...prev]);
  };

  return (
    <TrabajosContext.Provider value={{ trabajos, agregarTrabajo }}>
      {children}
    </TrabajosContext.Provider>
  );
}
