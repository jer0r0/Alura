function imc(h,kg){

    let resultado = kg / (sqrt(h));
    asignarElemento('p',`El imc de una persona que mide ${h} y pesa ${kg} es de ${resultado}.`);
    return resultado;
}

function factorialWrapped(n){
    let resultado = 0;
    if(n === 1 ){
        
        return 1;
    }
        return n * factorialWrapped(n-1);
}

function factorial(n){
    asignarElemento('p',`El factorial de ${n} es igual a ${factorialWrapped(n)}`);
}

function dolarToReales(n){
    let valorReales = n * 4.80;
    asignarElemento('p',`${n} dolares equivalen a ${valorReales} Reales. `);
    return valorReales;
}

function asignarElemento(elemento, text){ //llena los elementos de elemento en text
    let htmlElement = document.querySelector(elemento);
    htmlElement.innerHTML = text;
    return;
}

function agregarElemento(elemento, text){ //llena los elementos de elemento en text
    let htmlElement = document.querySelector(elemento);
    htmlElement.innerHTML += text;
    return;
}

function areaPerimetro(h,a){
    let area = h * a;
    let perimetro= (2*h) + (2*a);
    asignarElemento('p',`El area del rectangulo de anchura ${a} y altura ${h} es ${area}\n
    y el perimetro del mismo rectangulo es ${perimetro}.`);
}
function sqrt(n){
    return n*n;
}

function areaPerimetro2(r){
    let pi= 3.14
    let area = pi *(sqrt(r));
    let perimetro= (2*r)*pi;
    asignarElemento('p',`El area de la circunferencia de radio ${r} es ${area}\n
    y el perimetro de la misma circunferencia es ${perimetro}.`);
}

function mostrarTablaMultiplicar(numero) {
    let cadena = `Tabla de multiplicar del ${numero}:<br/>`;
    for (let i = 1; i <= 10; i++) {
        cadena+=`${numero} x ${i} = ${numero * i}<br/>`;
    }
    asignarElemento('p',cadena);
  }