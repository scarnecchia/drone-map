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

/*map.on('click', function(ev) {
    // ev.latlng gives us the coordinates of
    // the spot clicked on the map.
    var fc = ev.latlng;
    var c = ev.latlng;

    var geojson = [
          {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [fc.lng, fc.lat]
        },
        "properties": {
          "marker-color": "#ff8888"
        },
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [c.lng, c.lat]
        },
        "properties": {
          "marker-color": "#ff8888"
        }
      }, 
        {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [fc.lng, fc.lat],
            [c.lng, c.lat]
          ]
        },
        "properties": {
          "stroke": "#000",
          "stroke-opacity": 0.5,
          "stroke-width": 4
        }
      }
    ];

distanceLayer.setGeoJSON(geojson);

    var container = document.getElementById('distance');
    container.innerHTML = (fc.distanceTo(c)).toFixed(0) + 'm';
});*/

distanceLayer = L.mapbox.featureLayer().addTo(map);

L.control.locate({
    position: 'topleft',
    drawCircle: true,
    follow: true,
}).addTo(map);

map.on('locationfound', function(e) { 
  var fc = e.latlng;
  
  map.on('click', function(e) {
    var c = e.latlng;
    var geojson = [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [c.lng, c.lat]
        },
        "properties": {
          "marker-color": "#ff8888"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [fc.lng, fc.lat],
            [c.lng, c.lat]
          ]
        },
        "properties": {
          "stroke": "#000",
          "stroke-opacity": 0.5,
          "stroke-width": 4
        }
      }
    ];

distanceLayer.setGeoJSON(geojson);

var container = document.getElementById('distance');
container.innerHTML = ((fc.distanceTo(c)/1000) * 0.621).toFixed(3) + 'miles';
}),

map.on('stopfollowing', function() {
  map.off()
});
});

/*lc.start();

map.on('startfollowing', function(e) {
  var fc = e.latlng
});*/
L.control.scale().addTo(map);
L.control.layers({
'Base Map': L.mapbox.tileLayer('scarndp.lg4e20pk').addTo(map),
'High Contrast Map': L.mapbox.tileLayer('scarndp.lih6be8j'),
}, {
  'Data': L.mapbox.tileLayer('scarndp.698e2446').addTo(map)
}).setPosition('topleft').addTo(map);
map.legendControl.addLegend(document.getElementById('legend').innerHTML)
/*map.infoControl.addInfo('This is an update to <a href="https://www.mapbox.com/drone/no-fly/">"Dont Fly Drones Here"</a> map with new resources and input from the <a href="https://www.facebook.com/groups/uavLegalNews/">UAV community</a>. Currently the map shows US airports with a 5-mile radius, US National Parks, Military Bases, Sports Venues, and Temporary Flight Restrictions. The map also includes sensitive sites where it is inadvisable to fly, such as power plants and prisons.')*/
map.attributionControl.addAttribution('<a href="https://github.com/mapbox/drone-feedback">Mapbox</a> | Stadiums courtesy <a href="http://www.suasnews.com/about/">Gary Mortimer</a> | <a href="https://nfdc.faa.gov/xwiki/bin/view/NFDC/56DaySub-2015-03-05">FAA National Flight Data Center</a>');
