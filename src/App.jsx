import { useState } from "react"
import Button from "./components/Button"
import Welcome from "./pages/Welcome"
import Destination from "./pages/Destinations"
import Compute from "./pages/Compute"

function App() {
  const [page, setPage] = useState()
  const payment = 20
  if (page == "welcome") {
    return <Welcome/>
  } 

  if (page == "destination")
    return <Destination setPage={setPage}/>

  if (page == "compute") {
    return <Compute payment={payment} name={"jules"}/>
  }

  function goToCompute () {
    setPage("compute")
  }

  function goToWelcome () {
    setPage("welcome")
  }

  function goToDestination () {
    setPage("destination")
  }




  return (
    <div className="page">
      <div className="container">
        <div>
          <button onClick={goToCompute} className="button_1">Go To Compute</button>
        </div>
        <div> 
          <button onClick={goToDestination} className="button_2">Go To Destination</button>
        </div>
      </div>



    </div>
    
  
  )
}

export default App
