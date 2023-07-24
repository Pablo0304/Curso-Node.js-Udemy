const http = require('http');

const puerto = 8080;

http.createServer((req, res) => {

    // res.writeHead(200);
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');   // Pondrá nombre al csv
    res.writeHead(200, { 'Content-Type': 'application/csv' });   // Podrá descargar un csv también

    // console.log(req);

    res.write('id, nombre\n')
    res.write('1, Roberto\n')
    res.write('2, Alicia\n')
    res.write('3, Pablo\n')
    res.write('4, Ricardo\n')
    res.write('5, Carla\n')


    res.end();   // Con esto no se mantiene en espera al cliente

}).listen(puerto);

console.log(`Escuchando en el puerto ${puerto}...`);