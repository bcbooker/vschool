import React from "react"
import VacationSpot from "./components/VacationSpot"
import vacationData from "./VacationDestinations"
// import vacationData from "./src/VacationDestinations"



function App() {
    const vacationComponents = vacationData.map(item => <VacationSpot key={item} spot={item} />)
    return (
        <div style={{display: "flex"}} className="wrapperDiv">
            
          
      
          {vacationComponents}
        
        </div>
    )
   
}

export default App