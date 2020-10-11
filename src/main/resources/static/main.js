window.apikey = '7jpVICkHD62xEq99QYiUdXsyRHzDFRXGccIOh64e99U'

function addPolylineToMap(map) {
  var strip = new H.geo.LineString();
  strip.pushPoint({lat:53.3477, lng:-6.2597});
  strip.pushPoint({lat:51.5008, lng:-0.1224});
  strip.pushPoint({lat:48.8567, lng:2.3508});
  strip.pushPoint({lat:52.5166, lng:13.3833});

  map.addObject(new H.map.Polyline(
    strip, { style: { lineWidth: 4 }}
  ));
}

var matrix = [
  [new H.geo.Point(41.759876, 12.942710), 'red'],
  [new H.geo.Point(41.768711, 12.947602), 'orange'],
  [new H.geo.Point(41.772936, 12.956271), 'yellow'],
  [new H.geo.Point(41.773704, 12.964082), 'green'],
  [new H.geo.Point(41.770824, 12.975497), 'blue'],
  [new H.geo.Point(41.764230, 12.980647), 'indigo'],
  [new H.geo.Point(41.758596, 12.982965), 'violet']
];

var rainbowGroup = new H.map.Group();

function drawRainbow(map) {
  map.addObject(rainbowGroup);
  for (var i = 0, len = matrix.length-1; i < len; i++) {
    addRainbowSegment(matrix[i], matrix[i+1], map);
  }
}

function addRainbowSegment(point, nextPoint, map) {
  var strip = new H.geo.LineString();
  strip.pushPoint(point[0]);
  strip.pushPoint(nextPoint[0]);
  rainbowGroup.addObject(new H.map.Polyline(
    strip, { style: { lineWidth: 20, strokeColor: point[1] }}
  ));
}