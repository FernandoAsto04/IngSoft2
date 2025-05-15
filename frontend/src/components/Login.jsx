import React, { useState } from "react";
import "../Login.css";
import logoULima from "../img/Universidad_de_Lima_logo.png";

const Login = ({ onLogin }) => {
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codigo && password) {
      onLogin();
    } else {
      alert("Por favor ingresa código y contraseña.");
    }
  };

  return (
    <div className="pagina-login">
      <div className="login-box">
        <img src={logoULima} alt="Logo Ulima" className="logo" />

        <form onSubmit={handleSubmit}>
          <label>Código del alumno</label>
          <input
            type="text"
            placeholder="Código"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Iniciar sesión</button>
        </form>
        <a href="#" className="link_olvidarcontraseña">
          ¿Ha olvidado su contraseña?
        </a>
      </div>
    </div>
  );
};

export default Login;
