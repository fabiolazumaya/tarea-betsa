let colores = ["verde", "azul", "rojo", "amarillo"];

for (let i = 0; i < colores.length; i++) {
  console.log(`Colores[${i}]: ${colores[i]}`);
}

//Ejemplo de FOR OF
for (let color of colores) {
  console.log(color);
}
