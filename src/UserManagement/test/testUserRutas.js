/*jshint esversion: 6 */

var request = require('supertest'),
app = require('../recurso/UserRutas.js');
assert = require("assert");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

describe('UserRutas', function(){
	// Prueba que se carguen bien las librerías
	describe('Carga', function(){
		it('Debería cargar las librerías de forma correcta', function(){
			assert(app, "Cargada librería de rutas");
		});
	});	

	// Crea un usuario HU13
	describe("POST usuario", function(){
		it('Crea un usuario', function(done){
			var postData = 
			{
				"name": "Lisa",
				"email": "lisa@correo.es",
				"isLGTB": true
			};
			request(app)
				.post('/users')
				.send(postData)
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});
	
	// Obtener todos los usuarios
	describe("GET todos los usuarios", function(){
		it('Obtiene todos los usuarios', function(done){
			request(app)
				.get('/users')
				.set('Accept', 'application/json')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

});
