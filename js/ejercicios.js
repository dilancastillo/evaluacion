//Funciones con parametros
function resta(numero1,numero2){
    var resultado = numero1-numero2;
    document.write('Resultado de resta: ', resultado + '<br>');
}
resta(198,100);


//Funciones de retorno sin parametros
function suma(){
    var operacion = 3 + 987;
    return operacion;
}
suma();
document.write('Suma: ' + suma() + '<br>');


//Funcion anonima
var division = function(num1,num2){
    var resultado1 = num1/num2;
    return resultado1;
}
document.write('Division: ', division(678,3), '<br>');


//Funcion lamda
function comida(platos){
   var comer = 'Estoy comiendo: ' + platos;
   return comer;
}
var plato1 = (platos => 'Estoy comiendo: ' + platos);
document.write(plato1('Ensalada'));
