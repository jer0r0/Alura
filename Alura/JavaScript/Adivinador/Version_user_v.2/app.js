let numeroSecreto = parseInt(Math.random()*11);
let numeroIntentos = 1;
console.log(numeroSecreto);
let numeroAdivinar = 0 ;
let maxIntentos= 5;
let numeroMinimo= 1;
let numeroMaximo= 10;


function num_correct() {
    let numeroAdivinar;

    alert('Bienvenida y bievenido a nuestro juego de adivinanza!');
    if(numeroSecreto == 0){
        numeroSecreto = parseInt(Math.random()*11);
    }

    while (numeroAdivinar != numeroSecreto && numeroIntentos <= maxIntentos) {
        numeroAdivinar = prompt('Escoja un numero entre 1 y 10. Recuerda que tienes 5 intentos para adivinarlo');
        console.log("El numero a adivinar es: "+ numeroAdivinar);
        if(numeroAdivinar <numeroMinimo || numeroAdivinar >numeroMaximo){
            alert(`El numero ${numeroAdivinar} no se encuentra dentro de los parametros establecidos (Es menor que ${numeroMinimo} o mayor que ${numeroMaximo})`)            
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