var Empleador = require('./modelo/empleador');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Empleadores
	app.get('/api/empleador', Controller.getEmpleador);
	// Crear un nuevo Empleador
	app.post('/api/empleador', Controller.setEmpleador);
	// Modificar los datos de un Empleador
	app.put('/api/empleador/:empleador_id', Controller.updateEmpleador);
	// Borrar un Empleador
	app.delete('/api/empleador/:empleador_id', Controller.removeEmpleador);

	// application -------------------------------------------------------------
	//app.get('*', function(req, res) {
		//res.sendfile('./angular/index.html'); // Carga única de la vista
	//});
};
