function parImpar(numero) {
	var par = false;
	if(numero % 2 == 0) {
		par = true;
	} else {
		par = false;
	}

	if(par){
		document.write("Número es par");
	}else{
		document.write("Número es impar");
	}
}

var numeros = 0;
 
numeros = prompt("Ingrese primer número: ");

parImpar(numeros);//FUNCION