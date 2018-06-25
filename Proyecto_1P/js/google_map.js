//function to call a map. WITH PREDEFINED COORDINATES.		

		
function myMap(){
	var myLatLng = {lat:-2.148146, lng:-79.964489}
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: myLatLng
        });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'ESPOL!'
    });
}

/*
function myMap() {
			var mapOptions = {
				 //Espol latitude and longitude coordinates
				center: new google.maps.LatLng(-2.148189, -79.964542),
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			} 
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
*/
