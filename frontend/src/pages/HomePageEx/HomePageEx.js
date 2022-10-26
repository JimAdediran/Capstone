import React from "react";
//import { useEffect, useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom"

const HomePageEx = () => {

return (
    <div>
        <h3>
            Homelessness affects many people in the United States of America.  Charitable contributions will go a long way in helping those in need.
            In our system contributions are logged based on date.  It is also our mission to distribute these items rather than stockpile inventory.
            For the nonfood items they will be processed for shipping 90 days after being received.  For food items they will be processed for shipping 30 days
            after being received.
        </h3>
        <Link to={'/contributions'}>
            <img src='contribution' />
        </Link>
    </div>
)
}

export default HomePageEx