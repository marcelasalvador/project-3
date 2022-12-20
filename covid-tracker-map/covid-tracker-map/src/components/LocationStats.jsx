import ShelbyCountyStats from './ShelbyCountyStats';
import Table from "./Table"
import TNStats from './TNStats';
// import TNMap from "./TNMap"



function LocationStats() {
// loading message

  return (
    <div className="app"> 
      <div className="app__left">
        <div className="app__header">
          <h1>901 COVID-19 Tracker</h1>
        </div>
        <div>
          <ShelbyCountyStats />
          <TNStats />
        </div>
        {/* <TNMap /> */}
      </div> 
        <Table />
  </div>
  )
}

export default LocationStats