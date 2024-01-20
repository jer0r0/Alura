function helloWorld(){
     console.log("¡Hola mundo!");
}

function helloUser(nombre){
    console.log(`¡Hola, ${nombre}`);
}

function double(x){
    let double = 2*parseInt(x);
    console.log(double);
    return double;
}

function average(a,b,c){
    let sum = parseInt(a) + parseInt(b) + parseInt(c);
    let average = sum / 3;
    console.log(average);
    return average;
}

function max(a,b){
    let max= 0;
    if(parseInt(a)< parseInt(b)){
        max = parseInt(b);
        console.log(max)
        return max;
    }else if(parseInt(a)> parseInt(b)){
        max = parseInt(a);
        console.log(max)
        return max;
    }else{
        max = parseInt(a);
        console.log(max)
        return parseInt(max); 
    }
}

function sqrt(x){
    let sqrt = x*x;
    console.log(sqrt);
    return parseInt(sqrt);
}