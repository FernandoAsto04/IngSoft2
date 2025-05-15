import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import PantallaPrincipal from "./components/PantallaPrincipal";
import BuscarTema from "./components/BuscarTema";

function App() {
  const [logueado, setLogueado] = useState(false);

  if (!logueado) {
    return <Login onLogin={() => setLogueado(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PantallaPrincipal onLogout={() => setLogueado(false)} />} />
        <Route path="/buscar-tema" element={<BuscarTema />} />
        {/* Si no hay coincidencia redirigir a "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
