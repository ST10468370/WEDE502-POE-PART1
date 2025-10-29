//Intializing of map and set view
const map = L.map('map').setView([-34.224872627457046, 19.43684710966597], 13)

// OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);