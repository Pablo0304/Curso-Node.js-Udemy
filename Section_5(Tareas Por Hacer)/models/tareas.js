const Tarea = require('./tarea');

/* 
    _listado:
        { e8c063e2-1401-4bd5-bfd1-a9c0fe883dcf: { id:12, desc:asd, completadoEn:99231 } }
*/

class Tareas {

    _listado = {};

    get listadoArr() {  // transformar objeto a array
        const listado = [];
        Object.keys( this._listado ).forEach( key => {  // puro JS, de un objeto se saca un array con un "forEach"
            listado.push( this._listado[key] );
        });
        return listado;
    }
    
    constructor() {    
        this._listado = {};
    }

    
    crearTarea( desc ='' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

}

module.exports = Tareas;