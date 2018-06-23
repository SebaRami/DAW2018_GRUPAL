function myMap() {
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

function busquedaFiltro(){
	text = document.getElementById('texto').value;
	var divs = document.querySelectorAll('div#images_search > div > img');
	for (div of divs){
		var alt_img = div.alt;
		if(alt_img.includes(text)){
			div.classList.add('mostrar');
			div.classList.remove('ocultar');
		}
		else{
			div.classList.add('ocultar');
			div.classList.remove("mostrar");
		}
	}
}


(function(){
	document.getElementById('texto').onkeyup = busquedaFiltro;
	$('#texto').on('keyup', busquedaFiltro);
})();