var southWest = L.latLng(8.538, -178.989),
    northEast = L.latLng(72.419, -39.034),
    bounds = L.latLngBounds(southWest, northEast);

    L.mapbox.accessToken = 'pk.eyJ1Ijoic2Nhcm5kcCIsImEiOiI1eU4zX2I4In0.rH256QXaDdRqLx6yivSVow';
    var map = L.mapbox.map('map', 'scarndp.lg4e20pk', {
    maxZoom: 16,
    minZoom: 4,
    maxBounds: bounds,
    scrollWheelZoom: true,
    infoControl: false,
    shareControl: true,
    legendControl: true
})
.addControl(L.mapbox.geocoderControl('mapbox.places'))
.setView([40.044, -98.130], 5);

var airPortURL = 'sources/geojson/5_mile_airport.geojson';
var milURL = 'sources/geojson/us_military.geojson';
var parkURL = 'sources/geojson/us_national_park.geojson';
var tfrURL = 'https://tempflightrestrictions.herokuapp.com/tfr';
var powerPlantURL = 'sources/geojson/USPowerPlants2.geojson';
var prisonsURL = 'sources/geojson/prisonsUS2.geojson';
var sportsVenue = 'sources/geoJson/usSportsVenues.geojson';

var airPortStyle = {
   'fillColor': '#808080',
   'fillOpacity': 0.5,
   'stroke': false,
   'lineJoin': 'round'
}

var milStyle = {
   'fillColor': '#6B8E23',
   'fillOpacity': 0.6,
   'stroke': false,
   'lineJoin': 'round'
  }

var parkStyle = {
   'fillColor': '#663399',
   'fillOpacity': 0.6,
   'stroke': false,
   'lineJoin': 'round'
}

var tfrStyle = {
   'fillColor': '#FCBA05',
   'fillOpacity': 0.6,
   'stroke': false,
   'lineJoin': 'round'
}

var powerPlantStyle = {
   'fillColor': '#0000FF',
   'fillOpacity': 0.6,
   'stroke': false,
   'lineJoin': 'round'
}

var prisonStyle = {
   'fillColor': '#993300',
   'fillOpacity': 0.6,
   'stroke': false,
   'lineJoin': 'round'
}

    $.getJSON(milURL, function(data){
    // add GeoJSON layer to the map once the file is loaded
    var usMilitary = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        //layer.bindPopup(feature.properties.INSTALLATI).addTo(map);
        layer.setStyle(milStyle);
            var pop = L.popup();
            layer.on('mouseover', function(e){
                var content = layer.feature.properties.INSTALLATI;
                pop.setLatLng(e.latlng)
                   .setContent(content)
                   .openOn(map);

                layer.on('mousemove', function(e) {
                    pop.setLatLng(e.latlng);
                });
            });
            layer.on('mouseout', function(e){
                map.closePopup();
            })
        }
    }).addTo(map);
    })

    $.getJSON(parkURL, function(data){
    // add GeoJSON layer to the map once the file is loaded
    var usParks = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        //layer.bindPopup(feature.properties.PARKNAME).addTo(map);
        layer.setStyle(parkStyle);
            var pop = L.popup();
            layer.on('mouseover', function(e){
                var content = layer.feature.properties.PARKNAME;
                pop.setLatLng(e.latlng)
                   .setContent(content)
                   .openOn(map);

                layer.on('mousemove', function(e) {
                    pop.setLatLng(e.latlng);
                });
            });
            layer.on('mouseout', function(e){
                map.closePopup();
            })
        }
    }).addTo(map);
    })

$.getJSON(tfrURL, function(data){
    var tfr =  L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.setStyle(tfrStyle);

            var pop = L.popup();
            layer.on('mouseover', function(e){
                var content = layer.feature.properties.name;
                pop.setLatLng(e.latlng)
                   .setContent(content)
                   .openOn(map);

                layer.on('mousemove', function(e) {
                    pop.setLatLng(e.latlng);
                });
            });
            layer.on('mouseout', function(e){
                map.closePopup();
            })
        }
    }).addTo(map);
    })

   $.getJSON(powerPlantURL, function(data){
    var powerPlant = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.setStyle(powerPlantStyle);
        var pop = L.popup();
            layer.on('mouseover', function(e){
                var content = layer.feature.properties.name;
                pop.setLatLng(e.latlng)
                   .setContent(content)
                   .openOn(map);

                layer.on('mousemove', function(e) {
                    pop.setLatLng(e.latlng);
                });
            });
            layer.on('mouseout', function(e){
                map.closePopup();
            })
    },
            pointToLayer: function (feature, latlng) {
                return L.circle(latlng, 800).addTo(map);
}
  });
});

$.getJSON(prisonsURL, function(data){
    var prisons = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.setStyle(prisonStyle);
        var pop = L.popup();
            layer.on('mouseover', function(e){
                var content = layer.feature.properties.Name;
                pop.setLatLng(e.latlng)
                   .setContent(content)
                   .openOn(map);

                layer.on('mousemove', function(e) {
                    pop.setLatLng(e.latlng);
                });
            });
            layer.on('mouseout', function(e){
                map.closePopup();
            })
    },
            pointToLayer: function (feature, latlng) {
                return L.circle(latlng, 200).addTo(map);
}
  });
});

       $.getJSON(airPortURL, function(data){
    // add GeoJSON layer to the map once the file is loaded
    var airPort = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        //layer.bindPopup(feature.properties.name).addTo(map);
        layer.setStyle(airPortStyle);
            var pop = L.popup();
            layer.on('mouseover', function(e){
                var content = layer.feature.properties.name;
                pop.setLatLng(e.latlng)
                   .setContent(content)
                   .openOn(map);

                layer.on('mousemove', function(e) {
                    pop.setLatLng(e.latlng);
                });
            });
            layer.on('mouseout', function(e){
                map.closePopup();
            })
        }
    }).addTo(map);
    })

$('.mapbox-share').click(function() {
    $('.info').fadeOut();
    $('.top-bar').fadeIn();
    $('.mapbox-embed').val('<iframe width="100%" height="500px" frameBorder="0" src="' + window.location.href + '"></iframe>')
});

L.control.locate().addTo(map);
map.legendControl.addLegend(document.getElementById('legend').innerHTML)
map.attributionControl.addAttribution('<a href="https://github.com/mapbox/drone-feedback">Mapbox</a>');