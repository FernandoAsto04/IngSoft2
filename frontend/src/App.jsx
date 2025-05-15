import React, { useState } from "react";
import Login from "./components/Login";
import PantallaPrincipal from "./components/PantallaPrincipal";

function App() {
  const [logueado, setLogueado] = useState(false);

  return (
    <div>
      {logueado ? (
        <PantallaPrincipal onLogout={() => setLogueado(false)} />
      ) : (
        <Login onLogin={() => setLogueado(true)} />
      )}
    </div>
  );
}

export default App;
