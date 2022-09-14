// const es constante y no se puede editar, let es para scope también y var es global
// si no se pone nada funciona igual porque da var o let(ciertamente no sé cuál es)

let nombre = 'Pablo';

if( true ){
    let nombre = 'Paco';
}

console.log(nombre);