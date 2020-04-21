//SWITCH 

let ejecucion = "semaforoverde";
let numero1 = "Avanza"
let numero2 = "Ve deteniendote yaaa"
let numero3 = "Detente"
let respuesta;


switch(ejecucion) {
    case "semaforoverde":
        respuesta = numero1;
        break;
    case "semaforoamarillo":
        respuesta = numero2
        break;
    case "semafororojo":
        respuesta = numero3
        break;
    default:    
        console.log("El semáforo se encuentra en reparación")
}
console.log(`La respuesta de la acción ${ejecucion} es ${respuesta}`)

