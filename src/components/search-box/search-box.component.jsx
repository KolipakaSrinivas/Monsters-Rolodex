import React from 'react'
import './search-box.style.css'


const SearchBox = ({placeholder,handelChange}) =>{
    return(
        <div>
             <input

                type='search'
                placeholder={placeholder} 
                className='search'
                onChange={handelChange}
                
             />

        </div>
    )
}

export default SearchBox