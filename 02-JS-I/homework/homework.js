// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Comidas rapidas";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 9;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta =  10 - 4 === 6;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    var marc = str;
    return marc;
}
var yosoy = "robert perez jimenez";
//devolverString(yosoy);

function suma(x, y) {
    var valors = x + y;
    return valors;
  }
//suma(5,6);

function resta(x, y) {
    var valorr = x - y;
    return valorr;
}
//resta(7,12);


function multiplica(x, y) {
    var valorm = x * y;
    return valorm;
}
//multiplica(45*98);


function divide(x, y) {
    var valord = x/y;
    return valord;
}
divide(345,45);


function sonIguales(x, y) {
  if (x === y){
    return true;
  }
  return false;
}


function tienenMismaLongitud(str1, str2) {
 if (str1.length == str2.length){
    return true;
 }
 return false; 
}

function menosQueNoventa(num) {
   if (nom < 90){
    return true;

   }
   return false;  
}

function mayorQueCincuenta(num) {
    if(num>50){
      return true;
    }
    return false;
  
}

function obtenerResto(x, y) {
  var ress = x%y;
  return ress; 
}


function esPar(num) {
 if(num%2 === 0){
  return true;
 }
 return false;
  
}

function esImpar(num) {
  if (num%2 != 0){
    return true;

  }
  return false;
}

function elevarAlCuadrado(num) {
  var elevar = num*num;
  return elevar;  
}


function elevarAlCubo(num) {
 var cubo = num*num*num;
 return cubo;
}


function elevar(num, exponent) {
  var potencia = num** exponent;
  return potencia;
}

function redondearNumero(num) {
  var rodon = Math.round (num);
  return rodon;
}

function redondearHaciaArriba(num) {
  var rounup = Math.ceil(num);
  return rounup;
}

function numeroRandom() {
  var ramnum = Math.random();
  return ramnum;
}



function esPositivo(numero) {
  if (numero > 0 ){
    return "es positivo ";
  }
    else if (numero < 0){

      return "es negativo"
    }

  return false;
  
}

function agregarSimboloExclamacion(str) {
   var exclam = srt + "!";
   return exclam;
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
    var complete = nombre + apellido;
    return complete; 
}

function obtenerSaludo(nombre) {
    var saludo = "hola "+ nombre;
    return saludo;
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
    var area = alto*altura;
    return area;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  var peri = lado*4;
  return peri;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  var areat = (alto*altura)/2;
  return areat;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  var cambio = euro*1.20;
  return cambio + "$ dollar";

  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
   

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra == "a"){
    return "es vocal";
  }
  else if (letra == "e"){
    return "es vocal"
  }
  else if (letra == "i"){
    return "es vocal"
  }
  else if (letra == "o"){
    return "es vocal"
  }
  else if (letra == "u"){
    return "es vocal"
  }
  return "no es vocal";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
