import React from 'react';
import "./Card.css"
import Pet from "./Pet"
import Friend from "./Friend"
import friendData from "../Friends"


function Card() {
    // console.log(props.friend.pets)
    const friendComponents = friendData.map(item => <Card friend={item}/>) 
    return(
        <div style={{marginLeft: "1.5em"}} className="card-container">
            <div className="image-container">
                {/* <img src={imageUrl} alt ="" />  */}
            </div>

            <div className="card-title">
                <h3><Friend /></h3>
            </div>

            <div className="card-body">
                <p></p>
        
            </div>

            <div className="btn">
    
               
            </div>
            {friendComponents}
        </div>
    )
    
}

export default Card