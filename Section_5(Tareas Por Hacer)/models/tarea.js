const { v4: uudiv4 } = require('uuid');  // así se renombra, en vez de ser "v4" es "uudiv4"

/* 
    tarea:
        { id:12, desc:asd, completadoEn:99231 }
*/

class Tarea {

    id = '';
    desc = '';
    completado = null;

    constructor(desc, compl = null) {

        this.id = uudiv4();
        this.desc = desc;
        this.completado = compl;

    }

}

module.exports = Tarea;