import React, {Component} from "react";
import './App.css';
import BadgeForm from "./components/BadgeForm"
import Badge from "./components/Badge"

class App extends Component {
  

  

  render(){
    return (
      <div className="App">
        <h1>Hello from app.js</h1>
        <BadgeForm />
        <Badge />
      </div>
    );

  }

  
}

export default App;
