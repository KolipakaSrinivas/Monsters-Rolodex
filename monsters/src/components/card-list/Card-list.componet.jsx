import React from 'react'
import './card-list.style.css'
import Card from '../card/Card.component'

const CardList = (props) =>{
    return(
        <div className='card-list'>
            {
                  props.Monsters.map(Monsters=>(<Card key={Monsters.id} Monsters={Monsters}/>))
           }

        </div>
    )
}

export default CardList