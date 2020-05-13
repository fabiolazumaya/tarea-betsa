//Elaborar un ciclo for of que nos muestre la cadena mas larga.

let colores = ["verde", "azul", "amarillo", "rojo"];
let colorfinal = ""; //aqui se van a guardar todas las itereciones que se vayan creando.

for (let color of colores) {
  // comodín de info de array.
  // console.log(
  //   `El color final es: ${colorfinal} con longitud ${colorfinal.length} color de arreglo es ${color} con longitud ${color.length}`
  // );
  if (colorfinal.length < color.length) {
    colorfinal = color; //1.- colorfinal la cual estaba vacía ahora va a valer "verde". Reasignación de vlor.
    console.log(colorfinal);
  }
}

// console.log(colorfinal);
