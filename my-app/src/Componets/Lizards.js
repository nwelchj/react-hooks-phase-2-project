import React, {useEffect} from "react"

function B(){

    useEffect(() => {
        fetch('http://localhost:3000/lizard')
        .then(res =>res.json())
        .then(data => (console.log(data)))
        
       
     },[])
    
    return(
        <div id="B">
            <h1>Lirzards</h1>
        </div>
    );
}

export default B;