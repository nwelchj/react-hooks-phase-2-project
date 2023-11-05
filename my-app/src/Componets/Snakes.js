import React, {useEffect} from "react"

function Snakes(){

    useEffect(() => {
        fetch('http://localhost:3000/snakes ')
        .then(res =>res.json())
        .then(data => (console.log(data)))
        
       
     },[])
    

    return(
        <div id="snakes">
            <h1>Snakes</h1>
        </div>
    );
}

export default Snakes;