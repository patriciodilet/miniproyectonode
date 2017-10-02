var mongoose = require('mongoose');

module.exports = mongoose.model('Empleador', {
	empleador: String,
	fingreso: String,
	trabajador: String
});
