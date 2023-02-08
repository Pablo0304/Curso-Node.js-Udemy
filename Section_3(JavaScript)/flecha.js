//function sumar( a, b = 10 ) {    // le da un valor por si quieres dar solo el parámetro "a"
//    return a + b;
//}

//console.log(sumar(5,1000));

const  sumar = ( a,b ) => {      //=> "const sumar = (a,b) => a + b;"
    return a + b;
}
console.log(sumar(3,4));


const saludar = () => 'Hola Mundo!';
console.log(saludar());