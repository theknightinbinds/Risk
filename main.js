//if ('WebSocket' in window){
/* WebSocket is supported. You can proceed with your code*/
//This variable is what the map is stored in
var map;
//This array stores all the markers
var markers = new Array();
var marker_locations = new Array();
var red_territories = new Array();
var blue_territories = new Array();
var yourTurn = true;
var armies = [3, 3];
var moves = [5, 5];
//The initialize function centres the map on a certain longitude and latitude
//It also sets the default zoom and disables the UI
function initialize() {
  var centrepoint = new google.maps.LatLng(0.0000000, 0.0000000);
  var mapOptions = {
    zoom: 2,
    center: centrepoint,
	disableDefaultUI: true
  }
//This draws the map
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  google.maps.event.addListener(map, 'click', addPoint); 
//This stores the longitude and latitude for the bermuda triangle
  var triangleCoords = [
    new google.maps.LatLng(25.774252, -80.190262),
    new google.maps.LatLng(18.466465, -66.118292),
    new google.maps.LatLng(32.321384, -64.75737),
    new google.maps.LatLng(25.774252, -80.190262)
  ];
  //All these variables store the longitude and the latitude for the gird boxes
  //They will be plotted later
  var box1 = [ 
  new google.maps.LatLng(85,-180),
  new google.maps.LatLng(85,-120),
  new google.maps.LatLng(75,-120),
  new google.maps.LatLng(75,-180)
  ];
   var box2 = [ 
  new google.maps.LatLng(85,-120),
  new google.maps.LatLng(85,-60),
  new google.maps.LatLng(75,-60),
  new google.maps.LatLng(75,-120)
  ];
   var box3 = [ 
  new google.maps.LatLng(85,-60),
  new google.maps.LatLng(85,-0),
  new google.maps.LatLng(75,-0),
  new google.maps.LatLng(75,-60)
  ];
  var box4 = [ 
  new google.maps.LatLng(85,-0),
  new google.maps.LatLng(85,60),
  new google.maps.LatLng(75,60),
  new google.maps.LatLng(75,-0)
  ];
  var box5 = [ 
  new google.maps.LatLng(85,60),
  new google.maps.LatLng(85,120),
  new google.maps.LatLng(75,120),
  new google.maps.LatLng(75,60)
  ];
  var box6 = [ 
  new google.maps.LatLng(85,120),
  new google.maps.LatLng(85,180),
  new google.maps.LatLng(75,180),
  new google.maps.LatLng(75,120)
  ];
    var box7 = [ 
  new google.maps.LatLng(75,-180),
  new google.maps.LatLng(75,-120),
  new google.maps.LatLng(45,-120),
  new google.maps.LatLng(45,-180)
  ];
   var box8 = [ 
  new google.maps.LatLng(75,-120),
  new google.maps.LatLng(75,-60),
  new google.maps.LatLng(45,-60),
  new google.maps.LatLng(45,-120)
  ];
   var box9 = [ 
  new google.maps.LatLng(75,-60),
  new google.maps.LatLng(75,-0),
  new google.maps.LatLng(45,-0),
  new google.maps.LatLng(45,-60)
  ];
  var box10 = [ 
  new google.maps.LatLng(75,-0),
  new google.maps.LatLng(75,60),
  new google.maps.LatLng(45,60),
  new google.maps.LatLng(45,-0)
  ];
  var box11 = [ 
  new google.maps.LatLng(75,60),
  new google.maps.LatLng(75,120),
  new google.maps.LatLng(45,120),
  new google.maps.LatLng(45,60)
  ];
  var box12 = [ 
  new google.maps.LatLng(75,120),
  new google.maps.LatLng(75,180),
  new google.maps.LatLng(45,180),
  new google.maps.LatLng(45,120)
  ];
   var box13 = [ 
  new google.maps.LatLng(45,-180),
  new google.maps.LatLng(45,-120),
  new google.maps.LatLng(0,-120),
  new google.maps.LatLng(0,-180)
  ];
   var box14 = [ 
  new google.maps.LatLng(45,-120),
  new google.maps.LatLng(45,-60),
  new google.maps.LatLng(0,-60),
  new google.maps.LatLng(0,-120)
  ];
   var box15 = [ 
  new google.maps.LatLng(45,-60),
  new google.maps.LatLng(45,-0),
  new google.maps.LatLng(0,-0),
  new google.maps.LatLng(0,-60)
  ];
  var box16 = [ 
  new google.maps.LatLng(45,-0),
  new google.maps.LatLng(45,60),
  new google.maps.LatLng(0,60),
  new google.maps.LatLng(0,-0)
  ];
  var box17 = [ 
  new google.maps.LatLng(45,60),
  new google.maps.LatLng(45,120),
  new google.maps.LatLng(0,120),
  new google.maps.LatLng(0,60)
  ];
  var box18 = [ 
  new google.maps.LatLng(45,120),
  new google.maps.LatLng(45,180),
  new google.maps.LatLng(0,180),
  new google.maps.LatLng(0,120)
  ];
   var box19 = [ 
  new google.maps.LatLng(0,-180),
  new google.maps.LatLng(0,-120),
  new google.maps.LatLng(-45,-120),
  new google.maps.LatLng(-45,-180)
  ];
   var box20 = [ 
  new google.maps.LatLng(0,-120),
  new google.maps.LatLng(0,-60),
  new google.maps.LatLng(-45,-60),
  new google.maps.LatLng(-45,-120)
  ];
   var box21 = [ 
  new google.maps.LatLng(0,-60),
  new google.maps.LatLng(0,-0),
  new google.maps.LatLng(-45,-0),
  new google.maps.LatLng(-45,-60)
  ];
  var box22 = [ 
  new google.maps.LatLng(0,-0),
  new google.maps.LatLng(0,60),
  new google.maps.LatLng(-45,60),
  new google.maps.LatLng(-45,-0)
  ];
  var box23 = [ 
  new google.maps.LatLng(0,60),
  new google.maps.LatLng(0,120),
  new google.maps.LatLng(-45,120),
  new google.maps.LatLng(-45,60)
  ];
  var box24 = [ 
  new google.maps.LatLng(0,120),
  new google.maps.LatLng(0,180),
  new google.maps.LatLng(-45,180),
  new google.maps.LatLng(-45,120)
  ];
  var box25 = [ 
  new google.maps.LatLng(-45,-180),
  new google.maps.LatLng(-45,-120),
  new google.maps.LatLng(-75,-120),
  new google.maps.LatLng(-75,-180)
  ];
   var box26 = [ 
  new google.maps.LatLng(-45,-120),
  new google.maps.LatLng(-45,-60),
  new google.maps.LatLng(-75,-60),
  new google.maps.LatLng(-75,-120)
  ];
   var box27 = [ 
  new google.maps.LatLng(-45,-60),
  new google.maps.LatLng(-45,-0),
  new google.maps.LatLng(-75,-0),
  new google.maps.LatLng(-75,-60)
  ];
  var box28 = [ 
  new google.maps.LatLng(-45,-0),
  new google.maps.LatLng(-45,60),
  new google.maps.LatLng(-75,60),
  new google.maps.LatLng(-75,-0)
  ];
  var box29 = [ 
  new google.maps.LatLng(-45,60),
  new google.maps.LatLng(-45,120),
  new google.maps.LatLng(-75,120),
  new google.maps.LatLng(-75,60)
  ];
  var box30 = [ 
  new google.maps.LatLng(-45,120),
  new google.maps.LatLng(-45,180),
  new google.maps.LatLng(-75,180),
  new google.maps.LatLng(-75,120)
  ];
  var box31 = [ 
  new google.maps.LatLng(-75,-180),
  new google.maps.LatLng(-75,-120),
  new google.maps.LatLng(-85,-120),
  new google.maps.LatLng(-85,-180)
  ];
   var box32 = [ 
  new google.maps.LatLng(-75,-120),
  new google.maps.LatLng(-75,-60),
  new google.maps.LatLng(-85,-60),
  new google.maps.LatLng(-85,-120)
  ];
   var box33 = [ 
  new google.maps.LatLng(-75,-60),
  new google.maps.LatLng(-75,-0),
  new google.maps.LatLng(-85,-0),
  new google.maps.LatLng(-85,-60)
  ];
  var box34 = [ 
  new google.maps.LatLng(-75,-0),
  new google.maps.LatLng(-75,60),
  new google.maps.LatLng(-85,60),
  new google.maps.LatLng(-85,-0)
  ];
  var box35 = [ 
  new google.maps.LatLng(-75,60),
  new google.maps.LatLng(-75,120),
  new google.maps.LatLng(-85,120),
  new google.maps.LatLng(-85,60)
  ];
  var box36 = [ 
  new google.maps.LatLng(-75,120),
  new google.maps.LatLng(-75,180),
  new google.maps.LatLng(-85,180),
  new google.maps.LatLng(-85,120)
  ];
  // Construct the polygon.
  bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#CC0099',
    fillOpacity: 0.35,
	clickable: false
  });
  square1 = new google.maps.Polygon({
  paths: box1,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square2 = new google.maps.Polygon({
  paths: box2,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square3 = new google.maps.Polygon({
  paths: box3,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square4 = new google.maps.Polygon({
  paths: box4,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square5 = new google.maps.Polygon({
  paths: box5,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square6 = new google.maps.Polygon({
  paths: box6,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
square7 = new google.maps.Polygon({
  paths: box7,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square8 = new google.maps.Polygon({
  paths: box8,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square9 = new google.maps.Polygon({
  paths: box9,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square10 = new google.maps.Polygon({
  paths: box10,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square11 = new google.maps.Polygon({
  paths: box11,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square12 = new google.maps.Polygon({
  paths: box12,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square13 = new google.maps.Polygon({
  paths: box13,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square14 = new google.maps.Polygon({
  paths: box14,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square15 = new google.maps.Polygon({
  paths: box15,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square16 = new google.maps.Polygon({
  paths: box16,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square17 = new google.maps.Polygon({
  paths: box17,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square18 = new google.maps.Polygon({
  paths: box18,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square19 = new google.maps.Polygon({
  paths: box19,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square20 = new google.maps.Polygon({
  paths: box20,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square21 = new google.maps.Polygon({
  paths: box21,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square22 = new google.maps.Polygon({
  paths: box22,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square23 = new google.maps.Polygon({
  paths: box23,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square24 = new google.maps.Polygon({
  paths: box24,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square25 = new google.maps.Polygon({
  paths: box25,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square26 = new google.maps.Polygon({
  paths: box26,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square27 = new google.maps.Polygon({
  paths: box27,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square28 = new google.maps.Polygon({
  paths: box28,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square29 = new google.maps.Polygon({
  paths: box29,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square30 = new google.maps.Polygon({
  paths: box30,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square31 = new google.maps.Polygon({
  paths: box31,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square32 = new google.maps.Polygon({
  paths: box32,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square33 = new google.maps.Polygon({
  paths: box33,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square34 = new google.maps.Polygon({
  paths: box34,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square35 = new google.maps.Polygon({
  paths: box35,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  square36 = new google.maps.Polygon({
  paths: box36,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#99FFFF',
  fillOpacity: 0.35,
  clickable: false
  });
  //Sets the region of the map
  bermudaTriangle.setMap(map);
  square1.setMap(map);
  square2.setMap(map);
  square3.setMap(map);
  square4.setMap(map);
  square5.setMap(map);
  square6.setMap(map);
  square7.setMap(map);
  square8.setMap(map);
  square9.setMap(map);
  square10.setMap(map);
  square11.setMap(map);
  square12.setMap(map);
  square13.setMap(map);
  square14.setMap(map);
  square15.setMap(map);
  square16.setMap(map);
  square17.setMap(map);
  square18.setMap(map);
  square19.setMap(map);
  square20.setMap(map);
  square21.setMap(map);
  square22.setMap(map);
  square23.setMap(map);
  square24.setMap(map);
  square25.setMap(map);
  square26.setMap(map);
  square27.setMap(map);
  square28.setMap(map);
  square29.setMap(map);
  square30.setMap(map);
  square31.setMap(map);
  square32.setMap(map);
  square33.setMap(map);
  square34.setMap(map);
  square35.setMap(map);
  square36.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

 //addPoint allows you to place mapMarkers
function addPoint(event) { 
    var marker = new google.maps.Marker({
        position: event.latLng,
        map: map,
        draggable: true
    });
	marker_locations.push(event.latLng);
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', function() {
        marker.setMap(null);
        for (var i = 0, I = markers.length; i < I && markers[i] != marker; ++i);
        markers.splice(i, 1);
    });
    google.maps.event.addListener(marker, 'dragend', function() {
 
    });
}
function endTurn() {
if (yourTurn == false){
	document.getElementById("turnStatus").innerHTML = "|Opponents Turn|";
	yourTurn = true;
	}
else if (yourTurn == true){
	document.getElementById("turnStatus").innerHTML = "|Your Turn|";
	yourTurn = false;
}
}
//else {
//Websockets is not supported by the browser, proceed to use turn-based system by default
//Document.write("Websockets is not supported by your browser, chances are that means that you are using some ghastly, deprecated version of internet explorer. Sucks to be you!");
//}

