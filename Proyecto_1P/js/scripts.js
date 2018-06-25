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