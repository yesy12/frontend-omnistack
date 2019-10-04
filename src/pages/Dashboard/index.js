import React, { useEffect,useState } from "react";
import api from "../../services/api";

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
                    {value.price}
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
        </>
    )
}

export default Dashboard;