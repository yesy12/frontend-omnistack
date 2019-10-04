import React, { useState } from "react";

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


            </form>
        </>
    )
}

export default New;