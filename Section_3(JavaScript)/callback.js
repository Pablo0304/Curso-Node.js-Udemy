// Es una función que se va a ejecutar cuando se acaben las instrucciones principales, mirar en "Section_2" el archivo "app3.js"
const getUserById = ( id, peso, callback ) => {

    const usuario = {
        id,    //=> "id: id"
        nombre: 'Pablo',
        edad: 20,
        peso
    }
    setTimeout(() => {
        callback(usuario);
    }, 1500);

}

getUserById(10, 87.7, ( usuario ) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
    console.log(usuario.edad);
});