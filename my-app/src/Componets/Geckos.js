import React, {useEffect} from "react"


function Geckos(){

    useEffect(() => {
        fetch('http://localhost:3000/Gecko')
        .then(res =>res.json())
        .then(data => (console.log(data)))
        
       
     },[])
    




    return(
        <div id="geckos">
            <h1> Geckos </h1>
        </div>
    );
}

export default Geckos;