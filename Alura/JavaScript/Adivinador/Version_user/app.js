let numeroSecreto = parseInt(Math.random()*11);
let numeroIntentos = 1;
alert(numeroSecreto);


function num_correct() {
    let numeroAdivinar;

    alert('Bienvenida y bievenido a nuestro juegto de adivinanza!');

    while (numeroAdivinar != numeroSecreto) {
        let numeroAdivinar = prompt('Escoja un numero del 0 al 9');
        if (numeroAdivinar == numeroSecreto) {
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