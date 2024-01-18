/*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/
alert("Para ver los resultados abrir la consola del navegador. (Ctrl + Shift + 'i')")

console.log(" \nNumeros del 1 al 10");
let contador = 1;
while(contador <= 10){
    console.log(`El numero es ${contador}`);
    contador++;
}

/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/
console.log(" \nNumeros del 10 al 0");
let contador2 = 10;
while(contador2 >=0 ){
    console.log(`El numero es ${contador2}`);
    contador2--;
}

/*Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

console.log(" \nCuenta hasta x numero");
let numeroMaximo = prompt("Dame el numero para iniciar la cuenta hacia adelante");
let cuenta = 0; 
while(cuenta <= numeroMaximo){
    console.log(`El numero es ${cuenta}`);
    cuenta++;
}

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

console.log(" \nCuenta regresiva");
let numeroInfimo = prompt("Dame el numero para iniciar la cuenta atras");
let cuenta2 = 0; 
while(numeroInfimo >= cuenta2){
    console.log(`El numero es ${numeroInfimo}`);
    numeroInfimo--;
}