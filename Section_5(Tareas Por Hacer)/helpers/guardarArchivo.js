const fs = require('fs');

const archivo = './database/data.json'

const guardarDB = ( data ) => {
    
    fs.writeFileSync( archivo, JSON.stringify(data) );  // convierte a string

}

const leerDB = () => {
    
    if( !fs.existsSync(archivo) ) {  // si no existe el archivo
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});  // solo con esto devolvería un string
    const data = JSON.parse( info );  // convierte en JSON

    return data;
}

module.exports = { guardarDB, leerDB }