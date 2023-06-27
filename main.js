import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './reset.css';
import './style.css';

import leaflet from 'leaflet';

const submit = document.querySelector('.input');

window.addEventListener('load', function () {
  const input = document.querySelector('#input');
  input.value = '';
})

const response = async function (event) {
  event.preventDefault();
  try {
    const input = document.querySelector('#input').value;
    const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${input}`);
    const data = res.data;

    document.querySelector('#ip').textContent = data.ip;
    document.querySelector('#location').textContent = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
    document.querySelector('#timezone').textContent = `UTC ${data.location.timezone}`;
    document.querySelector('#isp').textContent = data.isp;

    updateMap(data.location.lat, data.location.lng);
  } catch (err) {
    console.error(err, "API response failed");
  }
}

submit.addEventListener('submit', response)


const map = leaflet.map('map').setView([51.505, -0.09], 13);

const customIcon = leaflet.icon({
  iconUrl: '/icon-location.svg',
  iconAnchor: [22, 94]
});

leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = leaflet.marker([51.5, -0.09], { icon: customIcon }).addTo(map);

const updateMap = (lat, lng) => {
  map.setView([lat, lng], 13);
  marker.setLatLng([lat, lng]);
}
