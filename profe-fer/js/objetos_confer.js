const alumno = {
    nombre : "Fabiola",
    apellido : "Sánchez Zumaya",
    correo : "fabi94@live.com.mx",
    edad : 25,
    comidaFav: "Espaguetis verdes",
    //array 
    amigos :["América", "Itzel"],
    frutas :["Mandarina","Mango","uvas"],
    //Objeto dentro de un objeto 
    madre: {
        nombre : "Leticia",
        apellido : "Zumaya Olivares",
    },
    //Funciones 
    obtenerRFC:function () {
        return "SAZF940520"
    },
    obtenerRFC1() {
        return "SAZF940520"
    }, 
    msn () {
        return `Gracias a mis amigos ${this.amigos[0]} y ${this.amigos[1]}`;  // Crear funcion que de un mensaje a sus amigos 
    
    }
    
}

alumno.correo = "fabi94@hotmail.com";
alumno.edad = 20;

console.log(alumno.msn());  // Crear funcion que de un mensaje a sus amigos 

// //Notacion por puntos
console.log(alumno.nombre);
console.log(alumno.amigos[0]);
console.log(alumno.madre.nombre);
console.log(alumno.obtenerRFC()); //Los () se ponen para saber que es una función 

//Notación por corchetes
console.log(alumno['edad']);
console.log(alumno['amigos'][1]); //para tener la posicion del valor solo hay que sacar el corchete y ponerle 
console.log(alumno['madre']['apellido']);
console.log(alumno['obtenerRFC1']());

//Modificado 
console.log(alumno.correo);
console.log(alumno.edad);




