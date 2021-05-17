import React from 'react';
import friendData from "../FriendData"
import Friend from "./Friend"


function FriendList(){
    // friendData mapped
    // setting props through inital map of friendData
    const friendComponents = friendData.map(friend => 
        <Friend

        pets={friend.pets} 
        friend={friend}
        
        />)
    
    return(
        <div style={{display: "flex"}}>
            {friendComponents}

        </div>
    )
}

export default FriendList