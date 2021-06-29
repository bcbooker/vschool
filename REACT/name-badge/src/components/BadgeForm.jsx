import React, { Component } from 'react';
import './BadgeForm.css';
import Badge from "./Badge"
import Button from 'react-bootstrap/Button';




class BadgeForm extends Component {
    constructor(){
    super()
        this.state = {
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              poBirth: "",
              favFood: "",
              info: "",
              users: [],
              // isSubmitted: false
          }

          // binding methods to (this)
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handle change method
    handleChange = event => {
    const {name,value} = event.target
    this.setState({[name] : value})
    
  }
    // we are just clearing inputs in [state]
  

  print(){
    // test print functuon to ensure that the handle submit function works
      console.log("on submit")
  }

  handleSubmit(event) {
      event.preventDefault();

    //preventDefault stuff
    this.setState(prevState => {
        return{
            users: [...prevState.users, 
                {
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                email: this.state.email, 
                phone: this.state.phone, 
                poBirth: this.state.poBirth,
                favFood: this.state.favFood,
                info: this.state.info,
                //conditional render for onsubmit
                isSubmitted: true
            }]
            
        }
    //clear the value of your form's inputs through state
        
    
    })

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      poBirth: "",
      favFood: "",
      info: "",
    })
   


}

  render() {
    // can use a index in the map, as a key.
    const namesSubmitted = this.state.users.map( (user, index) => 
        <Badge
        key = {index}
        firstName = {user.firstName}
        lastName = {user.lastName}
        email = {user.email}
        phone = {user.phone}
        poBirth = {user.poBirth}
        favFood = {user.favFood}
        info = {user.info}
        />
        )
       
    return (
      <div> 

        <form className="form" onSubmit={this.handleSubmit}>

        {/* First Name */}
        <input
        id="firstname"
        defaultValue="Reset"
        className="inputs2"
        minlength = "3"
        required 
        type="text"
        value={this.state.firstName}
        onChange={this.handleChange}
        name="firstName"
        placeholder="First Name"
        />

        {/* Last Name */}
        <input
        id="lastname"
        className="inputs"
        minlength = "3"
        required 
        type="text"
        value={this.state.lastName}
        onChange={this.handleChange}
        name="lastName"
        placeholder="Last Name"
        />

        <br></br>
      
        {/* Email */}
        <input
        id="email"
        className="inputs2"
        minlength = "3"
        required 
        type="text"
        value={this.state.email}
        onChange={this.handleChange}
        name="email"
        placeholder="Email"
        />

        {/* Place of Birth */}
        <input
        id="poBirth"
        className="inputs"
        minlength = "3"
        required 
        type="text"
        value={this.state.poBirth}
        onChange={this.handleChange}
        name="poBirth"
        placeholder="Place of Birth"
        />

        <br></br>

        {/* Phone */}
        <input
        id="phone"
        className="inputs2"
        minlength = "3"
        required 
        type="number"
        value={this.state.phone}
        onChange={this.handleChange}
        name="phone"
        placeholder="Phone Number"
        />

        {/* Favorite Food */}
        <input
        id="favfood"
        className="inputs"
        minlength = "3"
        required 
        type="text"
        value={this.state.favFood}
        onChange={this.handleChange}
        name="favFood"
        placeholder="Favorite Food"
        />

        <br></br>
        <br></br>

        <textarea
        rows="5"
        cols="60"
        id="info"
        name="info"
        value={this.state.info}
        onChange={this.handleChange}
        />
        <br></br>

        
        {/* Submit button */}
        <Button onClick={this.handleSubmit} variant="dark">Submit </Button>
        </form>
        

        <div style={{display: "flex"}}>
        {namesSubmitted}
        </div>
      </div>

      
        

    );
  }
}

export default BadgeForm
