function cantidadDigitos(x)
{
  if (x<10)
  {
    return 1;
  }
  else
  {
    if (x<100)
    {
      return 2;
    }
    else
    {

      }
    }
  }


var valor;
valor=prompt('Ingrese un valor positivo:','');
valor=parseInt(valor);
document.write('La cantidad de dígitos es:'+cantidadDigitos(valor));