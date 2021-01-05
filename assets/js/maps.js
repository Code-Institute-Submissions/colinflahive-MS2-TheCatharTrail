// Leaflet Tiles for the Map
let mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

// Initial Map creation
let map = L.map("maps", {
    layers: [mapTileLayers],
    center: [43.209, 2.344],
    zoom: 9
});

// Custom Markers of castles
let carcassonne = L.marker([43.206, 2.364]).addTo(map);
let lastours = L.marker([43.3370, 2.3780]).addTo(map);
let puilaurens = L.marker([42.80361, 2.29944]).addTo(map);
let queribus = L.marker([42.8368, 2.6215]).addTo(map);
let peyrepertuse = L.marker([42.8710, 2.5548]).addTo(map);

/*-------Carcassonne Map-------*/

let carcassonneMapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

let carcassonneMap = L.map("carcassonneMaps", {
    layers: [carcassonneMapTileLayers],
    center: [43.209, 2.344],
    zoom: 15
});

// Custom Markers of Hotels and Restaurants nearby
let carcassonneCastle = L.marker([43.206, 2.364]).addTo(carcassonneMap);
let hotelDeLaCiteCarcassonne = L.marker([43.205627, 2.362696]).addTo(carcassonneMap);//Hotel Carcassonne
let laBrassens = L.marker([43.211072, 2.356299]).addTo(carcassonneMap);// Restaurant Carcassonne


/*-------Carcassonne Markers-------*/ 

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
polygon.bindPopup("I am a polygon.");

var popup = L.popup(carcassonneMaps)
    .setLatLng([43.206, 2.364])
    .setContent("Cite De Carcassonne")
    .openOn(carcassonneMap);

var popup = L.popup(carcassonneMap)
    .setLatLng([43.205627, 2.362696])
    .setContent("Hotel De La Cite, Carcassonne")
    .openOn(hotelDeLaCiteCarcassonne);

/*-------Lastours Map-------*/

let lastoursMapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

let lastoursMap = L.map("lastoursMaps", {
    layers: [lastoursMapTileLayers],
    center: [43.33632, 2.37836],
    zoom: 13
});

// Custom Markers of Hotels and Restaurants nearby
let lastoursCastle = L.marker([43.3370, 2.3780]).addTo(lastoursMap);
let maisonDeLaura = L.marker([43.3292, 2.3583]).addTo(lastoursMap);//Hotel Maison de Laura
let lepuitsDuTresor = L.marker([43.333941, 2.379012]).addTo(lastoursMap);//Restaurant Le Puits Du Tresor


    

/*-------Puilaurens Map-------*/

let puilaurensMapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

let puilaurensMap = L.map("puilaurensMaps", {
    layers: [puilaurensMapTileLayers],
    center: [42.80361, 2.29944],
    zoom: 12
});

// Custom Markers of Hotels and Restaurants nearby
let puilaurensCastle = L.marker([42.80361, 2.29944]).addTo(puilaurensMap);
let leRebenty = L.marker([42.815252, 2.227585]).addTo(puilaurensMap);//Restaurant Le Rebenty
let hotelAxat = L.marker([42.804642, 2.233958]).addTo(puilaurensMap);//Hotel Hotel Axat

/*-------Queribus Map-------*/

let queribusMapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

let queribusMap = L.map("queribusMaps", {
    layers: [queribusMapTileLayers],
    center: [42.8368, 2.6215],
    zoom: 12
});

// Custom Markers of Hotels and Restaurants nearby
let queribusCastle = L.marker([42.8368, 2.6215]).addTo(queribusMap);
let lePichenouille = L.marker([42.809696, 2.595177]).addTo(queribusMap);//Restaurant Le Pichenouille
let laPauseCathare = L.marker([42.809334, 2.500827]).addTo(queribusMap);//Hotel La Pause Cathare
let gorgeDeGalamus = L.marker([42.837049, 2.481107]).addTo(queribusMap);//Activity Gorge De Galamus

/*-------Peyrepertuse Map-------*/

let peyrepertuseMapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

let peyrepertuseMap = L.map("peyrepertuseMaps", {
    layers: [peyrepertuseMapTileLayers],
    center: [42.8710, 2.5548],
    zoom: 12
});

// Custom Markers of Hotels and Restaurants nearby
let peyrepertuseCastle = L.marker([42.8710, 2.5548]).addTo(peyrepertuseMap);
let monGrainDeSel = L.marker([42.878700, 2.510]).addTo(peyrepertuseMap);//Restaurant Mon Grain de Sel
let chambreDhotes = L.marker([42.878940, 2.504700]).addTo(peyrepertuseMap);//Hotel Chambre d'Hotes, Aude.

