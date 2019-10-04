import React, { useState } from "react";
import camera from "../../assets/camera.svg"

import "./style.css";

const New = () => {
    const [company,setCompany ] = useState("");
    const [techs,setTechs] = useState("");
    const [price,setPrice] = useState("");

    const handleSubmit = () => {

    }


    const setCompanyInfo = ( event ) => {
        setCompany(event.targer.value);
    }

    const setTechsInfo = ( event ) => {
        setTechs(event.targer.value);
    }

    const setPriceInfo = ( event ) => {
        setPrice(event.targer.value);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label id="thumbnail">
                    <input type="file" />
                    <img src={camera} alt="Select img" />
                </label>

                <label htmlFor="company"> EMPRESA *</label>
                <input 
                    type="text" 
                    id="company" 
                 placeholder="Sua empresa incrível"
                   value={company}
                   onChange={setCompanyInfo}
                />

                <label htmlFor="techs"> 
                    Tecnologias *  
                    <span>
                        (separadas por vírgula) 
                    </span>
                </label>
                <input 
                    type="text" 
                    id="techs" 
                    placeholder="Quais tecnlogias usam?"
                    value={techs}
                    onChange={setTechsInfo}
                />

                <label htmlFor="price">
                    VALOR DA DIÁRIA 
                    <span>
                        (em branco para GRATUITO) 
                    </span>
                </label>
                <input 
                  type="text" 
                    id="company" 
                    placeholder="Valor cobrado por dia"
                    value={price}
                    onChange={setPriceInfo}
                />

                <button type="submit" className="btn"> Cadastrar</button>

            </form>
        </>
    )
}

export default New;