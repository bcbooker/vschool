import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: ["orange", "blue", "green"]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  

  handleClick(e){
   console.log("Handle click working")
  //  style={backgroundColor: this.state.colors[3]}
    this.setState({
      bgColor: "red"
    })

    if(this.state.bgColor === "red"){
      console.log("this background color is red")
      this.setState({
        bgColor: "blue"
      })
    }
  }
   
  render(){
    return (
      <div className="container">
        <h1 className="appc">App component</h1>

        <div className="grid">
          <div style={{backgroundColor: this.state.bgColor}} className="cell" onClick={this.handleClick} id="1">Square 1</div>
          <div style={{backgroundColor: this.state.bgColor}} className="cell" id="2">Square 2</div>
          <div style={{backgroundColor: this.state.bgColor}} className="cell" id="3">Square 3</div>
          <div className="cell" id="4">Square 4</div>
        </div>
  
      </div>
    );
  }
 
}

export default App;
