import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName : "",
          lastName : "",
          Age: "",
          paleo: "",
          vegan: "",
          carbfree: "",
          gender: "",
          location: "",
        }

        this.handleChange = this.handleChange.bind(this)

    }   

    handleChange(event){
      const {name,type,value,checked} = event.target 
      this.setState({[name]: value})
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

    }                                 
    
    render() {
        return (
            <main>
                <form>
                    <input 
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                     />
                     
                     <br />

                    <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    />
                    
                    <br />

                    <input 
                    value={this.state.Age}
                    name="Age"
                    type="number"
                    placeholder="Age" 
                    onChange={this.handleChange}
                    /><br />
  
                  <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <br />

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                    <br />
                    
                <label>Destination:</label>
                <select 
                    value={this.state.location}
                    onChange={this.handleChange}
                    name="location"
                >
                   
                    <option value="Chicago">Chicago</option>
                    <option value="Guam">Guam</option>
                    <option value="Italy">Italy</option>
                </select>
                    <br />
                  
                <label>
                    <input 
                        type="checkbox" 
                        name="vegan"
                        checked={this.state.vegan}
                        onChange={this.handleChange}
                    /> Vegan
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        name="paleo"
                        checked={this.state.paleo}
                        onChange={this.handleChange}
                    /> Paleo
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        name="carbfree"
                        checked={this.state.carbfree}
                        onChange={this.handleChange}
                    /> Carb Free
                </label>
                <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${this.state.firstName}, ${this.state.lastName}`}</p>
                <p>Your age: {this.state.Age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    <p>Vegan : {this.state.vegan ? "Yes" : "No"}</p>
                    <p>Paleo : {this.state.paleo ? "Yes" : "No"}</p>
                    <p>Carb Free : {this.state.carbfree ? "Yes" : "No"}</p>
                </p>
            </main>
        )
    }
}

export default App
