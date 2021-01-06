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
L.marker([43.206, 2.364]).addTo(map).bindPopup("Carcassonne Castle");
L.marker([43.3370, 2.3780]).addTo(map).bindPopup("Lastours Castle");
L.marker([42.80361, 2.29944]).addTo(map).bindPopup("Puilaurens Castle");
L.marker([42.8368, 2.6215]).addTo(map).bindPopup("Queribus Castle");
L.marker([42.8710, 2.5548]).addTo(map).bindPopup("Peyrepertuse Castle");

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
L.marker([43.206, 2.364]).addTo(carcassonneMap).bindPopup("Cite De Carcassonne");
L.marker([43.205627, 2.362696]).addTo(carcassonneMap).bindPopup("Hotel De La Cite, Carcassonne");//Hotel Carcassonne
L.marker([43.211072, 2.356299]).addTo(carcassonneMap).bindPopup("La Brassen Rest");// Restaurant Carcassonne


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
L.marker([43.3370, 2.3780]).addTo(lastoursMap).bindPopup("Lastours Castle");
L.marker([43.3292, 2.3583]).addTo(lastoursMap).bindPopup("Maison De Laura");//Hotel Maison de Laura
L.marker([43.333941, 2.379012]).addTo(lastoursMap).bindPopup("Le Puits Du Tresor");//Restaurant Le Puits Du Tresor


    

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
L.marker([42.80361, 2.29944]).addTo(puilaurensMap).bindPopup("Puilaurens Castle");
L.marker([42.815252, 2.227585]).addTo(puilaurensMap).bindPopup("Le Rebenty Restaurant***");//Restaurant Le Rebenty
L.marker([42.804642, 2.233958]).addTo(puilaurensMap).bindPopup("Hotel Axat");//Hotel Hotel Axat

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
L.marker([42.8368, 2.6215]).addTo(queribusMap).bindPopup("Queribus Castle");
L.marker([42.809696, 2.595177]).addTo(queribusMap).bindPopup("Le Pichenouille, Restaurant");//Restaurant Le Pichenouille
L.marker([42.809334, 2.500827]).addTo(queribusMap).bindPopup("La Pause Cathare, Hotel");//Hotel La Pause Cathare
L.marker([42.837049, 2.481107]).addTo(queribusMap).bindPopup("Gorge De Galamus***");//Activity Gorge De Galamus

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
L.marker([42.8710, 2.5548]).addTo(peyrepertuseMap).bindPopup("Peyrepertuse Castle");
L.marker([42.878700, 2.510]).addTo(peyrepertuseMap).bindPopup("Mon Grain de Sel, Restaurant");//Restaurant Mon Grain de Sel
L.marker([42.878940, 2.504700]).addTo(peyrepertuseMap).bindPopup("Chambre d'Hotes, Hotel");//Hotel Chambre d'Hotes, Aude.

