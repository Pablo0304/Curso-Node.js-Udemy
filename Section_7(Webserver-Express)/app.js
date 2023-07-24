const express = require('express');
const app = express();

const port = 8080;

// Servir contenido estático('/'):   <= Tiene prioridad, luego las "app.get(...)"
app.use(express.static('public'));

app.get('/yep', (req, res) => {   // Si el path es "/yep"
    res.send('Hola desde "/yep"!');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');   // Para mandar un archivo HTML
                                                    // __dirname pilla el path donde está instalado todo
});

app.listen(port);
console.log(`Escuchando en el puerto ${port}...`);