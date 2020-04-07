var valores = [1,-2,3,-1,5]; 
var newarray = [];
var resultado = 0; 
var i = 0;
var resultadopositivo = 1;
// i = 1 
// valores [1] = -2
// valores.length = 5 
//resultadopositivo = 1 * 1 = 1
//resultado = -4
// valores [i] es menor que 0 , si!!
// entonces si entra a mi if , ok, y como es negativo 
// va hacer valores[i]= -2 * 2, no?
// entonces en resultado tenemos que es igual a -4 
// y no recuerdo que más
// ok , ok está bien esta aquí. gracias
// Va !gracias

for(i; i < valores.length; i++) { 
    if(valores[i] < 0){ 
        console.log(valores[i])
        resultado = valores[i] * 2; 
        newarray.push(resultado)
        console.log(newarray)
    }else{
        resultadopositivo = valores[i] * resultadopositivo;
        console.log(valores[i])
        console.log(resultadopositivo)
    }
    
}

document.write(newarray +"</br>"); 
document.write(resultadopositivo);





