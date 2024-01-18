/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/

let dia = prompt(`¿Qué dia de la semana es hoy?`);
let day = dia.toLowerCase()
if(day == "sabado" || day == "domingo" || day == "sábado"){
     alert( "¡Buen fin de semana!");
}else{
    alert( "¡Buena semana!");
}


/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/


let numero = prompt(`Ingrese un numero:`);
if(numero< 0){
     alert(`El numero ${numero} es negativo`) 
}else if( numero > 0){
    alert(`El numero ${numero} es positivo`)
}else{
    alert(`El numero es "cero".`)
}


/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".*/
let puntuacion = 0;
if(puntuacion >= 100){
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intenta nuevamente para ganar.")
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.*/
let monto = 10000; 
let mensaje; 
mensaje = `Señor usuario, el saldo de su cuenta bancaria es de ${monto} pesos`
alert(mensaje)

/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

let nombre = prompt("¿Cúal es su nombre?")
alert(`Bienvenido ${nombre}`)
