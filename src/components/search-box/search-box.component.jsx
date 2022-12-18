import React from 'react'


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