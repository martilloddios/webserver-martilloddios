const express = require('express');
const { registerHelper } = require('hbs');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

// Express + HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'javier',
    });
})


app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${ port }`);
});