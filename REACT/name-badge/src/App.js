import React, {Component} from "react";
import './App.css';
import BadgeForm from "./components/BadgeForm"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>The Badge</h1>
        <BadgeForm />
        
      </div>
    );

  }
}

export default App;
