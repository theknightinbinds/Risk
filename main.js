function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(53.9410509, -3.2284443),
          zoom: 6
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);