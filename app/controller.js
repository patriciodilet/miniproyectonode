var Empleador = require('./modelo/empleador');


// Obtiene todos los objetos Empleador de la base de datos
exports.getEmpleador= function (req, res){
	Empleador.find(
		function(err, empleador) {
			if (err)
				res.send(err)
					res.json(empleador); // devuelve todas los Empleadores en JSON
				}
			);
}

// Guarda un objeto Empleador en base de datos
exports.setEmpleador = function(req, res) {

		// Creo el objeto Empleador
		Empleador.create(
			{empleador : req.body.empleador,	fingreso: req.body.fingreso, trabajador: req.body.trabajador},
			function(err, empleador) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas los Empleadores al crear uno de ellos
				Empleador.find(function(err, empleador) {
				 	if (err)
				 		res.send(err)
				 	res.json(empleador);
				});
			});

	}

// Modificamos un objeto Empleador de la base de datos
exports.updateEmpleador = function(req, res){
	Empleador.update( {_id : req.params.empleador_id},
					{$set:{empleador : req.body.empleador,	fingreso: req.body.fingreso, trabajador: req.body.trabajador}},
					function(err, empleador) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas los Empleadores al crear uno de ellos
				Empleador.find(function(err, empleador) {
				 	if (err)
				 		res.send(err)
				 	res.json(empleador);
				});
			});
	}

// Elimino un objeto Empleador de la base de Datos
exports.removeEmpleador = function(req, res) {
	Empleador.remove({_id : req.params.empleador_id}, function(err, empleador) {
		if (err)
			res.send(err);

			// Obtine y devuelve todos los Empleadores tras borrar uno de ellos
			Empleador.find(function(err, empleador) {
				if (err)
					res.send(err)
				res.json(empleador);
			});
		});
}
