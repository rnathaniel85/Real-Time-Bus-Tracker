// This array contains the coordinates for all bus stops between MIT and Harvard

const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoieW92aW55bDAxIiwiYSI6ImNrbnI3Z3NqejBqYm0yeHF2dHY0NXFucjUifQ.1JtTpTT_lvEEN_9suWSCsg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });

  
  
  map.on('load', function () {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
        [-71.092761, 42.357575],
        [-71.093729, 42.359244],
        [-71.094915, 42.360175],
        [-71.0958, 42.360698],
        [-71.099558, 42.362953],
        [-71.103476, 42.365248],
        [-71.106067, 42.366806],
        [-71.108717, 42.368355],
        [-71.110799, 42.369192],
        [-71.113095, 42.370218],
        [-71.115476, 42.372085],
        [-71.117585, 42.373016],
        [-71.118625, 42.374863]
      ]
    }
    }
    });
    map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': 'red',
    'line-width': 8
    }
    });
    });
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  let marker = new mapboxgl.Marker(busStops).setLngLat([-71.092761, 42.357575]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });
  
  