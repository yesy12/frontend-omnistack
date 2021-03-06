import React, { useState } from "react";

import api from "../../services/api";


const Login = ({history}) => {
    const [email,setEmail] = useState("")

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        const response = await api.post("/users",{
          email
        })
    
        const { _id } = response.data;
        
        localStorage.setItem("user",_id);
    
        history.push("/dashboard");
      }
      
      const switchEmail = (event) =>{
        setEmail(event.target.value);
      } 

    return (
        <>
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
                value={email}
                onChange={switchEmail}
                placeholder="Seu melhor e-mail" />

                <button className="btn" type="submit">Entrar</button>

            </form>
      </>
    )
}

export default Login;