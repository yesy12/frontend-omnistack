import React, { useState, useMemo } from "react";
import api from "../../services/api";
import camera from "../../assets/camera.svg"

import "./style.css";


const New = ({ history }) => {
    const [company,setCompany ] = useState("");
    const [techs,setTechs] = useState("");
    const [price,setPrice] = useState("");
    const [thumbnail,setThumbnail] = useState(null);

    const preview = useMemo(() => {
        if(thumbnail){
            return URL.createObjectURL(thumbnail);
        }else{
            return null;
        }
        },[thumbnail]
    )

    const hasThumbnail = () => {
        if(thumbnail){
            return "hasThumbnail";
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem("user");

        data.append("thumbnail",thumbnail);
        data.append("techs",techs);
        data.append("price",price);
        data.append("company",company);

        await api.post("/spots",data,{
            headers : { user_id }
        })

        history.push("/dashboard");
    }


    const setCompanyInfo = ( event ) => {
        setCompany(event.target.value);
    }

    const setTechsInfo = ( event ) => {
        setTechs(event.target.value);
    }

    const setPriceInfo = ( event ) => {
        setPrice(event.target.value);
    }

    const setThumbnailInfo = ( event ) => {
        setThumbnail(event.target.files[0]);
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="post">
                <label id="thumbnail" style={{ 
                        backgroundImage : `url(${preview})` 
                    }}
                    className={hasThumbnail()}
                >
                    <input 
                        type="file" 
                        onChange={setThumbnailInfo} />
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