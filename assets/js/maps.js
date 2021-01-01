    function initMap() {
        let map = new google.maps.Map(document.getElementById("maps"), {
            zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
            
            var locations = [
                { lat: 43.217, lng: 2.348 },
                { lat: 41.084045, lng: -73.874245 },
                { lat: 40.754932, lng: -73.984016 }
            ];
            
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            new MarkerClusterer(map, markers, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
            
  });

}

            





