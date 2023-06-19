import 'leaflet/dist/leaflet.css';
import './reset.css';
import './style.css';

import L from 'leaflet';

document.querySelector('#result').innerHTML = `
<li id="ip_address" class="result__item">
  <h3 class="li_title">Ip Address</h3>
  <h2 class="li_text">192.212.174.101</h2>
</li>
<li class="line"></li>
<li id="location" class="result__item">
  <h3 class="li_title">Location</h3>
  <h2 class="li_text">Brooklyn, NY 10001</h2>
</li>
<li class="line"></li>
<li id="timezone" class="result__item">
  <h3 class="li_title">Timezone</h3>
  <h2 class="li_text">UTC - 05:00</h2>
</li>
<li class="line"></li>
<li id="isp" class="result__item">
  <h3 class="li_title">ISP</h3>
  <h2 class="li_text">SpaceX Starlink</h2>
</li>
`

// Create a map instance
const map = L.map('map').setView([51.505, -0.09], 13);

const customIcon = L.icon({
  iconUrl: '/icon-location.svg',
  iconAnchor: [12, 41],
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Add a marker to the map
L.marker([51.5, -0.09], { icon: customIcon }).addTo(map);
