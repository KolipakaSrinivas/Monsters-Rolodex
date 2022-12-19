import React from 'react'
import './search-box.style.css'


const SearchBox = (props) =>{
    return(
        <div>
             <input

                type='search'
                placeholder='search monster' 
                className='search'
                onChange={props.handelChange}
                
             />

        </div>
    )
}

export default SearchBox