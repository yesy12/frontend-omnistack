import React from 'react';
import "./App.css";
import logo from "./assets/logo.svg";

import api from "./services/api";

function App() {

  const handleSubmit = (event) =>{
    event.preventDefault;
    console.log("HEllo world")
  }
  


  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>

      <div className="content">
        <p> 
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> 
            E-MAIL *
          </label>

          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Seu melhor e-mail" />

          <button className="btn" type="submit">Entrar</button>

        </form>
      </div>
    </div>
  );
}

export default App;