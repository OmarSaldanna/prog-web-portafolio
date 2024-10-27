// seleccionar la tabla
	tabla = document.getElementById("tabla");

	// función para leer las entradas del form
	function leer_form() {
	    let valores = [];
	    // primero el nombre y el mail
	    valores.push(document.querySelector('#nombre').value);
	    valores.push(document.querySelector('#email').value);

	    // los tags de los checkboxes
	    let tagsSeleccionados = Array.from(document.querySelectorAll('.tags:checked')).map(el => el.value).join(', ');
	    // y guardarlos
	    valores.push(tagsSeleccionados); 

	    // los radio buttons
	    let radioSeleccionado = document.querySelector('input[name="radio"]:checked')?.value || '';
	    valores.push(radioSeleccionado);

	    // los demas valores
	    valores.push(document.querySelector('#fechaHora').value);
	    valores.push(document.querySelector('#color').value);
	    valores.push(document.querySelector('#rango').value);

	    // console.log(valores);
	    return valores; // Retorna el array con los valores
	}

	// función para comprobar nulos
	function verificar_nulos(valores) {
		// si hay alguno nulo o vacío
	    if (valores.some(valor => valor === '')) {
	    	alert("Por favor rellene correctamente los campos");
	    } else {
	    	// entonces renderizar los valores
	    	agregar_a_tabla(valores);
	    }
	}

	// para agregar datos a la tabla
	function agregar_a_tabla(valores) {
		let row = "<tr>";
		// por cada valor
		valores.forEach((v) => {
			row += "<td>" + v + "</td>\n"
		});
		// cerramos la tr
		row += "</tr>";
		// y se agrega
		tabla.innerHTML += row;
	}

	// funcion que llama el boton
	function main () {
		res = leer_form()
		verificar_nulos(res)
	}