import React from 'react'
import CardList from './components/card-list/Card-list.componet';
import SearchBox from './components/search-box/search-box.component';



class App extends React.Component{

    constructor(){
        super();
        this.state={
            Monsters:[],
            searchFiled:''

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>Response.json())
        .then(users =>this.setState({Monsters:users}))
    }







    render(){

        const { Monsters, searchFiled}=this.state

        const filterMonsters = Monsters.filter(

            Monsters=>Monsters.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
            
            
            )




        return(
            <div>
                <SearchBox  
                    handelChange={(e)=>{
                    this.setState({searchFiled:e.target.value})
                }}
                />
                 <CardList Monsters={filterMonsters}/>
            </div>
        )
    }
}

export default App