import React from 'react'
import CardList from './components/card-list/Card-list.componet';



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
        return(
            
            <div>
                <input type='search' placeholder="monster search" 
                onChange={(e)=>{
                    this.setState({searchFiled:e.target.value})
                    console.log(this.state)
                }}
                 
                />
                 <CardList Monsters={this.state.Monsters}/>
            </div>
        )
    }
}

export default App