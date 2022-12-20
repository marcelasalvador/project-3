// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import axios from 'axios';

// const TNMap = () => {
//   const [counties, setCounties] = useState([]);

//   useEffect(() => {
//     axios.get("https://disease.sh/v3/covid-19/jhucsse/counties/")
//       .then(response => {
//         setCounties(response.data.filter(county => county.province === 'Tennessee'));
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   useEffect(() => {
//     const mapElements = L.map('map').setView([36.1627, -86.7816], 6);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(mapElements);

//     counties.forEach(county => {
//       const { latitude, longitude } = county.coordinates;
//       const { confirmed, deaths } = county.stats;

//       L.marker([latitude, longitude])
//         .bindPopup(`<p>Confirmed: ${confirmed}</p><p>Deaths: ${deaths}</p>`)
//         .addTo(mapElements);
//     });
//   }, [counties]);

//   return (
//     <div id="map"></div>
//   );
// };

// export default TNMap;
