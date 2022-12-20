import axios from 'axios';
import { useEffect, useState } from 'react'
import InfoBox from './InfoBox';

function ShelbyCountyStats() {

const [confirmedShelby, setConfirmedShelby] = useState(null);
const [deathsShelby, setDeathsShelby] = useState(null);
const [updatedAtShelby, setupdatedAtShelby] = useState(null)



//Shelby county stats  JHU
useEffect(() =>{
  axios.get("https://disease.sh/v3/covid-19/jhucsse/counties/shelby")
  .then(res => {
    const dataShelby = res.data;
    const shelbyCountyData = dataShelby.find(item => item.province === "Tennessee" && item.county === 'Shelby');
 
    const confirmedValueShelby = shelbyCountyData.stats.confirmed;
    const deathsValueShelby = shelbyCountyData.stats.deaths;
    const dateValueShelby= new Date(shelbyCountyData.updatedAt);

    setConfirmedShelby(confirmedValueShelby);
    setDeathsShelby(deathsValueShelby);
    setupdatedAtShelby(dateValueShelby.toDateString())
  })
  .catch(error => {
    console.log(error);
  });
}, [])
  
    return (

<div className="app__stats">
            <h1>Shelby</h1>
            <InfoBox title="Confirmed" cases={confirmedShelby}/>
            <InfoBox title="Deaths" cases={deathsShelby}/>
            <InfoBox title="Last Update" cases={updatedAtShelby}/>
        </div>
       

    )
}

export default ShelbyCountyStats