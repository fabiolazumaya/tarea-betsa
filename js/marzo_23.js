// user();

// function user(){
//     var age = prompt("¿Cual es tu edad?");
//     var age2 = number(age);

//     if (number(age2)) {
//         if (age2 < 18) {
//             alert("Aún no puedes conducir")
//         }
//         else if (age2 >= 18)
//             alert("ya puedes conducir")
//         else {
//             alert("No es un número")
//         }
//     }

// }

// var calificacion2 = prompt("¿Cual es tu calificación?");
// var calificacion = Number(calificacion2);

// if (calificacion <= 2){
//     alert("Muy deficiente");
// }
// else if(calificacion <= 4){
//     alert("insuficiente");
// }
// else if (calificacion == 5){
//     alert("Suficiente");
// }
// else if (calificacion == 6){
//         alert("Bien");
// }
// else if (calificacion <=8){
//     alert("Notable");
// }
// else if (calificacion == 10){
//     alert("Sobresaliente");
// }
// else {
//     alert("Por favor introduce un valor numérico");
// }    

user();
function user() {
    var txt = prompt("Escribe un texto");
    while (confirm("¿Desea seguir?")) {
        var nuevoTexto = prompt("Dame otro texto");
        txt = txt + " - " + nuevoTexto;
    }
    alert(txt)
}


