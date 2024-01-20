let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio ';

function clickOnButton(){
    console.log('El botón fue clicado');
}
function askUser(){
    let ciudad = prompt('Escriba el nombre de una ciudad Brasileña');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
function alertOnButton(){
    alert("Yo amo JS");
}

function suma(a,b){
    let result;
    result = a+b;
    return (result);
}

function sumaPrompt(){
    let a,b=0;
    a = parseFloat(prompt("Digite el primer numero a sumar"));
    b = parseFloat(prompt("Digite el segundo numero a sumar"));
    let result = suma(a,b);
    alert(`La suma de ${a} y ${b} es igual a ${result}. `)
}
