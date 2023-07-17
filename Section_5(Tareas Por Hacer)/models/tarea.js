const { v4: uudiv4 } = require('uuid');  // así se renombra, en vez de ser "v4" es "uudiv4"

/* 
    tarea:
        { id:12, desc:asd, completadoEn:99231 }
*/

class Tarea {

    id = '';
    desc = '';
    completado = null;
    completadoEn = null;

    constructor(desc, compl = null, complEn) {

        this.id = uudiv4();
        this.desc = desc;
        this.completado = compl;
        this.completadoEn = this.cambiaFormatoFecha(complEn);

    }

    cambiaFormatoFecha(complEn) {
        if (complEn != null) {
            const [date, time] = complEn.split(", ");

            // Dividir los componentes de la fecha
            const [day, month, year] = date.split("/");

            // Formatear el nuevo formato de fecha y hora
            complEn = `${time.substr(0, 5)} ${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
        }
        return complEn;
    }

}
module.exports = Tarea;