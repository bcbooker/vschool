import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form'
import CardCom from './components/CardCom'


class App extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
        this.saveUser = this.saveUser.bind(this)

    }   

    saveUser(newUser) {
        //Function passed to Save button inside form Component, pushes user State into savedUser arr
            this.setState(prevState => {
                return {
                users: [...prevState.users, newUser]
                }   
            })
    }
                                   
    
    render() {
        const usersArr = this.state.users.map(user => <CardCom key={Number(Math.floor(Math.random() * 1000000))}
        name={this.firstName}
        />)
        return (
            <main>
            <div style={{display: "flex", alignItems: "center"}}>
                {usersArr}
                <Form
                save={this.saveUser}
                />
                <CardCom />

              

            </div>

            <div>
                <hr />
               
            </div>
            </main>
        )
    }
}

export default App
