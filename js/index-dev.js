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

var restricted = L.mapbox.tileLayer('scarndp.698e2446').addTo(map);
var restrictedGrid = L.mapbox.gridLayer('scarndp.698e2446').addTo(map);
var restrictedControl = L.mapbox.gridControl(restrictedGrid).addTo(map);
restrictedControl.options.follow = true;

var tfrURL = 'https://tempflightrestrictions.herokuapp.com/tfr';
var powerPlantURL = 'sources/geojson/USPowerPlants2.geojson';
var prisonsURL = 'sources/geojson/prisonsUS2.geojson';

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

$('.mapbox-share').click(function() {
    $('.info').fadeOut();
    $('.top-bar').fadeIn();
    $('.mapbox-embed').val('<iframe width="100%" height="500px" frameBorder="0" src="' + window.location.href + '"></iframe>')
});

map.gridControl.options.follow = true;
map.gridControl.options.pinnable = false;
map.gridControl._popup.options.maxWidth = 600;

L.control.locate().addTo(map);
L.control.scale().addTo(map);
map.legendControl.addLegend(document.getElementById('legend').innerHTML)
map.attributionControl.addAttribution('<a href="https://github.com/mapbox/drone-feedback">Mapbox</a>');