// Initialize map
var map = L.map('map').setView([28.65, 77.23], 17);

// Add Base Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Handle button click
document.getElementById('fml-button').addEventListener('click', function () {
    map.locate({ setView: true, maxZoom: 17 });
});

// When location is found
map.on('locationfound', function (e) {
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are here").openPopup();

    L.circle(e.latlng, { radius: e.accuracy }).addTo(map);
});

// When location fails
map.on('locationerror', function (e) {
    alert("Location access denied or unavailable.");
});

// var marker = L.marker([28.65, 77.23]).addTo(map);


