console.log("Bienvenidos a mi primer programa"); 

let nombre = "Jeronimo";

console.log(`¡Hola, ${nombre}!`);

alert(`¡Hola, ${nombre}!`);

let lenguaje = prompt("¿Cúal es el lenguaje de programación que mas te gusta?");
console.log(`El lenguaje de programación que mas te gusta es: ${lenguaje}`);
let valor1; 
let valor2; 
let a, b;
function suma( a,b){
    return a+b;
}
let resultado = suma(valor1, valor2)
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
function diferencia(a,b){
    return a-b;
}
let resultado2 = diferencia(valor1, valor2)

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);
let edad = prompt("¿Cúal estu edad?");

if(edad >=18){
    console.log("La persona es mayor de edad");
}else{
    console.log("La persona es menor de edad");
}

let numero = prompt("Digite su número");

if(numero>0){
    console.log("El numero es positivo");
}else if( numero < 0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es cero");
}

let numMinimo = 1;
let numMaximo = 10; 

while(numMinimo <= numMaximo){
     console.log(numMinimo);
     numMinimo++;
}

let nota = 5;
if( nota >= 7){
    console.log("El alumno ha aprobado la materia ");
}else{
    console.log("El alumno ha reprobado la materia ");
}

let numRandom1 =  Math.random(); 
console.log(numRandom1);

let numRandom2 = Math.floor(Math.random()*10+1);
console.log(numRandom2);


let numRandom3 =  Math.floor(Math.random()*1000+1);
console.log(numRandom3);

