alert('¡Bienvenida y bievenido a nuestro sitio web!');
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
nombre = prompt('¿Cúal es tu nombre?');
edad = prompt('¿Cúal es tu edad?');
alert(`Su nombres es ${nombre} y su edad es ${edad}.`)
if(edad >= 18){
    alert('¡Puedes obtener tu licencia de conducir!')
}else{alert('No puedes obtener tu licencia')}
