let sww = [
    {lat:20.683281 ,long:-88.568664, popmsg:"<b>Čičenica</b><br>Meksika" },
    {lat:-22.951766 ,long:-43.210703, popmsg:"<b>Kristus Pestītājs</b><br>Brazīlija" }, 
    {lat:41.890259 ,long:12.492383, popmsg:"<b>Kolizejs</b><br>Itālija" }, 
    {lat:40.430901 ,long:116.564519, popmsg:"<b>Lielais Ķīnas mūris</b><br>Ķīna" },
    {lat:-13.162806 ,long:-72.545417, popmsg:"<b>Maču Pikču</b><br>Peru" },
    {lat:30.328467 ,long:35.444518, popmsg:"<b>Petra</b><br>Jordānija>" },
    {lat:27.174989 ,long:78.042042, popmsg:"<b>Tadžmahāls</b><br>Indija" },
];

let map = new L.map('map').setView([0, 0], 2); 
// 56.966746, 24.163062    - Domina shopping lat un long

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let activeMarker = null;

function show(index) {
    map.setView([sww[index].lat, sww[index].long], 16);

    if (activeMarker) {
        map.removeLayer(activeMarker);
        activeMarker = null;
    }

    var marker = L.marker([sww[index].lat, sww[index].long]).addTo(map);
    marker.bindPopup(sww[index].popmsg).openPopup();
    activeMarker = marker;
}