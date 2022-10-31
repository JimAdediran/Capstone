import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayContributions from "../../components/DisplayContributions/DisplayContributions";
import useAuth from "../../hooks/useAuth";
import AddContributions from "../../components/AddContributions/AddContributions";
import PlaceIdKey from "../../components/PlaceIdKey/PlaceIdKey";
import "./ItemsPage.css"

const ItemsPage = (props) => { 
    const [contributions, setContributions] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        getAllContributions();
    }, [])

const getAllContributions = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:8000/api/contribution/',
        {headers: {Authorization: `Bearer ${token}`,},} 
        );
        setContributions(response.data)
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
    }
}


return (
    <div className="items">
       <DisplayContributions contributions={contributions} getAllContributions={getAllContributions} />
       <PlaceIdKey />
       <AddContributions getAllContributions={getAllContributions} />
    </div>
)





}

export default ItemsPage