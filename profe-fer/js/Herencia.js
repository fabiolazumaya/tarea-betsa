//HERENCIA PADRE E HIJ@S
class Animales { //Clase Padre. 
    constructor(tipo, sexo, habitad, familia, alimentacion) { 
      this.tipo = tipo;                                       
      this.sexo = sexo;
      this.habitad = habitad;
      this.familia = familia;
      this.alimentacion = alimentacion;
    }
    mostrarInformacion() { //Función de mi objeto. 
      return `Este animal es de ${this.tipo}, vide en ${this.habitad} por su alimentación se clasifica en ${this.alimentacion}`;
    }
  }  
  class AnimalesDomesticos extends Animales { //Clase Hija.                   //Ese extends es para extendernos hasta la clase padre.
    constructor(tipo, sexo, habitad, familia, alimentacion, raza, nombre) {  //Se manda a llamar tanto los atributos PADRE como atributos de la clase HIJA.
      super(tipo, sexo, habitad, familia, alimentacion);                    //SUPER: Se mandan a llamar los atributos que son unicamente del padre.
      this.raza = raza;                                                    // Atributos de class hija..
      this.nombre = nombre;
    }
    detalleMoscota() {    //Función de mi clase hija. 
      return `Mi ${this.tipo}, se llama ${this.nombre} y es ${this.sexo}`;    //Se mandan a llamar 2 atributos de class Padre y 1 class hija
    }
  }  
  class AnimalesPeligroExtincion extends Animales { //Clase Hijo.
    constructor(tipo,sexo,habitad,familia,alimentacion,poblacion,nombreCientifico,region) {
      super(tipo, sexo, habitad, familia, alimentacion);
      this.poblacion = poblacion;
      this.nombreCientifico = nombreCientifico;
      this.region = region;
    }
  }
  


//Creación de nuevos objetos de mi clase Hija. //PERRO Y GATO 

  const aDomestico1 = new AnimalesDomesticos(                          // Palabra reservada NEW, de mi clase hija.
    "Perro","Macho","Jungla de Asfalto","Mamifero","Omnivoros","Chihuahua","Rocky");
  
  //console.log(aDomestico1.mostrarInformacion());
  console.log(aDomestico1.detalleMoscota());                          //Se manda a llama tanto mi nuevo objeto como la función de clase hija. 
  console.log(aDomestico1);
  
  const aDomestico2 = new AnimalesDomesticos(                        //Palabra reservada NEW, de mi clase hija. 
    "Gato","Hembra","Hogar","Mamifero","Omnivoros","Siamés","Nala");


  
//Creación de nuevos objetos de mi clase Hijo. //Aguila Real & Vaquita marina. 
  const aExticion1 = new AnimalesPeligroExtincion(    
    "AguilaReal","Macho","Tundra","Oviparos","Carnivoros",260,"Aquila chrysaetos","Montañosa"); 
  
  const aExticion2 = new AnimalesPeligroExtincion(
    "Vaquina marina","hembra","Mar","Mamifero","Carnivoro",19,"Phocoena sinus","Golfo de BJ");