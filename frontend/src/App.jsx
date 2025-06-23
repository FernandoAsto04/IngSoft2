import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import PantallaPrincipal from "./components/PantallaPrincipal";
import BuscarTema from "./components/BuscarTema";
import BuscarProfesor from "./components/BuscaProfesor";
import ListaProfesores from "./components/ResultProfe";
import ListaTemas from "./components/ResultTema";
import FormularioTrabajo from "./components/SubirTrabajo";
import { TrabajosProvider } from "./components/Trabajoscontext";
import ListaAsesorias from "./components/listaAsesoria";


function App() {
  const [usuario, setUsuario] = useState(() => {
    const guardado = localStorage.getItem("usuario");
    return guardado ? JSON.parse(guardado) : null;
  });
  const [logueado, setLogueado] = useState(!!usuario);

  if (!logueado) {
    return (
      <Login 
        onLogin={(usuarioRecibido) => {
          setUsuario(usuarioRecibido);
          setLogueado(true);  
        }}
      />
    );
  }

  return (
    <TrabajosProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
            <PantallaPrincipal 
              onLogout={() => {
                setLogueado(false);
                setUsuario(null);
                localStorage.removeItem("usuario");
              }}
              usuario={usuario}
            />
          }
        />
          {/* Rutas para las diferentes funcionalidades */}  
          <Route path="/buscarprofe" element={<BuscarProfesor usuario={usuario}/>} />
          <Route path="/buscar-tema" element={<BuscarTema usuario={usuario}/>} />
          <Route path="/resultprofes" element={<ListaProfesores />} />
          <Route path="/resultemas" element={<ListaTemas />} />
          <Route path="/nuevotrabajo" element={<FormularioTrabajo />} />
          <Route path="/listaAsesorias" element={<ListaAsesorias/>} />
          {/* Si no hay coincidencia redirigir a "/" */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </TrabajosProvider>
  );
}

export default App;
