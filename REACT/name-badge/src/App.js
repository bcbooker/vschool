import React, {Component} from "react";
import './App.css';
import BadgeForm from "./components/BadgeForm"


class App extends Component {
  

  

  render(){
    return (
      <div className="App">
        <h1>The badge</h1>
        <BadgeForm />
        
      </div>
    );

  }

  
}

export default App;
