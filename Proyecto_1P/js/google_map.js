//function to call a map. WITH PREDEFINED COORDINATES.		
function myMap() {
			var mapOptions = {
				 //Espol latitude and longitude coordinates
				center: new google.maps.LatLng(-2.148189, -79.964542),
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			} 
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		}