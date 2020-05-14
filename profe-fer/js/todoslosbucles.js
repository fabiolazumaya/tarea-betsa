// Crear un arreglo con los 5 destinos/lugares/ciudades que deseén visitar.
//Mostrar en pantalla los lugares utilizando los bucles. For,for of, while, do while.

let destinos = [
  "Huasteca Potosina",
  "Huasca  de Hidalgo",
  "Tepoztlan",
  "Grutas de tolantongo",
  "Peña de Bernal",
];

//FOR
console.log("\n");
for (i = 0; i < destinos.length; i++) {
  //destinos.length: numero de elementos que hay en el array.
  //Recorredor: i=0 el cero va inicializar en la posicion 0.// i++: incrementador de la posición en el array.
  console.log(destinos[i]); //Aquí estoy obteniendo la información que tiene esta posición i.
}
//*Nota: El incrementador se irá a la posición 6 y como no va a poder entrar a la condción del for al ser mayor que 5 entonces ni siquiera lo pintará.

//FOR OF
console.log("\n");
for (let destino of destinos) {
  //destino: cada elemento del array.
  console.log(destino);
}

//WHILE
console.log("\n");
let x = 0;
while (x < destinos.length) {
  console.log(destinos[x]);
  x++;
}

//DO WHILE
console.log("\n");
let y = 0;
do {
  console.log(destinos[y]);
  y++;
} while (y < destinos.length);
