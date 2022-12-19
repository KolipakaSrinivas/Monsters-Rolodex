import React,{useEffect,useState} from 'react'
import CardList from './components/card-list/Card-list.componet' 
import SearchBox from './components/search-box/search-box.component'
import './App.css'








function App() {

    const [monster,setMoster] = useState([]) 
    const [searchField,setSearchField] = useState('')

    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=>Response.json())
        .then(data=>setMoster(data))
        },[]);
        



        const fliterMonster =monster.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(

        <div className='App'>
            <h1>Monsters Rolodex</h1>
            <SearchBox  
             placeholder='search monster' 
             handelChange={e=>setSearchField(e.target.value)}   
             />
            <CardList  Monsters={fliterMonster}/>       
        </div>


    )
}

export default App