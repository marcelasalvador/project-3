import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import {
  MapContainer,
  TileLayer,
  Polygon
  
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const center = [35.860119, -86.660156];

function TNMap(props) {

  const [polygonsData, setpolygonsData] = useState(null);

  useEffect(() => {
    axios.get('https://services3.arcgis.com/PWXNAH2YKmZY7lBq/arcgis/rest/services/TN_counties/FeatureServer/1/query?outFields=*&where=1%3D1&f=geojson')
  
      .then (res => {
        const dataMap = res.data

        const polygonsData = dataMap
        setpolygonsData(polygonsData)
      })
      .catch(error => {
          console.error(error);
        });

  }, []); 

  const [mapTilerData, setMapTilerData] = useState(null);

  useEffect(() => {
    axios.get("https://api.maptiler.com/maps/94adda77-63ae-4df0-a5d6-6dfef4b24725/style.json?key=8apUUdkQojGs86PclFO8")
      .then(res => {
        console.log(res.data)
        setMapTilerData(res.data);
      })
      .catch(error => {
        console.error(error);
      });
    
  }, []); 

  

  return (
    <div>

        <div>
          {polygonsData && <p>Map data loaded</p>}
          {mapTilerData && <p>MapTiler data loaded</p>}
        </div>

        <MapContainer
              center={center}
              zoom={10}
              style={{ width: '80vw', height: '50vh' }}
            >
              <TileLayer
                url={"https://api.maptiler.com/maps/94adda77-63ae-4df0-a5d6-6dfef4b24725/style.json?key=8apUUdkQojGs86PclFO8"}
              />
              {
                polygonsData && polygonsData.features.map((state) => {
                  const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

                  return (<Polygon
                    pathOptions={{
                      fillColor: '#fafafa',
                      fillOpacity: 0.6,
                      weight: 1,
                      opacity: 1,
                      dashArray: "",
                      color: 'white'
                    }}
                    positions={coordinates}
                    
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          dashArray: "",
                          fillColor: "#ffcccb",
                          fillOpacity: 0.7,
                          weight: 2,
                          opacity: 1,
                          color: "white",
                        })
                        
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 2,
                          dashArray: "2",
                          color: 'white',
                          fillColor: '#fafafa'
                        });
                      },

                      click: (e)=> {
                        const layer = e.target
                        layer.bindPopup("hello")

                      }
                      
                    }}
                       
                  />)
                })
              }  
              
              
          </MapContainer> 
    </div>
    
  );
}

export default TNMap