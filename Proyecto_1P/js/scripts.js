

function create_img_tag_personaje(nombre){
	//the name in xml is the same as the .jpg file
	var img_path="img/personajes/" + nombre + ".jpg";	
			
	//construct the hmtl img tag
	var img_html="<img src='" + img_path + "' alt='" + nombre +"'>" ;
	
	return img_html;
	
}
function create_div_personaje_info(nombre, personalidad, referencias){
	
	//treat referencias as JQuery object 
	/*
		referencias is a object that contains 'referencia' subtags
	*/

	var p_tag_nombre=$("<p></p>").text("Nombre: " + nombre);
	var p_tag_personalidad=$("<p></p>").text("Personalidad: " + personalidad);
	
	//create a ul tag that will contain the url references	
	var ul_tag_ref=$("<ul></ul>");
	
	$(ul_tag_ref).append("Referencias:");
	$(referencias).find("referencia").each( function(){				
		$(ul_tag_ref).append("<li>"+ $(this).text()+ "</li>");
	})
	
	var myDiv=$("<div></div>").append(p_tag_nombre,p_tag_personalidad,ul_tag_ref);
	/*
	console.log(nombre + " " 	
				+ p_tag_nombre
				+ " "
				+ p_tag_personalidad
				+ " "
				+ ul_tag_ref
				+ "\n");
	*/
	//console.log(myDiv.text());
	return myDiv;	
}

function buscarPersonaje(){
	
	//get the text from the search input
	searchInput = document.getElementById("buscar_personaje_input").value;
	
	if(searchInput=="") {
		$("div[class='personajes_found_section']").empty();
		console.log("empty the div section on empty input");
		return;
	}
	
	//clean the div of previous images to put the new ones, based on the new query
	$("div[class='personajes_found_section']").empty();	
			
	//make ajax request to personajes.xml		
	var resultsFound=false
	$.get("data/personajes.xml",function(xml){		
		$(xml).find('personaje').each(function(){
			//get nombre
			var nombre = $(this).find('nombre').text();
			/*
			just one result
			*/
			if(nombre.includes(searchInput) && !resultsFound ){								
				//from here take whatever you need and load it in the html
				
				/*
					structure of personaje tag in xml is:
					
					personaje
						nombre
						personalidad
						referencias		
							referencia1
							...
							referenciaN
				
				*/
							
				var personalidad=$(this).find('personalidad').text();	
				var referencias=$(this).find('referencias');			
				
				var div_personaje_info = create_div_personaje_info(nombre, personalidad,referencias);				
				
				$(div_personaje_info).attr("class","div_personaje_info");
				var img_tag_personaje = create_img_tag_personaje(nombre);

				var div_personaje = $("<div></div>").append(img_tag_personaje,div_personaje_info);
				
				$(div_personaje).attr("class","div_personaje");
				
				$("div[class='personajes_found_section']").append(div_personaje);																			
				
				resultsFound=true;
			}
		});
		//if no result display meessage
		if(!resultsFound) {			
			$("div[class='personajes_found_section']").append("<p>No hay resultados para : " + searchInput + "</p>")		
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
//document.getElementById("buscar_personaje_input").addEventListener("keyup", buscarPersonaje);	

document.getElementById("search-button").addEventListener("click", buscarPersonaje);