require('dotenv').config();   // Mete en las variables de entorno lo que tengamos en el archivo ".env"
// Para acceder a una variable:
// console.log(process.env.MAPBOX_KEY);

const { inquirerMenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                // Buscar los lugares
                const lugares = await busquedas.ciudad(termino);

                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;   // Si es 0 no hace nada
                const lugarSeleccionado = lugares.find(l => l.id === id);

                // Guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                // Clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                // Mostrar resultados
                console.clear();
                console.log('\nInformación de la cuidad'.green);
                console.log('Ciudad:', lugarSeleccionado.nombre);
                console.log('Lat:', lugarSeleccionado.lat);
                console.log('Long:', lugarSeleccionado.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Clima:', clima.desc);
                break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }

        if (opt !== 0) {
            await pausa();
        }
    } while (opt !== 0);


}

main();