// Ejercicio 1 - multiplicar elementos del array y e total por el otro parametro
function multiArray(array,num) {
  var result = [4,4,5,12].reduce(function(x, y){ return x * y; });
  return result * num;
}
console.log(multiArray([4,4,5,12],9)); // 8640

// Ejercicio 2 = identificar los numeros que contengan 784
function numFilter(num){
  return num == 784
}
var miArray = [784123123, 355676784, 3423543554].filter(numFilter);

console.log(miArray);

// Ejercicio 3 - multiplos de 7
var myArray = [];
  function multi(value){
  if((value % 7) == 0) {
    myArray.push(value);
  }
}
var nuevoArray = [7,21,44,80,77,35];
nuevoArray.forEach(multi);
console.log(myArray); // [7, 21, 77, 35]

// Ejercicio 4 - multiplicar x 2 e incrementar en 1
var arreglo = [2,5,7,2,3,8,10]
var respuesta = arreglo.map(function(x){
  return (x*2) + 1;
})
console.log(respuesta); // [5, 11, 15, 5, 7, 17, 21]

// Ejercicio 5 - convertir de grados celsius a fahrenheit
var celsius = [5,8,12,20,26,32];
var fahrenheit = celsius.map(function(a){
  return parseInt((9/5)*a)+32
})
console.log(fahrenheit); // [41, 46, 53, 68, 78, 89]

// Ejercicio 6
var totalMulti = [1,2,3,4].reduce(function(x,y){
  return x * y;
})
console.log(totalMulti); // 24

// Ejercicio 7
var ages = [20,16,24,53,89];
var bornYear = ages.map(function (x){
  if((x > 18) && ((x % 2)== 0)){
    return 2017 - x;
  }
});
console.log(bornYear)
