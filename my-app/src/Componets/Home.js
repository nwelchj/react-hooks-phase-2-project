
import React from "react"

function Home(){
   // const [animal, setanimal] = useState(null)




    // useEffect(() => {
    //     fetch('http://localhost:3000/')
    //     .then(res =>res.json())
    //     .then(data => (console.log(data)))
        
       
    //  },[])
    
    //if (!animal) return <h2>Loading...</h2>

    
    return(
        <div id="home">
            <h1>Rep-E-Book</h1>
            <p> This is a project done for Flatiorn school to teech me about react and javavscript!
                           It is a play on facebook for reptile lovers like myself.
            </p>
            
            <p>The nav bar alows you to select wich page you want to go too</p>
        </div>
    )
}

export default Home;