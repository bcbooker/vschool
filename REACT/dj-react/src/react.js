import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      //Changed this.state.colors to be equal to per the instruction  ["white", "white", "white","white"] requirements 
      colors: ["white", "white", "white", "white"]
    }
    this.setState({
    })
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(message){ //changed parameter from click event to "message"
   console.log("Handle click working")
  // //  style={backgroundColor: this.state.colors[3]}
  //   this.setState({
  //     bgColor: "red"
  //   })
  //   // test to change blue if the background color is already red.
  //   if(this.state.bgColor === "red"){
  //     console.log("this background color is red")
  //     this.setState({
  //       bgColor: "blue"
  //     })
  //   }
    if(message === "small-time-dj") { //each button will upload a unique argument string to the handleClick function. If the message is equal to "small-time-message" we want to do the following
      if(this.state.colors[0] === "white") { //if the item at the first index of the colors array in state is white...
        this.setState({ //...set the colors property of state equal to an array with four "black" strings inside of it
          colors: ["black", "black", "black", "black"]
        })
        return
      }
      if(this.state.colors[0] === "black") {//if the item at the first index of the colors array in state is black...
        this.setState({//...set the colors property of state equal to an array with four "white" strings inside of it
          colors: ["white", "white", "white", "white"]
        })
        return
      }
      return this.setState({colors: ["black", "black", "black", 'black']}) //you can actually remove this line. The way the instruction have the Small Time DJ functionaity set up prevents this button from doing anything if the first index of this.state.colors is not "white" or "black". I just thought I'd add this return statement to change all the squares black if the first square was neither "black" or "white". Again feel free to remove this line if it bothers you at all. Your code will run fine without it.
    }
    if(message === "big-time-dj" ) {
      let newColorsArr = this.state.colors
      newColorsArr[0] = "purple"
      newColorsArr[1] = "purple"
      this.setState({colors: newColorsArr })
    }
  }
  render(){
    return (
      <div className="container">
        <h1 className="appc">App component</h1>
        <div className="grid">
          <div style={{backgroundColor: this.state.colors[0]}} className="cell" onClick={this.handleClick} id="1">Square 1</div>
          <div style={{backgroundColor: this.state.colors[1]}} className="cell" id="2">Square 2</div>
          <div style={{backgroundColor: this.state.colors[2]}} className="cell" id="3">Square 3</div>
          <div style={{backgroundColor: this.state.colors[3]}} className="cell" id="4">Square 4</div>
        </div>
        <button onClick={() => this.handleClick("small-time-dj")}>Small Time DJ</button> {/*have to use a callback function outside of this.handleClick to prevent this.handleClick from running indefinitely */}
        <button onClick={() => this.handleClick("big-time-dj")}>Big Time DJ</button>
      </div>
    );
  }
}
export default App;