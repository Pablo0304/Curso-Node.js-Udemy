const film = {
    nombre: 'Cars',
    duracion: '1h57min',
    precio: '5.6/pers',
    getNombre: function() {
        return `${ nombre }`;
    }
}

// const nombre  = film.nombre;
// const duracion = film.duracion;
// const precio = film.precio;

const {nombre, duracion, precio} = film; // desestructuración

function imprimePeli( coche ) {
    const {nombre, duracion, precio} = film;
    console.log(nombre, duracion, precio);    
}

console.log(nombre, duracion, precio);
imprimePeli(film);