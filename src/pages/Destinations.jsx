import { useState } from "react"

function Destination ({setPage}) {
    const stations = ["Antpolo", "Marikina", "Santolan", "Katipunan", "Anonas", "Cubao", "Betty go", "Gilmore", "J. ruiz", "V. mapa", "Pureza", "Legarda", "Recto"]
    const base = 10
    const increment = 0.20
    const [selectedStation, setSelectedStation] = useState("test"
    )
    function chooseStation (x, index) {
        setSelectedStation(x)
        console.log(x, index)
    }
    function getStation () {
        
    }



    function goToHome (){
        setPage("home")
    }
    return (
        <div>hello from destination
            <div>
                {stations.map((station, index) => {
                    return <button onClick={() => chooseStation(station,index)}>
                        {station}
                    </button>
                })}
                
            </div>
        <button onClick={goToHome}>Back to home</button>
        {selectedStation}

        </div>
    )
}
export default Destination