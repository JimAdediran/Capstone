import React from "react";
//import { useEffect, useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom"

const HomePageEx = () => {

return (
    <div>
        <Link to={'/contributions'}>
            <img src='contribution' />
        </Link>
    </div>
)
}

export default HomePageEx