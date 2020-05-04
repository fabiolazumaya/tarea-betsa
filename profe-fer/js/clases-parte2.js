class Persona {
  //Clase Padre
  constructor(NombreCompleto, genero, edad, direccion) {
    this.NombreCompleto = NombreCompleto;
    this.genero = genero;
    this.edad = edad;
    this.direccion = direccion;
  }
}

class Empleado extends Persona {
  //clase Hija
  constructor(
    NombreCompleto,
    genero,
    edad,
    direccion,
    puesto,
    id,
    sueldo,
    fechaIngreso
  ) {
    super(NombreCompleto, genero, edad, direccion);
    this.puesto = puesto;
    this.id = id;
    this.sueldo = sueldo;
    this.fechaIngreso = fechaIngreso;
  }
  //   NumMujeres(){
  //       return `En esta empresa existen ${} mujeres. `
  //   }
  //   NumHombres(){
  //       return `En esta empresa existen ${} hombres`
  //   }
}

class Cliente extends Persona {
  //Clase hijo
  constructor(NombreCompleto, genero, edad, direccion, miembroDesde, id) {
    super(NombreCompleto, genero, edad, direccion);
    this.miembroDesde = miembroDesde;
    this.id = id;
  }
}

//Instanciando clase Hija
const Empleado1 = new Empleado(
  "Raúl Martinez",
  "Hombre",
  27,
  "Av. cochimí",
  "cajero",
  "0001",
  6000,
  "mayo 2018"
);
const Empleado2 = new Empleado(
  "Martha Muñoz",
  "Mujer",
  45,
  "Av. 553",
  "cajera",
  "0002",
  6700,
  "nov 2015"
);
const Empleado3 = new Empleado(
  "Ramón Valdez",
  "Hombre",
  19,
  "Calle Luna real",
  "gerente",
  "0012",
  12000,
  "junio 2019"
);
const Empleado4 = new Empleado(
  "Miriam Pedroza",
  "Mujer",
  33,
  "Calle Margarita Echeverría",
  "cejero",
  "0021",
  5000,
  "nov 2019"
);

var empleados = [Empleado1, Empleado2, Empleado3, Empleado4];
console.log(empleados.length);

for (Empleado of empleados) {
  Empleado.genero;
  console.log(Empleado.genero);
}
for(){
     
}
