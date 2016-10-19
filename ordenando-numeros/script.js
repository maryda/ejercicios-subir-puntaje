var numeros = []//indice;
 
numeros.push(prompt("Ingrese primer número: "));
numeros.push(prompt("Ingrese segundo número: "));
numeros.push(prompt("Ingrese tercer número: "));
 
 //sort ordena los elementos de los arrays ascendentemente
var ordenados = numeros.sort(function (a,b) {
    return a - b;
});
 
alert(ordenados);