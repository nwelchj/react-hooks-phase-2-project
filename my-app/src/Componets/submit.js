import React from "react";

function Submit(){

    function handlesubmit(event){
        console.log(event.target.value)
    }
    return(
        <div id="submit">
            <h1>Submit Form</h1>
            <form onClick={handlesubmit}>
                <input type="text" placeholder ="Type of Reptile"></input>
                    
                <button type="submit" > Submit</button>
            </form>
        </div>
    )
}

export default Submit;