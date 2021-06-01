import React from 'react';

class Dicebox extends React.Component {
    constructor() {
        super()
        this.state = {  
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        // must bind the RandomNum method to this in order to have access to the method in state
        this.RandomNum = this.RandomNum.bind(this)
    }
    
    RandomNum(e){
        console.log(this.state.num1)
        // checks for a event passed through onClick
        // if the event, or e is equal to the paramter being passed through my onClick method, the if state gets excuted with the invoking of the function
       if(e === "one"){
           // assigning all state variables, local variables so I can change the data.
           let numOne = this.state.num1
           let numTwo = this.state.num2
           let numThree = this.state.num3
           let numFour = this.state.num4
           let numFive = this.state.num5

           // assigning the math.floor function to each variable
           numOne = Math.floor(Math.random() *6)
           numTwo = Math.floor(Math.random() *6)
           numThree = Math.floor(Math.random() *6)
           numFour = Math.floor(Math.random() *6)
           numFive = Math.floor(Math.random() *6)

           // setting the state of each number to equal the math.floor function saved in the respective local variable
           this.setState(prevState => {return {num1: numOne}})
           this.setState(prevState => {return {num2: numTwo}})
           this.setState(prevState => {return {num3: numThree}})
           this.setState(prevState => {return {num4: numFour}})
           this.setState(prevState => {return {num5: numFive}})
       }
    }
    render() {
        return (
            <div>
                {/* Rendering the numbers on DOM */}
                <h1>The Dice Zone</h1>
                <button onClick={() => this.RandomNum("one")}>Button1</button>
                <h3>{this.state.num1}</h3>
                <h3>{this.state.num2}</h3>
                <h3>{this.state.num3}</h3>
                <h3>{this.state.num4}</h3>
                <h3>{this.state.num5}</h3>
                
            </div>
            
        )
    }
}

export default Dicebox;