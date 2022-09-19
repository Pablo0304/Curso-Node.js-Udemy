const{ crearArchivo } = require('./helpers/multiplicar');







// let base = 3;

// crearArchivo(base).then(nombreArchivo => console.log(nombreArchivo, 'creado')).catch(err => console.log(err));





// RECIBIR INFORMACIÓN DESDE LÍNEA DE COMANDO
    //console.log(process.argv); // argumentos del proceso, tenemos que ejecutar con "--base=5"
    //const [ , , arg3] = process.argv;
    //const [ , base] = arg3.split('='); // se separa el argumento en dos partes, antes y después del "="
//
    //console.log(base);
    // se utiliza el paquete "yargs"
//



// YARGS
console.clear();
/* const argv = require('yargs')
    .option('b', {  // mirar en la documentación de "option" porque ahí están todas las opciones "alias, type, demandOption,..."
        alias: 'base',
        type: 'number',
        demandOption: true
    }).option('l', {  // mirar en la documentación de "option" porque ahí están todas las opciones "alias, type, demandOption,..."
        alias: 'listar',
        type: 'boolean',
        default: false
    }).check((argv, options) => { // mirar en la documentación de "check"
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true
}).argv; */

const argv = require('./config/yargs');
crearArchivo(argv.b, argv.l).then(nombreArchivo => console.log(nombreArchivo, 'creado')).catch(err => console.log(err));

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);