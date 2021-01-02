    function initMap() {
        let map = new google.maps.Map(document.getElementById("maps"), {
            zoom: 6,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
            
            var locations = [
                { lat: 43.206, lng: 2.364 },
                { lat: 43.3370, lng: 2.3780 },
                { lat: 42.80361, lng: 2.29944 },
                { lat: 42.5214, lng: 2.3326 },
                { lat: 42.8783, lng: 2.5056 }
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






