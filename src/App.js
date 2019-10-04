import React from 'react';
import "./App.css";
import logo from "./assets/logo.svg";

import api from "./services/api";

import Routes from "./Routes";

function App() {
  


  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;