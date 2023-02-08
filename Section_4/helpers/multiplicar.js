const fs = require('fs'); // require del File System
// no hace falta la constante colors porque está instalado el paquete

const crearArchivo = (base = 5, listar = false, num = 10) => {
    
    return new Promise((resolve, reject) => {
        let salida = '';
        let consola = '';

        for(let i = 1; i <= num; i++){
            salida +=  `${ base } x ${ i } = ${ base * i }\n` ;
            consola +=  `${ base } ${ 'x'.magenta } ${ i } = ${ base * i }\n` ;
        }

        if(listar){
            console.log('===================');
            console.log(`   Tabla del: ${ base }    `);
            console.log('===================');
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        (salida)
            ?resolve(`tabla-${ base }.txt`)
            :reject('error');
        }
    );
    
}

module.exports = {
    crearArchivo
}