function initMap() {
  // Create center marker at CICC
  var cicc_ltlng = {lat:32.884984, lng:-117.241335};
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cicc_ltlng,
    zoom: 18
  });

  var marker = new google.maps.Marker({
      position: cicc_ltlng,
      map: map,
      title: 'CICC'
  });
}