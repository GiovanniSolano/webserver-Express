const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// una funcion que se dispara cuando el template lo requiera



app.get('/', (req, res) => {
    //     // res.send('Hello World')

    //     let salida = {
    //         nombre: 'giovanni',
    //         edad: 32,
    //         url: req.url
    //     }

    res.render('home', {
        nombre: 'Giovanni',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //     // res.send('Hello World')

    //     let salida = {
    //         nombre: 'giovanni',
    //         edad: 32,
    //         url: req.url
    //     }

    res.render('about', {
        nombre: 'Giovanni',
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});