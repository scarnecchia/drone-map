var southWest = L.latLng(8.538, -178.989),
    northEast = L.latLng(72.419, -39.034),
    bounds = L.latLngBounds(southWest, northEast);

    L.mapbox.accessToken = 'pk.eyJ1Ijoic2Nhcm5kcCIsImEiOiI1eU4zX2I4In0.rH256QXaDdRqLx6yivSVow';
    var map = L.mapbox.map('map', null, {
    maxZoom: 16,
    minZoom: 4,
    maxBounds: bounds,
    infoControl: false,
    shareControl: true,
    legendControl: true,
    gridControl: true
})

.addControl(L.mapbox.geocoderControl('mapbox.places'))
.setView([40.044, -98.130], 5);

var tfrURL = 'https://tempflightrestrictions.herokuapp.com/tfr';
/*var powerPlantURL = 'sources/USPowerPlants2.geojson';
var prisonsURL = 'sources/prisonsUS2.geojson';*/

var tfrStyle = {
   'fillColor': '#FCBA05',
   'fillOpacity': 0.6,
   'stroke': false,
   'lineJoin': 'round'
}

var powerPlantStyle = {
   'fillColor': '#aaaaaa',
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

/*   $.getJSON(powerPlantURL, function(data){
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
}); */

$('.mapbox-share').click(function() {
    $('.info').fadeOut();
    $('.top-bar').fadeIn();
    $('.mapbox-embed').val('<iframe width="100%" height="500px" frameBorder="0" src="' + window.location.href + '"></iframe>')
});

$('.js-close').click(function() {
    $('.info').fadeOut();
    $('.top-bar').fadeIn();
}); 

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


L.control.locate().addTo(map);
L.control.scale().addTo(map);
L.control.layers({
'Base Map': L.mapbox.tileLayer('scarndp.lg4e20pk').addTo(map),
'High Contrast Map': L.mapbox.tileLayer('scarndp.lih6be8j'),
}, {
  'Data': L.mapbox.tileLayer('scarndp.698e2446').addTo(map)
}).setPosition('topleft').addTo(map);
map.legendControl.addLegend(document.getElementById('legend').innerHTML)
/*map.infoControl.addInfo('This is an update to <a href="https://www.mapbox.com/drone/no-fly/">"Dont Fly Drones Here"</a> map with new resources and input from the <a href="https://www.facebook.com/groups/uavLegalNews/">UAV community</a>. Currently the map shows US airports with a 5-mile radius, US National Parks, Military Bases, Sports Venues, and Temporary Flight Restrictions. The map also includes sensitive sites where it is inadvisable to fly, such as power plants and prisons.')*/
map.attributionControl.addAttribution('<a href="https://github.com/mapbox/drone-feedback">Mapbox</a>');
