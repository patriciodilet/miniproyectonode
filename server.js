// Inicialización
var express  = require('express');
var app      = express(); 							// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8080; 			// definimos puerto 8080

// Configuracion
mongoose.connect('mongodb://localhost:27017/EjemploMEAN'); 	// Conexión a la base de datos de Mongo con nombre "MeanExample"

app.configure(function() {
	app.use(express.static(__dirname + '/angular'));
	app.use(express.logger('dev')); 						// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// rutas
require('./app/routes.js')(app);

// puerto que escuchara
app.listen(port);
console.log("La APP se encuentra escuchando por el puerto " + port);
