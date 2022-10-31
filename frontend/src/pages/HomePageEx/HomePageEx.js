import React from "react";
//import { useEffect, useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom"
import Inventory from "../../assets/Inventory.jpeg"
import Analytics from "../../assets/Analytics.jpeg"
import "./HomePageEx.css"

const HomePageEx = () => {

return (
    <div className="header">
        <h3>
            Homelessness affects many people in the United States of America.  Charitable contributions will go a long way in helping those in need.
            In our system contributions are logged based on date.  It is also our mission to distribute these items rather than stockpile inventory.
            For the nonfood items they will be processed for shipping 90 days after being received.  For food items they will be processed for shipping 30 days
            after being received.
        </h3>
        <br /> <br /> 
        <Link to={'/contributions'}>
            <img src={Inventory} />
            <h5>
            Contribution database
            </h5>
        </Link>
        <br /> <br /> 
        <Link to={'/charts'}>
            <img src={Analytics} />
            <h5>
            View contributions based on type or region
            </h5>
        </Link>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />  
    </div>
)
}

export default HomePageEx