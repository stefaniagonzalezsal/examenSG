import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Inicio(){
    
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "stefaniags" && password === "1234") {
            navigate("/home");
        } else {
          alert("Nombre de usuario o contraseña incorrectos.");
        }
      };
    return(
        <div className="container">
        <h2>Acceso</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  }
    

export default Inicio