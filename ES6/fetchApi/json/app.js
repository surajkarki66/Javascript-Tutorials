const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

 // Making a marker with a custom icon
 const issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [80, 60],
    iconAnchor: [25, 16]
  });
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);
let firstTime = true;   
const lat = document.getElementById('lat');
const lon = document.getElementById('lon');
const vel = document.getElementById('velo');
const con = document.getElementById('con');
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getIss() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude, velocity } = data;
    marker.setLatLng([latitude, longitude]);
    circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 1.5,   
        radius: 500
    }).addTo(mymap)
    if (firstTime) {
        mymap.setView([latitude, longitude], 5);
        firstTime = false;
    }   
    lat.textContent = latitude.toFixed(2);
    lon.textContent = longitude.toFixed(2);
    vel.textContent = velocity.toFixed(2);  
    getCountry(latitude, longitude);

}

async function getCountry(lat, lon) {
    const url = `https://api.wheretheiss.at/v1/coordinates/${lat},${lon}`;
    const response = await fetch(url);
    const data = await response.json();
    const {country_code} = data;
    con.textContent = country_code;
    
}

setInterval(getIss, 1000); 