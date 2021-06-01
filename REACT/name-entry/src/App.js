import React, {Component} from "react";
import './App.css';
import Post from "./Post"

class App extends Component {
  constructor(){
    super()

    this.state = {
      firstName : "",
      lastName: "",
      names : ["s"]
    }

    // binding this to methods
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  // handleChange method 
  handleChange = event =>{
    const {name,value} = event.target
    this.setState({[name]: value})
    
  }

  onSubmit(event){
    event.preventDefault(); 
    // arr.push(event.target.children.firstName.value)
    // console.log(event.target.children.firstName.value)
    // console.log(arr)
    this.setState(prevState => {
      return {
        names: [...this.state.names, this.state.firstName]
      }
      
    })
    console.log(event.target.input)
    // event.target.name = "";
    // console.log(this.state.names)
    // console.log("submit")
    // this.setState({ ...this.state, names: [...this.state.names, {firstName: this.state.firstName}]})   

    // clears out after submit
    this.setState({
      firstName: ""
    })
  }
  
  render(){
    // Mapping over names array in state and creating a new post component 
    const namesSubmitted = this.state.names.map(name => 
      <Post 
      name = {name}
      />
      )
    return (
      <div className="App">
        <header className="App-header">
          <h1> Greets from app.js</h1>
         
          
          <Post 
          names={this.state.names}
          />

          {namesSubmitted}

          <form 
          onSubmit={this.onSubmit}>

          <input
          id="input"
          type="text"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
          />

          <br />
      <button>Submit</button>
      </form>
          
          
        </header>
      </div>
    );
  }
  
}

export default App;
