var map;
function initialize() {
  var centrepoint = new google.maps.LatLng(53.9410509,-3.2284443);
  var mapOptions = {
    zoom: 6,
    center: centrepoint,
	disableDefaultUI: true
  }

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  google.maps.event.addListener(map, 'click', addPoint);
  var ctaLayer = new google.maps.KmlLayer({
    url: 'http://nemezisproject.co.uk/download/google-maps-playground/England.kmz'
  });
  ctaLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

 
function addPoint(event) { 
    var marker = new google.maps.Marker({
        position: event.latLng,
        map: map,
        draggable: true
    });
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', function() {
        marker.setMap(null);
        for (var i = 0, I = markers.length; i < I && markers[i] != marker; ++i);
        markers.splice(i, 1);
    });
    google.maps.event.addListener(marker, 'dragend', function() {
 
    });
}