import React from "react";
import { NavLink, } from "react-router-dom";

function Navbar () {
    return(
    
            <nav > 
                <NavLink exact to="/">Home</NavLink>
                <NavLink to = "/Snakes">  Snakes  </NavLink>
                <NavLink to = "/Geckos">  Crested Geckos  </NavLink>
                
                <NavLink to = "/Lizards"  >  Lizards  </NavLink>
                <NavLink to = "/submit" >  Submit  </NavLink>
            </nav>
        
    )
}

export default Navbar;
