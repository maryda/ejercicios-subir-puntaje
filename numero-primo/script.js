  function esPrimo(num) {  
  	var i=2;
  	var esPrimo = false;
  	while (i*i<=num) {  
  		if (num%i == 0){
  			esPrimo = true;
  			break; 
  		}
  		i++;  
  	}
  	if(esPrimo)
  		alert("Número es primo");
  	else
  		alert("Número no es primo");
}

var numero = 0;
 
numero = prompt("Ingrese número: ");

esPrimo(numero);//FUNCION