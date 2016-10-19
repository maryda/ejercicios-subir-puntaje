function MenorNumero(numeros){
	var menor = numeros[0];
    for(i=1;i<numeros.length;i++){
        if(numeros[i] < menor)
            menor = numeros[i];
    }
    alert("Numero menor es = " + menor);
}


var numeros = [];
numeros.push(prompt("Ingrese valor 1: "));
numeros.push(prompt("Ingrese valor 2: "));
numeros.push(prompt("Ingrese valor 3: "));

MenorNumero(numeros);

