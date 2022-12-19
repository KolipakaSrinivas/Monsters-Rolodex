import React from 'react'
import '../card/card.style.css'




const Card = (props) =>{
    
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${props.Monsters.id}?set=set2&size=180x180`} alt='monsters'/>
            <h2>{props.Monsters.name}</h2>
            <p>{props.Monsters.email}</p>
        </div>
    )
}

export default Card




