import React from 'react';
import "./Friend.css"
import Pets from "./Pets"



function Friend(props) {
    // petData mapped
    
    return(
        // Card style for all friend components
        <div style={{marginLeft: "1.5em"}} className="card-container">
            
            <div className="card-title">
                <h3>{props.friend.name}</h3>
                <h5>{props.friend.age}</h5>
                <h4>Pets</h4>
                <h4>----------</h4>
                {props.friend.pets.map(pet => 
                
                <Pets 
                name={ pet.name }/>)}

            </div>

            <div className="card-body">
                
             
            </div>

        </div>
    )

}
    
export default Friend