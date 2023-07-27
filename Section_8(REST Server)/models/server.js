const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user';

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Public Directory
        this.app.use(express.static('public'));
    }

    routes() {   // Pueden haber más en caso de que haya p.e. artículos en venta

        this.app.use(this.usersPath, require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en "localhost:${this.port}"...`);
        });
    }

}

module.exports = Server;