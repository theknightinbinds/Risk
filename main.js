function initialize() {
  var centrepoint = new google.maps.LatLng(53.9410509,-3.2284443);
  var mapOptions = {
    zoom: 6,
    center: centrepoint
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var ctaLayer = new google.maps.KmlLayer({
    url: 'http://nemezisproject.co.uk/download/google-maps-playground/England.kmz'
  });
  ctaLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);