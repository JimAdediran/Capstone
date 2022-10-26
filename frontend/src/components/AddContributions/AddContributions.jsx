import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AddContributions = (props) => {
    const [user, token] = useAuth();
    const [contribution_type, setContribution_type] = useState('');
    const [item, setItem] = useState('');
    const [marked_for_shipment, setMarked_for_shipment] = useState('');
    const [place, setPlace] = useState('');




    const postNewContribution = async (newContribution) => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/contribution/", newContribution,
            {headers: {Authorization: `Bearer ${token}`,},} )
            console.log(response.data)
            props.getAllContributions()
        } catch (error){
            console.log(error.message)
        }
        
        }

    function handleSubmit(event){
        event.preventDefault();
        let newContribution={
            user: user.id,
            contribution_type: contribution_type,
            item: item,
            marked_for_shipment: marked_for_shipment,
            place: place,
        };
        postNewContribution(newContribution)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Contribution Type</label>
            <input value={contribution_type} onChange={(event)=> setContribution_type(event.target.value)}/>
            <label>Item</label>
            <input value={item} onChange={(event)=> setItem(event.target.value)}/>
            <label>Marked for shipment</label>
            <input value={marked_for_shipment} onChange={(event)=> setMarked_for_shipment(event.target.value)}/>
            <label>Place</label>
            <input value={place} onChange={(event)=> setPlace(event.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
 
}

export default AddContributions;