const argv = require('yargs')
    .option('b', {  // mirar en la documentación de "option" porque ahí están todas las opciones "alias, type, demandOption,..."
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'
    }).option('l', {  // mirar en la documentación de "option" porque ahí están todas las opciones "alias, type, demandOption,..."
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en la pantlla'
    }).option('hasta', {  // mirar en la documentación de "option" porque ahí están todas las opciones "alias, type, demandOption,..."
        alias: 'num',
        type: 'number',
        default: true,
        describe: 'número máximo de multiplicaciones'
    }).check((argv, options) => { // mirar en la documentación de "check"
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true
}).argv;

module.exports = argv;