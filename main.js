//Initialize map
var map = L.map('map').setView([28.65, 77.23], 17);

//Add Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Variables to store coordinates
let lat, long;
let locationMarker;

// Button click handler
document.getElementById("fml-button").addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Set variables
            lat = position.coords.latitude;
            long = position.coords.longitude;

            console.log("Latitude:", lat);
            console.log("Longitude:", long);

            // Remove previous marker if exists
            if (locationMarker) {
                map.removeLayer(locationMarker);
            }

            // Add marker to map
            locationMarker = L.marker([lat, long]).addTo(map);

            // Center map
            map.setView([lat, long], 17);
        },
        (error) => {
            console.error(error);
            alert("Error getting location: " + error.message);
        }
    );
});
