import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import PantallaPrincipal from "./components/PantallaPrincipal";
import BuscarTema from "./components/BuscarTema";
import BuscarProfesor from "./components/BuscaProfesor";
import ListaProfesores from "./components/ResultProfe";

function App() {
  const [logueado, setLogueado] = useState(false);

  if (!logueado) {
    return <Login onLogin={() => setLogueado(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PantallaPrincipal onLogout={() => setLogueado(false)} />} />
        <Route path="/buscarprofe" element={<BuscarProfesor />} />  
        <Route path="/buscar-tema" element={<BuscarTema />} />
        <Route path="/resultprofes" element={<ListaProfesores/>} />
        {/* Si no hay coincidencia redirigir a "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
