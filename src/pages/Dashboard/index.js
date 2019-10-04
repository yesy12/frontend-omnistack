import React, { useEffect,useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
    const [spots,setSpots] = useState([])

    useEffect(()=>{
        const loadSpots = async () =>{
            const user_id = localStorage.getItem("user");
            const response = await api.get("/dashboard",{
                headers : { user_id }
            })
            setSpots(response.data)
        }

        loadSpots();
    },[])

    const renderSpot = (value) =>{
        return (
            <li key={value._id}>
                <header style={{
                    backgroundImage : `url(${value.thumbnail_url})`
                }} />
                <strong>
                    {value.company}
                </strong>
                <span>
                    {value.price ? `R$ ${value.price}/dia` : "GRATUITO" }
                </span>
            </li>
        )
    }

    return (
        <>
            <h1> Dashboard </h1>
            <ul className="spot-list">
                {spots.map(renderSpot)}
            </ul>

            <Link to="/new">
                <button>Cadastrar novo spot</button>
            </Link>
        </>
    )
}

export default Dashboard;