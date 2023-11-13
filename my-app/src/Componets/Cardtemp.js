import React from "react";

function CardTemplet ({id,type,breed }){
    return(
        <div id={id}>
            <h3>{type}</h3>
            <p>{breed}</p>
            <button>Hi</button>
        </div>
    )
}

export default CardTemplet;