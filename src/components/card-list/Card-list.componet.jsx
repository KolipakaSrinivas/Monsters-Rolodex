import React from 'react'
import './card-list.style.css'
import Card from '../card/Card.component'




function CardList({Monsters}) {
    return(
        <div className='card-list'>
           {
            Monsters.map(Monsters=><Card key={Monsters.id} Monsters={Monsters}/>)
           }
        </div>
    )
}
export default CardList

