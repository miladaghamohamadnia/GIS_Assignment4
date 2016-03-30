	var map = L.map('map').setView([40.62, -74.02], 11);
	var tileLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    subdomains: ['a','b','c','d'],
	    mapId: 'rakshak.l937n12c',
	    token: 'pk.eyJ1IjoicmFrc2hhayIsImEiOiJ5cHhqeHlRIn0.Vi87VjI1cKbl1lhOn95Lpw'
		});

	tileLayer.addTo(map);
	var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [20, 20],
        iconAnchor:   [0, 0],
        popupAnchor:  [0, 0]
    }
	});



 // load GeoJSON from an external file
 $.getJSON("596acres.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data).addTo(map);
  
//  L.geoJson(data).addTo(map).bindPopup("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
  });

map.on('click', function(e) {
 // load GeoJSON from an external file
 $.getJSON("596acres.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data).addTo(map).bindPopup("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
  });

});

 