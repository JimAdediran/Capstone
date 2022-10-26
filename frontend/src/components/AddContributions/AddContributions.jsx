import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AddContributions = () => {
    const [contirbutions, setContributions] = useState([])
    const [user, token] = useAuth()




    const postNewContribution = async () => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/contribution", 
            {headers: {Authorization: `Bearer ${token}`,},} )
        setContributions(response.data)
        } catch (error){
            console.log(error.message)
        }
        
        }

    
}