import React from 'react';
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="containter">
      <img src={logo} alt="AirCnc"/>

      <div className="content">
        <p> 
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form>
          <label htmlFor="email"> 
            E-Mail *
          </label>

          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Seu melhor e-mail" />

          <button type="submit">Entrar</button>

        </form>
      </div>
    </div>
  );
}

export default App;