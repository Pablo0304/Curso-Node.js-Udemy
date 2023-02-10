//  la versión 9 de inquirer ahora requiere el uso de módulos de ECMAScript, por eso gasto la versión 8.1.2
require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {

    let opt = '';

    console.clear();

    do{
        // opt = await mostrarMenu();
        opt = await inquirerMenu();

        const tareas = new Tareas();

        const tarea = new Tarea('Comprar comida');

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);

        //if(opt!=='0') await pausa();
        await pausa();
    }while(opt!=='0')

    //pausa();
}

main();