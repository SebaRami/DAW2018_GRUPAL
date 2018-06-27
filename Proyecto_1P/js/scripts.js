function buscarPersonaje(){
	
	//get the text from the search input
	searchInput = document.getElementById("buscar_personaje").value;
	
	if(searchInput=="") {
		$("div[class='images_found_section']").empty();
		console.log("em");
		return;
	}
	
	//clean the div of previous images to put the new ones, based on the new query
	$("div[class='images_found_section']").empty();	
			
	//make ajax request to personajes.xml		
	var resultsFound=false
	$.get("data/personajes.xml",function(xml){		
		$(xml).find('personaje').each(function(){
			//get nombre
			var nombre = $(this).find('nombre').text();
			if(nombre.includes(searchInput) ){								
				//from here take whatever you need and load it in the html
				
				//the name in xml is the same as the .jpg file
				var img_path="img/personajes/" + nombre + ".jpg";	
				
				//construct the hmtl img tag
				var img_html="<img src='" + img_path + "' alt='" + nombre +"'>" ;
				
				//console.log(img_path);
								
				//load image
				$("div[class='images_found_section']").append(img_html);
				resultsFound=true;
			}
		});
		//if no result display meessage
		if(resultsFound) {
			$("div[class='images_found_section']").append("<p>Resultados que contienen : " + searchInput + "</p>")
		}else{
			$("div[class='images_found_section']").append("<p>No hay resultados para : " + searchInput + "</p>")		
		};
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


//do the query on real time it gets very complex on enhancing user experience.
//document.getElementById("buscar_personaje").addEventListener("keyup", buscarPersonaje);	

document.getElementById("search-button").addEventListener("click", buscarPersonaje);	