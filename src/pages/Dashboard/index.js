import React, { useEffect } from "react";
import api from "../../services/api";
import { loadOptions } from "@babel/core";

const Dashboard = () => {
        
    useEffect(()=>{
        const loadSpots = async () =>{
            const user_id = localStorage.getItem("user");
            const response = await api.get("/dashboard",{
                headers : { user_id }
            })


            console.log(response.data)
        }
        

        loadSpots();
    },[])

    return (
        <>
            <h1> Dashboard </h1>

        </>
    )
}

export default Dashboard;