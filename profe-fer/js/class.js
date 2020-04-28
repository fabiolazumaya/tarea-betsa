//Poner aqui lo del screenshot. lo que hizo el profe con animales.
//nombre completo, genero , edad, dirección,  agregar funcion  para mostarr info persona. 
//Palabra reservada -new- 


class Persona { //Este es mi objeto 
    constructor(nombre, genero, edad, direccion) { //variables
        this.nombre = nombre;                      //parametros
        this.genero = genero;
        this.edad = edad;
        this.direccion = direccion; 
    }
    mostrarInfoPersona() { //Esta es mi función 
        return `Hola mucho gusto mi nombre es ${this.nombre}, mi sexo es ${this.genero} y mi dirección actual es ${this.direccion}. Mucho gusto.`;
    }
}

const infoFab = new Persona("Fabiola Xóchitl Sánchez Zumaya", "femenino",25,"Av. 553"); //variables para que se refleje la info que necesito.
const infoAmerica = new Persona("America Alarcon Savin", "femenino",26,"calle  Querétaro");

console.log(infoFab.mostrarInfoPersona()); //Recuerda poner la variable y la función de mi objeto. 
console.log(infoAmerica.mostrarInfoPersona());
