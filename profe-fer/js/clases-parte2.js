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
}

class Cliente extends Persona {
  //Clase hijo
  constructor(NombreCompleto, genero, edad, direccion, miembroDesde, id) {
    super(NombreCompleto, genero, edad, direccion);
    this.miembroDesde = miembroDesde;
    this.id = id;
  }
}
// EMPLEADOS
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

//CLIENTES
const clienteA = new Cliente(
  "Manolo Martinez",
  "Hombre",
  25,
  "Av. cochimí",
  2018,
  "0014"
);
const clienteB = new Cliente(
  "Clemente Muñoz",
  "Mujer",
  35,
  "Av. 553",
  1999,
  "0003"
);
const clienteC = new Cliente(
  "Juan Valdez",
  "Hombre",
  65,
  "Calle Luna real",
  2020,
  "0189"
);
const clienteD = new Cliente(
  "Sofía Pedroza",
  "Mujer",
  23,
  "Calle Margarita Echeverría",
  1997,
  "0056"
);
const clienteE = new Cliente(
  "Dalia Pedroza",
  "Mujer",
  33,
  "Calle Margarita Echeverría",
  1997,
  "0056"
);

//Cuantos empleados son hombres y mujeres.
var empleados = [Empleado1, Empleado2, Empleado3, Empleado4];
console.log(empleados.length);

let mu = 0;
let hom = 0;

for (Empleado of empleados) {
  // Empleado.genero;
  // console.log(Empleado.genero);
  if (Empleado.genero == "Mujer") {
    mu++;
  } else {
    hom++;
  }
}
console.log(`Existe ${mu} mujeres`);
console.log(`Existe ${hom} hombres`);

//El empleado con mayor sueldo.

//Cuantos clientes tengo.
let clientes = [clienteA, clienteB, clienteC, clienteD, clienteE];
console.log(`Existen ${clientes.length} clientes`);

//Promedio edad clientes
let clientesEdad = [clienteA, clienteB, clienteC, clienteD, clienteE];
let suma = clienteA + clienteB + clienteC + clienteD + clienteE;
let promedioEdad = suma / clientesEdad.length;

console.log(
  `La edad promedio de los clientes es:  ${clientesEdad.length} años`
);
