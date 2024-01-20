let numeroSecreto = 6;
let maximos_int = 5;


//console.log(numeroUsuario);
/*
if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
}else{
     alert('No adivinaste el numero correcto');
} 
*/

function num_correct() {
    if(maximos_int > 0){
        let numeroUsuario = prompt("Me indicas un numero por favor:");
        if (numeroUsuario == numeroSecreto) {
            alert('Acertaste el numero');
            return true;
        }else if(numeroUsuario>numeroSecreto){
            alert('El numero es menor, No adivinaste el numero correcto, prueba de nuevo, intentos restantes: '+ maximos_int);
            maximos_int-= 1;
            num_correct();
            return false;

        }else if(numeroUsuario<numeroSecreto){
            alert('El numero es mayor, No adivinaste el numero correcto, prueba de nuevo, intentos restantes: '+ maximos_int);
            maximos_int-= 1;
            num_correct();
            return false;

        }
    }else{
        alert('El numero maximo de intentos ha sido alcanzado, ¡Perdiste!');
    }
        
  }

num_correct();