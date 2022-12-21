import axios from 'axios';
import { useEffect, useState } from 'react'
import InfoBox from './InfoBox';

function TNStats(props) {

  // TN county total stats JHU
  const [dataTN, setDataTN] = useState([]);
  const [totalConfirmedTN, setTotalConfirmedTN] = useState(0);
  const [totalDeathsTN, setTotalDeathsTN] = useState(0);
  const [updatedDateTN, setUpdatedDateTN] = useState(null)
  const [coordinatesCounty, setCoordinatesCounty] = useState(0)

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/jhucsse/counties/")
      .then(res => {
        setDataTN(res.data);
        console.log(res.data)
        
        const tnStateData = res.data.find(item => item.province === "Tennessee" && item.county === 'Shelby');
      
        const totalConfirmedTN = res.data.reduce((acc, cur) => {
          if (cur.province === 'Tennessee') {
            return acc + cur.stats.confirmed;
          }
          return acc;
        }, 0);
        console.log(totalConfirmedTN)
        setTotalConfirmedTN(totalConfirmedTN);

        const totalDeathsTN = res.data.reduce((acc, cur) => {
          if (cur.province === 'Tennessee') {
            return acc + cur.stats.deaths;
          }
          return acc;
        }, 0);
        console.log(totalDeathsTN)
        setTotalDeathsTN(totalDeathsTN);
        
        const dateValueTN = new Date(tnStateData.updatedAt); 
        setUpdatedDateTN(dateValueTN.toDateString())

        const coordinatesCounty = tnStateData.coordinates
        setCoordinatesCounty(coordinatesCounty)
        console.log(coordinatesCounty)
    

      })
     
  }, []);


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://disease.sh/v3/covid-19/jhucsse/counties/"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

    return (
        <div className="app__stats">
            <h1>Tennessee</h1>
            <InfoBox title="Confirmed" cases={totalConfirmedTN}/>
            <InfoBox title="Deaths" cases={totalDeathsTN}/>
            <InfoBox title="Last Update" cases={updatedDateTN}/>
        </div>


    )
}

export default TNStats