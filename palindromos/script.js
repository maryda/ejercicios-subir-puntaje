var contador=0;
var x;

for(x=0;x<tex.length;x++)
{
  if (tex.charAt(x)==tex.charAt(tex.length-1-x))
  { 
    contador++;
  }
}
if (contador==tex.length)
  alert('es palindromo');
else
  alert('no es palindromo');
}

var=tex;

tex= prompt("Ingrese una palabra ");