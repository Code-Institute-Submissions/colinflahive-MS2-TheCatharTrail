// Leaflet Tiles for the Map
let mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

// Initial Map creation
let map = L.map("maps", {
    layers: [mapTileLayers],
    center: [43.209, 2.344],
    zoom: 8
});

// Custom Markers of castles
let carcassonne = L.marker([43.206, 2.364]).addTo(map);
let lastours = L.marker([43.3370, 2.3780]).addTo(map);
let puilaurens = L.marker([42.80361, 2.29944]).addTo(map);
let queribus = L.marker([42.8368, 2.6215]).addTo(map);
let peyrepertuse = L.marker([42.8710, 2.5548]).addTo(map);
