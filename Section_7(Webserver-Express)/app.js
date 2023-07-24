const http = require('http');

const puerto = 8080;

http.createServer((req, res) => {

    console.log(req);

    res.write('Hola mundo');
    res.end();   // Con esto no se mantiene en espera al cliente

}).listen(puerto);

console.log(`Escuchando en el puerto ${puerto}...`);