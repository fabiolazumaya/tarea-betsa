const alumno = {
    nombre : "Fabiola",
    apellido : "Sánchez Zumaya",
    correo : "fabi94@live",
    edad : 25,
    //array 
    amigos :["América", "Itzel"],
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
    }
}

//Notacion por puntos
console.log(alumno.nombre);
console.log(alumno.amigos[0]);
console.log(alumno.madre.nombre);
console.log(alumno.obtenerRFC()); //Los () se ponen para saber que es una función 

//Notación por corchetes
console.log(alumno['edad']);
console.log(alumno['amigos'][1]); //para tener la posicion del valor solo hay que sacar el corchete y ponerle 
console.log(alumno['madre']['apellido']);
console.log(alumno['obtenerRFC1']());