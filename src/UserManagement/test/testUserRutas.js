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
	
	// Modifica los datos de un usuario HU15
	describe("PUT usuario", function(){
		var putData = 
			{
				"name": "Lisa",
				"email": "lisa@correo.es",
				"isLGTB": true,
				"subscription": true,
				"new_name": "Lisa Lara",
				"new_email": "lisa32@correo.es",
				"new_isLGTB": true,
				"new_subscription": true
			};
		it('Modifica a un usuario', function(done){
			request(app)
				.put('/users')
				.send(putData)
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

	// Borra un usuario HU14
	describe("DELETE usuario", function(){
		it('Borra a un usuario', function(done){
			request(app)
				.delete('/users/Lisa%20Lara/lisa32@correo.es')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// No borra a un usuario porque no existe HU14
	describe("DELETE usuario", function(){
		it('Devuelve error al no encontrar al usuario', function(done){
			request(app)
				.delete('/users/Lisa%20Lara/lisa32@correo.es')
				.expect('Content-Type',/json/)
				.expect(404,done);
		});
	});
});
