const http = require('http');


//CREAR SERVIDOR


http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
            nombre: 'giovanni',
            edad: 32,
            url: req.url
        }
        // res.write('Hola Mundo');
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log("Escuchando el puerto 8080");