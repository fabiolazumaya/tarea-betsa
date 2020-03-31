/* Programa que nos pida 2 números y que nos diga 
cual es el mayor, el menor y si son iguales. 
Plus: Si los números no son un número o son menores o iguales a cero, 
nos lo vuelva a pedir.*/


var numero1 = parseInt(prompt('introduce el primer número', 0));
var numero2 = parseInt(prompt('introduce el segundos número', 0));
// console.log(numero1,numero2); //esto es para que se pinte en en console los datos que nos da el usuario.

/*utilizamos el while ya que esta como filtrando, si no haces estas condiciones que te estoy poniendo... 
nos vas hacer nada de lo que te puse abajo.*/

while (numero1 <= 0 || numero2 <= 0 ||isNaN(numero1) || isNaN(numero2)) { //el isNan básicamente te vuelve a pedir nos valores ya que los datos que se ingresaron no son números. 
    numero1 = parseInt(prompt('introduce el primer número', 0));
    numero2 = parseInt(prompt('introduce el segundos número', 0));
}

if (numero1 == numero2) {  //El while a diferencia del if es que en el while te da la opción de preguntar en base a los 
    alert("Estos valores son iguales");  //parametros/condiciones que pusiste y en el if no, el if simplemente lo ejecuta.
} else if (numero1 > numero2) {
    alert("Este valor es el mayor: " + numero1);
    alert("Este valor es el menor: " + numero2);
} else if (numero2 > numero1) {
    alert("Este valor es el mayor: " + numero2);
    alert("Este valor es el menor: " + numero1);
} else {
    alert("Introduzca el valor correcto");
}
