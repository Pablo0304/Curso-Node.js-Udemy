//  la versión 9 de inquirer ahora requiere el uso de módulos de ECMAScript, por eso gasto la versión 8.1.2
require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ) {  // establecer tareas
        
    }

    do{
        // opt = await mostrarMenu();  // imprimir menú
        opt = await inquirerMenu();  // imprimir menú

        switch (opt) {
            case '1':
                // crear tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
            break;
            
            case '2':
                // mostrar tareas
                console.log(tareas._listado);
            break;

            case '3':
                // listar tareas completadas

            break;

            case '4':
                // listar tareas pendientes

            break;

            case '5':
                // completar tarea(s)

            break;

            case '6':
                // borrar tarea(s)

            break;
        }

        //guardarDB( tareas.listadoArr );

        //if(opt!=='0') await pausa();
        await pausa();
    }while(opt!=='0')

    //pausa();
}

main();