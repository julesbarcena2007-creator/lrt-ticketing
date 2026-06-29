import { useState } from "react"
import Button from "./components/Button"
import Welcome from "./pages/Welcome"
import Destination from "./pages/Destinations"
import Compute from "./pages/Compute"
import Origin from "./pages/Origin"

function App() {
  const [page, setPage] = useState()
  const payment = 20
  if (page == "welcome") {
    return <Welcome/>
  } 

  if (page == "origin") {
    return <Origin setPage={setPage}/>
  }

  if (page == "destination")
    return <Destination setPage={setPage}/>

  if (page == "compute") {
    return <Compute payment={payment} name={"jules"}/>
  }

  

  function goToCompute () {
    setPage("compute")
  }

  function goToOrigin () {
    setPage("origin")
  }

  function goToWelcome () {
    setPage("welcome")
  }

  function goToDestination () {
    setPage("destination")
  }




  return (
    <div className="page">
      <div className="header_con">
        <div className="header">
          <h1>LOGO</h1>
          <h1>LRT 2 Ticketing system</h1>
        </div>
      </div>






      <div className="container">
        <div>
          <div className="pb-10">
            <div>
              <p>Mabuhay!</p>
            </div>
            <div>
              <p>Please select a transaction</p>
            </div>
           </div> 
          <div className="button-container">
            <button onClick={goToCompute} className="button_1">Stored Value</button>
            <button onClick={goToOrigin} className="button_2">Single Journey</button>
          </div>
        </div>
      </div>



    </div>
    
  
  )
}

export default App
