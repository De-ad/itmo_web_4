import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    let isAuth = true;
    let logButtonValue = (isAuth) ? "Log out" : "Log in";

    return(
        <div>
            <Link to="/coordinates-form">Coordinates Form</Link>
            <Link to="/start">Start</Link>
            <button >{logButtonValue}</button>
        </div>
    );
};

export default Navbar;