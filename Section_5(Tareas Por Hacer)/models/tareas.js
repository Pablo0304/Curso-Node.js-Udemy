const Tarea = require('./tarea');
const { leerDB } = require('../helpers/guardarArchivo');
const colors = require('colors');

/* 
    _listado:
        { e8c063e2-1401-4bd5-bfd1-a9c0fe883dcf: { id:12, desc:asd, completadoEn:99231 } }
*/

class Tareas {

    _listado = {};

    get listadoArr() {  // transformar objeto a array
        const listado = [];
        Object.keys(this._listado).forEach(key => {  // puro JS, de un objeto se saca un array con un "forEach"
            listado.push(this._listado[key]);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
        //  this._listado[tarea.id] = tarea;
    }

    crearTarea(desc = '', compl, complEn) {

        const tarea = new Tarea(desc, compl, complEn);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {

        let data = leerDB();
        let res = '';
        let cont = 1;

        data.forEach(tarea => {
            res += `${cont++}.`.green + ` ${tarea.desc}`.magenta + ' :: ';
            if (tarea.completado == 'Pendiente') {
                res += 'Pendiente \n'.red;
            } else if (tarea.completado == 'Completada') {
                res += `Completada (${tarea.completadoEn}) \n`.green;
            }
        })

        if (cont == 1) {
            console.log("\n  No hay tareas en la lista... :(".grey);
        } else { console.log(res); }
    }

    listarPendientesCompletadas(completado = true) {
        let data = leerDB();
        let res = '';
        let cont = 1;

        if (completado == true) {
            data.forEach(tarea => {
                if (tarea.completado == 'Completada') {
                    res += `${cont++}.`.green + ` ${tarea.desc}`.magenta + ' :: ';
                    res += `Completada (${tarea.completadoEn}) \n`.green;
                }
            })
        } else {
            data.forEach(tarea => {
                if (tarea.completado == 'Pendiente') {
                    res += `${cont++}.`.green + ` ${tarea.desc}`.magenta + ' :: ';
                    res += "Pendiente \n".red;
                }
            })
        }

        if (cont == 1) {
            console.log("\n  No hay tareas en la lista... :(".grey);
        } else { console.log(res); }
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

}

module.exports = Tareas;