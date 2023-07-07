const inquirer = require('inquirer');
require('colors');



const inquirerMenu = async() => {

    console.clear();
    console.log('============================'.green);
    console.log(`   Seleccione una opción:   `.white);
    console.log('============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción:',
        choices: [
            {
                value: '1',
                name: `${ '1.'.yellow } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.yellow } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.yellow } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.yellow } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.yellow } Crear tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.yellow } Borrar tarea(s)`
            },
            {
                value: '0',
                name: `${ '0.'.yellow } Salir`
            }
        ]
    }
]

const pausa = async() => {

    const enter = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar...`
        }
    ]
    console.log('\n'); // para que no esté todo pegado
    await inquirer.prompt(enter);

}

const leerInput = async( mensaje ) => {
    
    const question = [
        {
            type: 'input',
            name: 'res',
            message: mensaje,
            validate( value ) {  // para validar que el existe mensaje, esto es propio de la documentación de "inquirer"
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { res } = await inquirer.prompt(question);
    return res;

}

module.exports = { inquirerMenu, pausa, leerInput }