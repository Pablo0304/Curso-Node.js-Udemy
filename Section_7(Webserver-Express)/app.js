const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático('/'):   <= Tiene prioridad, luego las "app.get(...)"
app.use(express.static('public'));

/*app.get('/yep', (req, res) => {   // Si el path es "/yep"
    res.send('Hola desde "/yep"!');
});*/
/*app.get('/', (req, res) => {   // Si el path es "/"
    res.sendFile(__dirname + '/public/index.html');
});*/

app.get('/', (req, res) => {   // Si el path es "/" (renderizada)
    res.render('home', {       // Pilla el home de views por defecto
        nombre: 'Pablo Gonzálbez',
        titulo: 'Título',
        desc: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {   // Si el path es "/generic" (renderizada)
    res.render('generic', {
        nombre: 'Pablo Gonzálbez',
        titulo: 'Título',
        desc: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {   // Si el path es "/elements" (renderizada)
    res.render('elements', {
        nombre: 'Pablo Gonzálbez',
        titulo: 'Título',
        desc: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/PRUEBA/404.html');   // Para mandar un archivo HTML
    // __dirname pilla el path donde está instalado todo
    // No funciona el css, creo que es por la web hosteada
});

app.listen(port);
console.log(`Escuchando en el puerto ${port}...`);