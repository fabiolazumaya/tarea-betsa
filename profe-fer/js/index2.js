let expresionA = 2
let expresionB = "2"

// ==
if(expresionA == expresionB)
    Console.log("Resultado de operador == "+true)
else
    Console.log("Resultado de operador == "+false)

// <
igualIgual();
function igualIgual (){
    let num1 = 5;
    let num2 = "5";
    if(num1 == num2)
    console.log(true);
}
tresIgual();
function tresIgual (){
    let num1 = 5;
    let num2 = 5;
    if(num1 === num2)
    console.log(true);
}
mayQue();
function mayQue () {
    let num1 = 5;
    let num2 = 4;
    if(num1 > num2)
    console.log(true);
}
menQue();
function menQue (){
    let num1 = 4;
    let num2 = 5;
    if(num1 < num2)
    console.log(true);
}
mayIgual();
function mayIgual(){
    let num1 = 4;
    let num2 = 5;
    if(num1 >= num2)
    console.log(true);
}
menIgual();
function menIgual(){
    let num1 = 4;
    let num2 = 5;
    if(num1 <= num2)
    console.log(true);
}
esteYeste();
function esteYeste(){
    let num1 = 5;
    let num2 = "5";
    let num3 = 7;
    let num4 = 7;
    if(num1 == num2 && num3 === num4)
    console.log(true);
}
esteOeste();
function esteOeste(){
    let num1 = 5;
    let num2 = "Hola";
    let num3 = 7;
    let num4 = 7;
    if(num1 == num2 || num3 === num4)
    console.log(true);
}
negacion();
function negacion(){
    if (true != false)
    console.log(true)
}
