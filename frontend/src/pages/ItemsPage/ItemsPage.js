import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayContributions from "../../components/DisplayContributions/DisplayContributions";

const ItemsPage = (props) => { 
    const [contributions, setContributions] = useState([])

    useEffect(() => {
        getAllContributions();
    }, [])

const getAllContributions = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:8000/api/contribution/'
        );
        setContributions(response.data)
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
    }
}

return (
    <div>
       <DisplayContributions contributions={contributions} getAllContributions={getAllContributions} />
    </div>
)





}

export default ItemsPage