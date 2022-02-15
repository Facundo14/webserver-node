require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//middleweare - Servir contenido estático

app.use(express.static('public'));


//Como se puso el middleware arriba que apunta a la carpeta public nunca se va a ejecutar el app.get('/')
// app.get('/', (req, res) => {
//   res.send('Home page')
// });

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Facundo Tanovich',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Facundo Tanovich',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Facundo Tanovich',
    titulo: 'Curso de Node'
  });
});


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});