var map = L.map('map').setView([28.65, 77.23], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('fml-button').addEventListener('click', () => {
  if ("geoloation" in navigator) {
    navigator.geoloation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log('Your location: ${lat}, ${long}'); //for testing purpose only
      },
      (error) => {
        alert("Please enable location services.");
      }
    );
  }
  else {
    alert("Geolocation is not supported by your browser");
  }
});

var marker = L.marker([28.65, 77.23]).addTo(map);
