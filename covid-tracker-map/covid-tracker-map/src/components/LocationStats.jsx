import axios from 'axios';
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@mui/material';
import InfoBox from './InfoBox';
import Map from './Map';




//not returning the right values (multiple Shelby counties conflict)
function LocationStats() {

const [confirmed, setConfirmed] = useState(null);
const [deaths, setDeaths] = useState(null);
const [updatedAt, setupdatedAt] = useState(null)


//Shelby county stats => switch to TN totals
  axios.get("https://disease.sh/v3/covid-19/jhucsse/counties/shelby")
  .then(response => {
    const data = response.data;
    const shelbyCountyData = data.find(item => item.province === "Tennessee" && item.county === 'Shelby');
 
    const confirmedValue = shelbyCountyData.stats.confirmed;
    const deathsValue = shelbyCountyData.stats.deaths;
    const dateValue= shelbyCountyData.updatedAt;

    setConfirmed(confirmedValue);
    setDeaths(deathsValue);
    setupdatedAt(dateValue)
  })
  .catch(error => {
    console.log(error);
  });



  return (
    <div className="app"> 
      <div className="app__left">
        <div className="app__header">
          <h1>901 COVID-19 Tracker</h1>
        
        </div>
        <div className="app__stats">
            <InfoBox title="Confirmed" cases={confirmed}/>
            <InfoBox title="Deaths" cases={deaths}/>
            <InfoBox title="Last Update" cases={updatedAt}/>
        </div>
        <Map/>
      </div> 
      {/* <Card className="app__right">
        <CardContent>
          <h3>Space for card</h3>
        </CardContent>    
      </Card> */}
  </div>
  )
}

export default LocationStats