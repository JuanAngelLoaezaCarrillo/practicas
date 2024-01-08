 // Ejercicio 982

 function ingresenumero(numero) {
    return function(v, i, a) {
        return v > numero;
    }

 }

 let numeros = [6, 11, 14, 15, 22, 25, 23, 42];

let sonmayores = numeros.filter(ingresenumero(20));

console.log(sonmayores); // [13, 11, 19, 23]