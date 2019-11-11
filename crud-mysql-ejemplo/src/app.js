const path = require('path');
const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importsar rutas
constindiceRutas = require('./rutas/index');


//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'vistas'))

//Middleware
app.use()

app.listen(app.get('port'),() => {
	console.log('Escuchando en el puerto 3000');
});