// each friend should have its own card
// inside the card, the pets should render at the bottom of the card in a list

// render friends in App 
// render pets inside friends

import React from 'react';
import Card from "./components/Card"
import friendData from "./Friends"

function App() {
    // const petComponents = friendData.map(item => friendData.pets.map(pet => <Card pet={pet}/>) 
    const friendComponents = friendData.map(item => <Card friend={item}/>) 
    return(
        <div style={{display: "flex"}} className="App">
             
         
            {/* {petComponents} */}
       
        </div>
    )
    
}

export default App