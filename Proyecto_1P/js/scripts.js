function buscarPersonaje(){
	
	//get the text from the search input
	searchInput = document.getElementById("buscar_personaje").value;
	
	//if there's no input value return
	if(searchInput=="") return;
	
	//make ajax request to personajes.xml	
	
	$.get("data/personajes.xml",function(xml){
		$(xml).find('personaje').each(function(){
			var nombre = $(this).find('nombre').text();
			if(nombre.includes(searchInput)){
				//from here take whatever you need and load it in the html
				console.log(nombre);
				//$("<li></li>").html(sTitle + ", " + sPublisher).appendTo("#dvContent ul");
			}
		});		
	});
	
	/*
	var divs = document.querySelectorAll('div#images_search');
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
	}*/
}



document.getElementById("buscar_personaje").addEventListener("keyup", buscarPersonaje);	
document.getElementById("search-button").addEventListener("click", buscarPersonaje);	
