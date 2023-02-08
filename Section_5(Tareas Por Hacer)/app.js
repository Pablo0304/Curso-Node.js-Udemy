//  la versión 9 de inquirer ahora requiere el uso de módulos de ECMAScript, por eso gasto la versión 8.1.2
require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    console.log('Hola Mundo');

    let opt = '';

    do{
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        
        //if(opt!=='0') await pausa();
    }while(opt!=='0')

    //pausa();
}

main();