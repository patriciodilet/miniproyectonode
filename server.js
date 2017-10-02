// Inicialización
var express = require('express');
var app = express(); // Utilizamos express
var mongoose = require('mongoose'); // mongoose para mongodb
var port = process.env.PORT || 3000; // definimos puerto 8080

// Configuracion
//mongoose.connect('mongodb://localhost:27017/EjemploMEAN'); // Conexión a la base de datos de Mongo con nombre "MeanExample"
mongoose.connect('mongodb://heroku_5f4h5tmx:5f4h55f4h5@ds157614.mlab.com:57614/heroku_5f4h5tmx');
// mongodb://heroku_5f4h5tmx:5f4h55f4h5@ds01316.mlab.com:57614/heroku_5f4h5tmx
// mongodb://heroku_5f4h5tmx:s047l5tqmvbf4kg57q1j716mv4@ds157614.mlab.com:57614/heroku_5f4h5tmx
// mongodb://heroku_5f4h5tmx:5f4h55f4h5@ds157614.mlab.com:57614/heroku_5f4h5tmx con este no funciona
//heroku config:set MONGOLAB_URI=mongodb://heroku_5f4h5tmx:5f4h55f4h5@ds01316.mlab.com:57614/heroku_5f4h5tmx
app.configure(function() {
    app.use(express.static(__dirname + '/angular'));
    app.use(express.logger('dev')); // activamos el log en modo 'dev'
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// rutas
require('./app/routes.js')(app);

// puerto que escuchara
app.listen(port);
console.log("La APP se encuentra escuchando por el puerto " + port);