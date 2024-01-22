import React, {useState} from "react";
//const axios = require('axios');

function Submit() {

      const [selectedOption, setSelectedOption] = useState("");
      const [type, setType] = useState("");
      const [breed, setBreed] = useState("");
      //const [Image, setImage] = useState([null])
      
    
      
    
    //   function handleTypeChange(e){
    //     setType(e.target.value);
    //   };
    
    //   function handdleBreedChange(e){
    //     setBreed(e.target.value);
    //   };
    
    //   function handleImageChange(e){
    //     setImage({image : e.target.files[0]})
    //   };
    
      function handleOptionChange(e){
        setSelectedOption(e.target.value)
        console.log(breed, type)
      }
    
      function handleSubmit(e){
        e.preventDefault();
        console.log("clicked")
        const Post ={ type, breed};
        console.log(Submit)
    
        fetch(`http://localhost:3000/${selectedOption}`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Post)
      }).then(()=> {
        console.log("New post");
      })
    }
    
    
    
          
    
      
        
      return (
        <form id="Form" onSubmit={handleSubmit}>
    
            <label id="drop" htmlFor="dropdown">Select an option:</label>
                <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">-- Choose an option --</option>
                    <option value="Gecko">Geckos</option>
                    <option value="lizard">Lizards</option>
                    <option value="snakes">Snakes</option>
                {/* Add more options as needed */}
            </select>
    
          {/* Display the selected value */}
          {selectedOption && <p>You selected: {selectedOption}</p>}   
    
    
          <label>
                Type  of Reptile :
            <input 
            type="text" 
            required
            
            onChange={(e)=> setType(e.target.value)}
            />Type 
          </label>
    
        
          <label>
                Breed of reptile:
            <input 
            type = "text" 
            
            required
            onChange={(e)=> setBreed(e.target.value )}
            ></input>
          </label>
          
            
          
          
    
          <button type="submit">Submit</button>
        </form>
      )};
    
    
    
    
    export default Submit;
    






// function Submit(){

//     function handlesubmit(event){
//         console.log(event.target.value)
//     }
//     return(
//         <div id="submit">
//             <h1>Submit Form</h1>
//             <form onClick={handlesubmit}>
//                 <input type="text" placeholder ="Type of Reptile"></input>
                    
//                 <button type="submit" > Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Submit;





//    const config ={
    //     method: 'post',
    //     url: "http://localhost:3000/Gecko",
    //     headers: {
    //         "Content-Type" : "application/json"
    //     },
    //     data: Type 
    //    };

    //    axios(config)
    //    .then(function(res){
    //     console.log(JSON.stringify(res.data));
    //    })
    //    .catch(function(error){
    //     console.log(error);
    //    })