
import React from "react"
import Button from 'react-bootstrap/Button'

class Form extends React.Component {
    constructor(props) {
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
      
    
    
    render(){
        console.log(this.props)

        return(
            
            <div style={{color: "red"}}>
            <form style={{display: "inline-block"}} > 
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

            <Button onClick={() => {this.props.save(this.state)}}>Submit</Button>
        </form>
        </div>

        )
        
        
    }

}

export default Form