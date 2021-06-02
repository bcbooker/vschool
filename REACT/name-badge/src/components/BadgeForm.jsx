import React, { Component } from 'react';
import './BadgeForm.css';
import Badge from "./Badge"

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
              isSubmitted: false
          }

          // binding methods to (this)
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
          this.print = this.print.bind(this)

    }

    // handle change method
    handleChange = event => {
    const {name,value} = event.target
    this.setState({[name] : value})
    
  }

  print(){
      console.log("on submit")
  }

  handleSubmit(event) {
      event.preventDefault();
    //preventDefault stuff
    this.setState(prevState => {
        return{
            users: [...this.state.users, 
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
    }


    // handle submit will update users array, and add a new user
//     handleSubmit = event => {
//     event.preventDefault();
//     this.setState(prevState => {
//       return {
//         users: [...this.state.users, this.state.user ]
//       }
//     })
//   }



  render() {
    const namesSubmitted = this.state.users.map(user => 
        <Badge
        key = {user}
        firstName = {user.firstName}
        lastName = {user.lastName}
        />
        )
       
    return (
      <div> 

        <form onSubmit={this.handleSubmit}>

        {/* First Name */}
        <input
        className="inputs"
        type="text"
        value={this.state.firstName}
        onChange={this.handleChange}
        name="firstName"
        placeholder="First Name"
        />

        {/* Last Name */}
        <input
        className="inputs"
        type="text"
        value={this.state.lastName}
        onChange={this.handleChange}
        name="lastName"
        placeholder="Last Name"
        />

        <br></br>
      
        {/* Email */}
        <input
        className="inputs"
        type="text"
        value={this.state.email}
        onChange={this.handleChange}
        name="email"
        placeholder="Email"
        />

        {/* Place of Birth */}
        <input
        className="inputs"
        type="text"
        value={this.state.poBirth}
        onChange={this.handleChange}
        name="poBirth"
        placeholder="Place of Birth"
        />

        <br></br>

        {/* Phone */}
        <input
        className="inputs"
        type="number"
        value={this.state.phone}
        onChange={this.handleChange}
        name="phone"
        placeholder="Phone Number"
        />

        {/* Favorite Food */}
        <input
        className="inputs"
        type="text"
        value={this.state.favFood}
        onChange={this.handleChange}
        name="favFood"
        placeholder="Favorite Food"
        />

        <br></br>

        <textarea
        id="info"
        name="info"
        value={this.state.info}
        onChange={this.handleChange}
        />
        <br></br>

        <button>Submit</button>

        </form>

        {/* <p>{this.state.firstName}</p> */}
        {namesSubmitted}
       <h1> {this.state.users.firstName} </h1>
        {this.state.users.lastName}
        {this.state.isSubmitted && <h1>Submittied</h1>}

      </div>
        

    );
  }
}

export default BadgeForm
