import React,{useState, useEffect} from "react"
import CardTemplet from "./Cardtemp";

function Snakes(){
    const [isLoaded, setisLoaded] = useState(false)
    const [snakes, setSnake] =useState([])

    useEffect(() => {
       
        fetch('http://localhost:3000/snakes')
        .then(res =>res.json())
        .then(data => {
            setSnake(data)
            setisLoaded(true);
        });
},[setSnake])

if (!isLoaded)return <h3>loading...</h3>

    const snakeCard = snakes.map((snake) => (
      
        <CardTemplet
            key={snake.id}
            type={snake.type}
            image={snake.image}
            breed={snake.breed}
        />
        
   ));
    return(
        <div id="snakes">
            <h2>Snakes</h2>
            <div id="snakecard">{snakeCard}</div>
        </div>
    );
}

export default Snakes;