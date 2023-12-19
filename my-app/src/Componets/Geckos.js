
import React, {useEffect, useState}from "react"
import CardTemplet from "./Cardtemp"



function Geckos({setgecko,geckos} ){
   
   const [isLoaded, setisLoaded] = useState(false)
   

    useEffect(() => {
       
        fetch('http://localhost:3000/Gecko')
        .then(res =>res.json())
        .then(data => {
            setgecko(data)
            setisLoaded(true);
        });
},[setgecko])

if (!isLoaded)return <h3>loading...</h3>

     const Geckocards = geckos.map((gecko) => (
        
       <CardTemplet
           key={gecko.id}
           type={gecko.type}
           image={gecko.image}
           breed={gecko.breed}
      />
        
   ));



    return(
        
        <div id="geckos">
            <h2> Geckos </h2>
            
            <div id="geckocards">{Geckocards}</div>
             
        </div>
    );
}

export default Geckos;