import React from "react";
import { NavLink, } from "react-router-dom";

function Navbar ({setResoursetype,resouresetype }) {
   console.log(resouresetype)
    return(
    
            <nav > 
                <NavLink exact to="/">Home</NavLink>
                <NavLink to = "/Snakes" onClick={() => setResoursetype('snakes')}>  Snakes  </NavLink>
                <NavLink to = "/Geckos" onClick={() => setResoursetype('geckos')}>  Crested Geckos  </NavLink>
                <NavLink to = "/Lizards" onClick={() => setResoursetype('lizards')} >  Lizards  </NavLink>
                <NavLink to = "/submit" onClick={() => setResoursetype('submit')} >  Submit  </NavLink>
            </nav>
        
    )
}

export default Navbar;
