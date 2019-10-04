import React, { useState } from 'react';
import "./App.css";
import logo from "./assets/logo.svg";

import api from "./services/api";

function App() {
  const [email,setEmail] = useState("")

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(email)
    

  }
  
  const switchEmail = (event) =>{
    setEmail(event.target.value);
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
            onChange={switchEmail}
            placeholder="Seu melhor e-mail" />

          <button className="btn" type="submit">Entrar</button>

        </form>
      </div>
    </div>
  );
}

export default App;