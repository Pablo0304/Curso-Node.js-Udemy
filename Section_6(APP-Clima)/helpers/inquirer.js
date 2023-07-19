const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () => {

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
                value: 1,
                name: `${'1.'.yellow} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.yellow} Historial`
            },
            {
                value: 0,
                name: `${'0.'.yellow} Salir`
            }
        ]
    }
]

const pausa = async () => {

    const enter = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar...`
        }
    ]
    console.log('\n'); // para que no esté todo pegado
    await inquirer.prompt(enter);

}

const leerInput = async (mensaje) => {

    const question = [
        {
            type: 'input',
            name: 'res',
            message: mensaje,
            validate(value) {  // para validar que el existe mensaje, esto es propio de la documentación de "inquirer"
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { res } = await inquirer.prompt(question);
    return res;

}

const listadoBorrarTareas = async (tareas, i = []) => {
    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    //   Con "unshift" se pone al principio del todo
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar:',
            choices
        }
    ];
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (mensaje) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
};

const mostrarListadoChecklist = async (tareas, i = []) => {
    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione:',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = { inquirerMenu, pausa, leerInput, listadoBorrarTareas, confirmar, mostrarListadoChecklist }