// JavaScript Document
function validarForm(form1){
	/*regexp = /^[-+]?\d*\.?\d*$/;
	if(regexp.test(form1.nombre.value) || form1.nombre.value.length==0 ){*/
	if(form1.nombre.value.length==0 ){ //Nombre
	  form1.nombre.focus();
	  alert('No has ingresado el Nombre \no contine simbolos');
	  return false;
	}
	
	if(form1.email.value.length==0 && form1.telefono.value.length==0){ //Email
	form1.email.focus();
	alert('Debes ingresar un Correo electronico o Telefono');
	return false;
	}

	/*if(form1.telefono.value.length==0){ //Telefono
	form1.telefono.focus();
	alert('No has ingresado el Telefono');
	return false;
	}*/
	
	//Checar los campos si es estudiante 
	if(form1.estudiante.value==1){
		if(form1.no_control.value.length!=8){ // no_control 
		  form1.no_control.focus();
		  alert('Revisa el numero de control\nPuede estar incompleto');
		  return false;
		}
		if(form1.carrera.value=="Selecciona una carrera"){ // carrera
		  form1.carrera.focus();
		  alert('No has seleccionado una carrera');
		  return false;
		}
		if(form1.semestre.value=="Selecciona un semestre"){ // semestre
		  form1.semestre.focus();
		  alert('No has seleccionado un semestre');
		  return false;
		}
		if(form1.grupo.value.length==0){ // grupo
		  form1.grupo.focus();
		  alert('No has ingresado un grupo');
		  return false;
		}
		if(form1.turno.value!="Matutino"){ // turno 
		  form1.turno.focus();
		  alert('Solo hay turno Matutino');
		  return false;
		}
		if(form1.aula.value.length==0){ // aula
		  form1.aula.focus();
		  alert('No has ingresado tu salon');
		  return false;
		}
	}
	
	//debe insertar al menos una queja o sugerencia 
	if(form1.queja.value.length==0 && form1.sugerencia.value.length==0){
		form1.queja.focus();
		alert('No has ingresado queja o sugerencia');
		return false;
	}
	/*else{
		
		
		
	}
	
	if(form1.queja.value.length==0){ // Queja
	form1.queja.focus();
	alert('No has ingresado Correo Electronico');
		return false;
	}
	if(form1.sugerencia.value.length==0){ // Sugerencia
	form1.sugerencia.focus();
	alert('No has ingresado Una sugerencia o felicitación');
		return false;
	}*/
	
			
	return true;
}