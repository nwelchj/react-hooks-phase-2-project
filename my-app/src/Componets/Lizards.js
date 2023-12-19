import React,{useEffect, useState} from "react"
import CardTemplet from "./Cardtemp";

function Lirzards({lizard,setLizard}){
    const [isLoaded, setisLoaded] = useState(false)
   

    useEffect(() => {
       
        fetch('http://localhost:3000/lizard')
        .then(res =>res.json())
        .then(data => {
            setLizard(data)
            setisLoaded(true);
        });
},[setLizard])

if (!isLoaded)return <h3>loading...</h3>

     const Lirzardcards = lizard.map((lizard) => (
      
        <CardTemplet
            key={lizard.id}
            type={lizard.type}
            image={lizard.image}
            breed={lizard.breed}
        />
        
   ));
 
    


    
    return(
        <div id="lizards">
            <h2>Lirzards</h2>
            <div id="lizardcard"> {Lirzardcards}</div>
          
        </div>
    );
}

export default Lirzards;