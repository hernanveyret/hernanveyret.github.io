let cantidadProductos = 0;
let cantidad128= 0;
let cantidad603 = 0;
let cantidad183 = 0;
let cantidad26=0;
let cantidad320 = 0;
let cantidadIpanema = 0;
let cantidad4077 = 0; 
let cantidadRingo = 0; 
let cantidad110 = 0;
let subTotal = 0;
let total = 0;
let acumulador = 0;
let precio = 0;
let gastoEnvio = 0;
var envioProducto;

									//  sector calzados de niños
// Articulo 128
function cambiar128azul(){
	document.getElementById("art128").src="img/niños/art128/128azul.jpg";
}
function cambiar128negro(){
	document.getElementById("art128").src="img/niños/art128/128negro.jpg";
}
function cambiar128rosa(){
	document.getElementById("art128").src="img/niños/art128/128rosa.jpg";
}

// Articulo 603
function cambiar603negro(){
	document.getElementById("art603").src="img/niños/art603/603negra.jpg";
}
function cambiar603rosa(){
	document.getElementById("art603").src="img/niños/art603/603rosa.jpg";
}

// Articulo 183
function cambiar183lila(){
	document.getElementById("art183").src="img/niños/art183/183lila.jpeg";
}
function cambiar183rosa(){
	document.getElementById("art183").src="img/niños/art183/183rosa.jpeg";
}
// comprar articulo 128
function comprar128(){
	cantidadProductos++;
	precio = 3500;
	cantidad128++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad128 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad128}- Articulo Jaguar 128 - Precio $ ${precio}<hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad128 = 0;
}
// compar articulo 603
function comprar603(){
	cantidadProductos++;
	precio = 2500;
	cantidad603++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad603 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad603}- Articulo Tridy 603 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad603 = 0;
}
// compar articulo 183
function comprar183(){
	cantidadProductos++;
	precio = 3200;
	cantidad183++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad183 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad183}- Articulo Heyday 183 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad603 = 0;
}
/*------------------------------------------------------------------------------------

									 sector calzados de dama
 Articulo 26 */
function cambiar26negro(){
	document.getElementById("art26").src="img/dama/art26/26negro.jpg";
}
function cambiar26blanco(){
	document.getElementById("art26").src="img/dama/art26/26blanco.jpg";
}
// Articulo 320
function cambiar320negro(){
	document.getElementById("art320").src="img/dama/art320/320negro.jpg";
}
function cambiar320rosa(){
	document.getElementById("art320").src="img/dama/art320/320nude.jpg";
}
// Articulo Ipanema
function cambiarIpanemanegro(){
	document.getElementById("ipanema").src="img/dama/ipanema/26524negro.jpg";
}
function cambiarIpanemavioleta(){
	document.getElementById("ipanema").src="img/dama/ipanema/26524violeta.jpg";
}
// Comprar articulo 26
function comprar26(){
	cantidadProductos++;
	precio = 9890;
	cantidad26++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad26 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad26}- Articulo Savage 26 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad26 = 0;
}
// Comprar articulo 320
function comprar320(){
	cantidadProductos++;
	precio = 12200;
	cantidad320++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad320 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad320}- Articulo Siris 320 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad320 = 0;
}
// Comprar articulo ipanema
function comprarIpanema(){
	cantidadProductos++;
	precio = 3200;
	cantidadIpanema++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidadIpanema * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidadIpanema}- Articulo Ipanema DAma - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidadIpanema = 0;
}

/*------------------------------------------------------------------------------------

									 sector calzados de hombre
 Articulo 4077 */
function cambiar4077negro(){
	document.getElementById("art4077").src="img/hombre/art4077/4077negro.jpg";
}
function cambiar4077choco(){
	document.getElementById("art4077").src="img/hombre/art4077/4077choco.png";
}
/* Articulo Ringo */
function cambiarringonegro(){
	document.getElementById("artringo").src="img/hombre/ringo/ringonegro.jpg";
}
function cambiarringochoco(){
	document.getElementById("artringo").src="img/hombre/ringo/ringochoco.jpg";
}
function cambiarringoazul(){
	document.getElementById("artringo").src="img/hombre/ringo/ringoazul.jpg";
}
/* Articulo Faraon */
function cambiarFaraonnegro(){
	document.getElementById("art110").src="img/hombre/faraon/110negro.jpg";
}
function cambiarFaraonazul(){
	document.getElementById("art110").src="img/hombre/faraon/110azul.jpg";
}
// Comprar articulo 4077
function comprar4077(){
	cantidadProductos++;
	precio = 4500;
	cantidad4077++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad4077 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad4077}- Articulo Shadow 4077 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad4077 = 0;
}
// Comprar articulo Ringo Bilgax
function comprarRingo(){
	cantidadProductos++;
	precio = 15800;
	cantidadRingo++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidadRingo * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidadRingo}- Articulo Ringo Bilgax 01 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidadRingo = 0;
}
// Comprar articulo faraon 110
function comprarFaraon(){
	cantidadProductos++;
	precio = 7200;
	cantidad110++;
			document.getElementById("contadorProductos").innerHTML=cantidadProductos;
	subTotal = cantidad110 * precio ;
	acumulador = acumulador + subTotal ;
			
			document.getElementById("pagar").innerHTML+=`Cant: ${cantidad110}- Articulo Faraon 110 - Precio $ ${precio} <hr />`;
			document.getElementById("subTotal").innerHTML=`SubTotal $${acumulador}`;
			document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`;
	cantidad110 = 0;
}
/* -------------------------------------------------------------------------------------
		Salir a sponsor */
function salirPagina() {
	alert("Usted esta saliendo de nuestro sitio");
	window.open('https://tienda.jaguarshoes.com.ar/','_blank');
	
}

/* --------------------------------------------------------------------------------------
		Selector por marca */
function irAMarca(){
	var selector = document.querySelector("#selectorMarcas");
	if(selector!=null && selector.value!= ""){
		var url = document.location.toString();
		var numeralIndex = url.indexOf("#");
		if (numeralIndex>=0){
			url = url.substring(0,numeralIndex);
		}
		document.location = url + "#" + selector.value;
	}
}

/* ----------------------------------------------------------------------------------
		Reset compra */
function borrarCompra() {
	location.href=("inicio.html");
}

/* ----------------------------------------------------------------------------------
		Finalizar compra */
		
function finDecompra() {

var envioRetiro = prompt("Elija una opcion ( 01: Para Envio (Pude tener recargo) o 02: Para Retiro )");
	if(envioRetiro == "01") {
		var codigoPostal = prompt("Ingrese su codigo postal Ejemplo:B2900") ;
			if(codigoPostal == "B2900") {
				document.getElementById("pagar").innerHTML=`<div style="width: 100%; height: 300px; background-color: green; display: flex; flex-direction:column; align-items: center;justify-content: center;align-items:center;color: white;"><p>Envio sin recargo por pertenecer al partido de San Nicolas.</p><p>Vuelva pronto!!!</p><a class="volver" href="inicio.html">VOLVER</a></div>`;
			    document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`; }
			else if( codigoPostal == "b2900"){
				document.getElementById("pagar").innerHTML=`<div style="width: 100%; height: 300px; background-color: green; display: flex; flex-direction:column; align-items: center;justify-content: center;align-items:center;color: white;"><p>Envio sin recargo por pertenecer al partido de San Nicolas.</p><p>Vuelva pronto!!!</p><a class="volver" href="inicio.html">VOLVER</a></div>`;
			    document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`; }
			else { 
				gastoEnvio = 800;
					acumulador = acumulador + gastoEnvio;
						document.getElementById("pagar").innerHTML=`<div style="width: 100%; height: 300px; background-color: green; display: flex; flex-direction:column; align-items: center;justify-content: center;align-items:center;color: white;"><p>El envio tiene un costo adicional de $800.</p><p>Muchas gracias por su compra.</p><p>Vuelva pronto!!!</p><a class="volver" href="inicio.html">VOLVER</a></div>`;
						document.getElementById("otrosGastos").innerHTML=`Otr. Gastos $${gastoEnvio}`;
						document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`; 
			}
	}
	else if ( envioRetiro == "02" ){ 
		
						document.getElementById("pagar").innerHTML=`<div style="width: 100%; height: 300px; background-color: green; display: flex; flex-direction:column; align-items: center;justify-content: center; font-family:'letra';align-items:center;font-size: 50px;color: white;"><p>Muchas Gracias por su compra.</p><p>Vuelva pronto!!!</p><a class="volver" href="inicio.html">VOLVER</a></div>`;
						document.getElementById("pagoTotal").innerHTML=`Total $${acumulador}`; 
	}
	else { 
	alert("Opcion invalida, ingrese '01 para Envio o 02 para Retiro'")
	}

}	
