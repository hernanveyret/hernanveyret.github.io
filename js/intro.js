// verifica la edad del usuario, si es mayor de edad o no.

function verificar() {
				var anios = document.getElementById("edad").value ;
				var persona = document.getElementById("nombre").value
					parseInt(anios);
						if(anios >= 18 ) { 
							document.getElementById("comentario").innerHTML=`<p style="background-color: #8ACF91;color:white; padding: 10px;"> Hola ${persona} sos mayor de edad, podes ingresar.</p><br /><button type="submit" onclick="continuar()">CONTINUAR</button>` ;
						}else { 
							document.getElementById("comentario").innerHTML=`<p style="background-color: #F17778; padding: 10px;text-align:center; color: white;"> Hola ${persona} sos menor de edad, podes ingresar bajo tu responsabilidad o la de un mayor.</p><br /><button type="submit" onclick="continuar()">CONTINUAR</button>` ;
						}				
			}

function continuar(){
		
	location.href=("inicio.html");
}

