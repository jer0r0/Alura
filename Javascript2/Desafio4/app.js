let listaGenerica = [];

let min=1;
let max = 10;
let listaSecretos=[];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby' );
lenguagesDeProgramacion.push('GoLang');

function mostrarElementosLenguajes(){
    for(let i = 0;  i < lenguagesDeProgramacion.length;i++){
        console.log(`El lenguaje es '${lenguagesDeProgramacion[i]}' y se encuentra en la posicion ${i+1}`);
    }
}
//mostrarElementosLenguajes();
function getRandomArbitrary(x,min, max) { //return un elemnto entre dos intervalos (min, max) 
    let numero_generado =parseInt(Math.random() * (max - min) + min);
    if(x.length === max){
        console.log(`La lista esta completa.`)
    }else{
        if(x.includes(numero_generado)){
            return getRandomArbitrary(x,min, max);
        }else{
            return numero_generado;
        }
    }
}
function addArray(lista,elemento){
    lista.push(elemento);
}

let listaNumeros = [];
addArray(listaNumeros,getRandomArbitrary(listaNumeros,min,max));
addArray(listaNumeros,getRandomArbitrary(listaNumeros,min,max));
addArray(listaNumeros,getRandomArbitrary(listaNumeros,min,max));
addArray(listaNumeros,getRandomArbitrary(listaNumeros,min,max));
addArray(listaNumeros,getRandomArbitrary(listaNumeros,min,max));


function mostrarElementosNumeros(){
    for(let i = 0;  i < listaNumeros.length;i++){
        console.log(listaNumeros[i]);
    }
}
function average(x){
    let suma = 0;
    let average = 0;
    //console.log(`long = ${listaNumeros.length}`);
    for(let i = 0;  i < x.length;i++){
        //console.log(suma);
        suma += x[i];
    }
    average = suma/x.length;
    //console.log(`suma = ${suma}`);
    console.log(`El promedio es ${average}.`);
    return average;
}
average(listaNumeros);
function copia(elemento){
    let arraycopy = [];
    for(let i = 0; i< elemento.length; i++){
        arraycopy.push(elemento[i]);
    }
    //console.log(`El arreglo inicial es ${elemento}\nLa copia del elemento es: ${arraycopy}`)
    return arraycopy;
}
function minimo(i){
    let array = copia(i);
    array.sort();
    //console.log(array);
    //console.log(`El minimo es ${array[0]}`);
    return array[0];
}
function maximo(i){
    let array = copia(i);
    array.sort();
    //console.log(array);
    //console.log(`El minimo es ${array[array.length-1]}`);
    return array[array.length-1];
}
function maxMin(i){
    console.log(`Array = ${i}`)
    console.log(`maximo = ${maximo(i)}\nMinimo = ${minimo(i)}`);
}
maxMin(listaNumeros);

function suma(x){
    let suma= 0;
    for(let i = 0;  i < x.length;i++){
        //console.log(suma);
        suma += x[i];
    }
    console.log(`La suma es igual a ${suma}`);
    return suma;
}
suma(listaNumeros);

function find(lista, buscar){
    let index = 0; 

    for(let i = 0; i< lista.length; i++){
        //console.log(`El numero i es ${i}`);
        if(parseInt(lista[i]) === parseInt(buscar)){
            index = i;
            console.log(`El numero solicitado se encuentra en: ${index}`);
            return index;
        }
    }
    index = -1;
    console.log(`El numero "${buscar}" no se encuentra dentro de la lista.`);
    return index;
}
find(listaNumeros,6);



let listaNumeros2 =[];
addArray(listaNumeros2,getRandomArbitrary(listaNumeros2,min,max));
addArray(listaNumeros2,getRandomArbitrary(listaNumeros2,min,max));
addArray(listaNumeros2,getRandomArbitrary(listaNumeros2,min,max));
addArray(listaNumeros2,getRandomArbitrary(listaNumeros2,min,max));
addArray(listaNumeros2,getRandomArbitrary(listaNumeros2,min,max));
maxMin(listaNumeros2);


function sumArray(lista, lista2){
    if(lista.length !== lista2.length){
        console.log(`El tamaño de las listas no concuerda, por favor verfique los tamaños de ambas listas`)
    }
    let listaResultante = [];
    for(let i = 0; i<lista.length ; i++){
        listaResultante[i] = lista[i]+lista2[i];
    }
    console.log(`Array sumado= ${listaResultante}`);
    //console.log(listaResultante);
    return listaResultante;
}
sumArray(listaNumeros,listaNumeros2);


function sqrtArray(lista){
    let listaResultante = [];
    for(let i = 0; i<lista.length ; i++){
        listaResultante[i] = lista[i]*lista[i];
    }
    console.log(`Array al cuadrado= ${listaResultante}`);
    //console.log(listaResultante);
    return listaResultante;
}

sqrtArray(listaNumeros);


