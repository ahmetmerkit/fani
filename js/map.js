function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(41.0888118, 29.0567905); 
  var mapOptions = {center: myCenter, zoom: 15}; // Increased zoom for better focus
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myCenter,
    map: map,
    title: "Fani Bosphorus Restaurant" // Added title when hovering
  });
}
