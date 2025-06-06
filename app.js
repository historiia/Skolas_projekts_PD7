let sww = [
    {name:'Čičenica', lat:20.683281 ,long:-88.568664, popmsg:"<br>Meksika" },
    {name:'Kristus Pestītājs', lat:-22.951766 ,long:-43.210703, popmsg:"<br>Brazīlija" }, 
    {name:'Kolizejs', lat:41.890259 ,long:12.492383, popmsg:"<br>Itālija" }, 
    {name:'Lielais Ķīnas mūris', lat:40.430901 ,long:116.564519, popmsg:"<br>Ķīna" },
    {name:'Maču Pikču', lat:-13.162806 ,long:-72.545417, popmsg:"<br>Peru" },
    {name:'Petra', lat:30.328467 ,long:35.444518, popmsg:"<br>Jordānija" },
    {name:'Tadžmahāls', lat:27.174989 ,long:78.042042, popmsg:"<br>Indija" },
]


let map = new L.map('map');
map.setView([56.966746, 24.163062], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([56.966746, 24.163062]).addTo(map);
marker.bindPopup("Domina shopping center").openPopup();