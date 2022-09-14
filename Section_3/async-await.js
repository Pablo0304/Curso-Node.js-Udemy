const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

getEmpleado = ( id ) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;
        // if-else
        (empleado)
            ?resolve(empleado)
            :reject(`No existe empleado con id ${ id }`);
        }

    );

};

getSalario = ( id ) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find( e => e.id === id )?.salario;
        // if-else
        (salario)
            ?resolve(salario)
            :reject(`No existe salario con id ${ id }`);
        }

    );

};

const getInfoUsuario = async() => {

    try{
        const empleado = await getEmpleado(id);    // el await dice que espere a que devuelva la promesa
        const salario = await getSalario(id);
        return `El salario del empleado: ${ empleado } es de ${ salario }`;
    } catch(error) {
        return error;
    }

}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg));    // no hace falta el catch porque ya está en la función y ésta ya devuelve el error