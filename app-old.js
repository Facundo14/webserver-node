const http = require('http');

http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'application/json'});

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});


    res.write('Hola mundo')
    // res.write('id, nombre\n');
    // res.write('1, Facundo\n');
    // res.write('2, Ginna\n');
    // res.write('3, David\n');

    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);