import './App.css';
import Character from "./components/Character"
import React, { Component } from 'react'
import "react-bootstrap"



export default class App extends Component {
  constructor(){
    super()
      this.state = {
        
        characters:[]
      }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data
      })
    })

  }
  render() {
    console.log(this.state)
    console.log(this.state.characters)
   const dataResponse = this.state.characters.map((user, index)=> <Character 
        key = {index}
        name = {user.name}
        image = {user.image}
   />
     
   
   )

    return (
      
        <div className="cardGrid">

       
        {dataResponse}

        </div>
       

         
         

         

       
        

      
      
    
    )
  }
}
