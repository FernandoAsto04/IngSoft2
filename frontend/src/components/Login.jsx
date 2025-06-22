import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Por favor ingresa el correo y la contraseña.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3002/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      onLogin(data.usuario);
      alert("Inicio de sesión exitoso");
    } else {
      alert(data.mensaje || "Error al iniciar sesión");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
  }
};
  
    return (
      <div className="pagina-login">
      <div className="login-box">
        <img src="/img/Universidad_de_Lima_logo.png" alt="Logo Ulima" className="logo" />

        <form onSubmit={handleSubmit}>
          <label>Correo Ulima</label>
          <input
            type="email"
            placeholder="ejemplo@ulima.edu.pe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      <style jsx>{`
        .pagina-login {
          background-image: url("/img/fondo2.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        label {
          color: black;
          font-weight: bold;
        }

        .login-box {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          border-radius: 8px;
        }

        .logo {
          width: 150px;
          margin-bottom: 10px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          text-align: left;
        }

        input {
          padding: 10px;
          font-size: 16px;
          border: none;
          border-bottom: 2px solid #ccc;
          outline: none;
        }

        input:focus {
          border-bottom: 2px solid #ff6600;
        }

        button {
          margin-top: 20px;
          padding: 10px;
          background-color: transparent;
          color: black;
          border: 1px solid black;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          background-color: #f0f0f0;
        }

        .link_olvidarcontraseña {
          display: block;
          margin-top: 30px;
          font-size: 0.9em;
          text-align: center;
          color: gray;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Login;
