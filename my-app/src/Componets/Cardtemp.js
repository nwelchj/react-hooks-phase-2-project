import { useState } from "react";
import React  from "react";

function CardTemplet ({id,type,breed,image }){
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
      }; 
    return(
        <div className="CardTemplet" id={id}>
            <h3>{type}</h3>
            <img className="image" src={image} alt="Null"/>
            <p>Breed : {breed}</p>
            <button className="button" onClick={handleLikeClick} style={{ fontSize: '20px' }}>
                {liked ? '❤️' : '🤍'} {liked ? 'Unlike' : 'Like'}
            </button>
        </div>
    )
}

export default CardTemplet;