
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let numeroIntentos = 1; // cantidad de intentos que ustede lleva 

let numeroAdivinar = 0 ;

let maxIntentos= 5; //Maximo de intentos posibles 

let numeroMinimo= -100; //El numero minimo dentro del cual usted desea adivinar 
let numeroMaximo= -1; //El numero maximo dentro del cual usted desea adivinar 

let numeroSecreto = parseInt(getRandomArbitrary(numeroMinimo, numeroMaximo));
console.log(numeroSecreto);



//Lo que plantee fue poner variables para el numero maximo y minimo
//a partir de ahi ya podemos variar cada intervalo de acuerdo a lo que requiera el usuario

function num_correct() {
    let numeroAdivinar;

    
    alert('Bienvenida y bievenido a nuestro juego de adivinanza!');
    /*
    if(numeroSecreto == 0){

        numeroSecreto = parseInt(Math.random()*11);
        console.log(`el numero inicial fue cero, se cambio por${numeroSecreto}`)
    }
    */

    while (numeroAdivinar != numeroSecreto && numeroIntentos < maxIntentos) {
        numeroAdivinar = prompt(`Escoja un numero entre ${numeroMinimo} y ${numeroMaximo}. Recuerda que tienes ${maxIntentos} intentos para adivinarlo`);
        console.log("El numero a adivinar es: "+ numeroSecreto);
        if(numeroAdivinar <numeroMinimo || numeroAdivinar >numeroMaximo){
            alert(`El numero ${numeroAdivinar} no se encuentra dentro de los parametros establecidos (Es mayor que ${numeroMinimo} y menor que ${numeroMaximo})`)            
        }else if (numeroAdivinar == numeroSecreto) {
                console.log(`La comparacion entre ${numeroAdivinar} y  ${numeroSecreto} resulto ser ${numeroAdivinar == numeroSecreto }`)
                break;
            } else {
                if (numeroAdivinar > numeroSecreto) {
                    alert('El número secreto es menor');
                } else {
                    alert('El número secreto es mayor');
                }
            }
            numeroIntentos++;
        }
    let palabraintento = numeroIntentos > 1 ? 'intentos' : 'intento' 
    alert(`El número secreto era ${numeroSecreto} y lo encontraste en: ${numeroIntentos} ${palabraintento}`)
  }

num_correct();