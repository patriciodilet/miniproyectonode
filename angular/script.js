// create the module and name it scotchApp
var app = angular.module('miApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route ,para el home
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// ruta , para informacion de nuestros empleadores
		.when('/empleadores', {
			templateUrl : 'pages/empleadores.html',
			controller  : 'empleadoresController'
		})

		// route , para informacion de nosotros
		.when('/nosotros', {
			templateUrl : 'pages/nosotros.html',
			controller  : 'aboutController'
		})

		// route, para pagina de contacto
		.when('/contactanos', {
			templateUrl : 'pages/contacto.html',
			controller  : 'contactController'
		});
});

// el main controller and inject Angular's $scope
app.controller('mainController', function($scope) {
	// nuestro mensaje del home
	$scope.message = 'Bienvenido a nuestro sitio web, es un ejemplo sencillo realizado con nuevas tecnologías!';
});

app.controller('empleadoresController', function($scope, $http) {
	$scope.newEmpleador = {};
	$scope.empleadores = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/empleador').success(function(data) {
		$scope.empleadores = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a un empleador
	$scope.registrarEmpleador = function() {
		$http.post('/api/empleador', $scope.newEmpleador)
		.success(function(data) {
				$scope.newEmpleador = {}; // Borramos los datos del formulario
				$scope.empleadores = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un empleador
	$scope.modificarEmpleador = function(newEmpleador) {
		$http.put('/api/empleador/' + $scope.newEmpleador._id, $scope.newEmpleador)
		.success(function(data) {
				$scope.newEmpleador = {}; // Borramos los datos del formulario
				$scope.empleadores = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto empleador conocido su id
	$scope.borrarEmpleador = function(newEmpleador) {
		$http.delete('/api/empleador/' + $scope.newEmpleador._id)
		.success(function(data) {
			$scope.newEmpleador = {};
			$scope.empleadores = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para obtener el objeto seleccionado en la tabla
	$scope.selectEmpleador = function(empleador) {
		$scope.newEmpleador = empleador;
		$scope.selected = true;
		console.log($scope.newEmpleador, $scope.selected);
	};
});

app.controller('personaController', function($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/persona').success(function(data) {
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a una persona
	$scope.registrarPersona = function() {
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};
});

app.controller('aboutController', function($scope) {
	$scope.message = 'mensaje de nosotros.';
});

app.controller('contactController', function($scope) {
	$scope.message = 'mensaje de contacto.';
});
