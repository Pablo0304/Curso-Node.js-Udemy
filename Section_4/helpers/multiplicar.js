const fs = require('fs'); // require del File System

const crearArchivo = (base = 5, listar = false) => {
    
    return new Promise((resolve, reject) => {
        let salida = '';    

        for(let i = 1; i < 11; i++){
            salida +=  `${ base } x ${ i } = ${ base * i }\n` ;
        }

        if(listar){
            console.log('===================');
            console.log(`   Tabla del: ${ base }    `);
            console.log('===================');
            console.log(salida);
        }

        fs.writeFileSync( `tabla-${ base }.txt`, salida );

        (salida)
            ?resolve(`tabla-${ base }.txt`)
            :reject('error');
        }
    );
    
}

module.exports = {
    crearArchivo
}