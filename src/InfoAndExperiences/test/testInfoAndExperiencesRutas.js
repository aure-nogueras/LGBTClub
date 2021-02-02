/*jshint esversion: 6 */

var request = require('supertest'),
app = require('../recurso/InfoAndExperiencesRutas.js');
assert = require("assert");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies


describe('InfoAndExperiencesRutas', function(){
	// Prueba que se carguen bien las librerías
	describe('Carga', function(){
		it('Debería cargar las librerías de forma correcta', function(){
			assert(app, "Cargada librería de rutas");
		});
	});	
	
	// Crea una experiencia HU9
	describe("POST experiencia", function(){
		it('Crea una experiencia', function(done){
			var postData = 
			{
				"name": "Experiencia",
				"description": "Soy lesbiana",
				"email": "lisa@correo.es"
			};
			request(app)
				.post('/experiences')
				.send(postData)
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});
	
	// Modifica la descripción de una experiencia HU12
	describe("PUT experiencia", function(){
		it('Modifica la descripción de una experiencia', function(done){
			var putData = 
			{
				"new_description": "Soy bisexual",
			};
			request(app)
				.put('/experiences/Experiencia/Soy%20lesbiana/lisa@correo.es')
				.send(putData)
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Crea un término HU9
	describe("POST info", function(){
		it('Crea información sobre un término', function(done){
			var postData = 
			{
				"name": "No binarie",
				"description": "No identificarse como hombre ni como mujer",
				"email": "rodri@correo.es"
			};
			request(app)
				.post('/infos')
				.send(postData)
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});
	
	// Modifica la descripción de un término HU12
	describe("PUT info", function(){
		var putData = 
			{
				"new_description": "No identificarse ni como hombre ni como mujer",
			};
		it('Modifica la descripción de un término', function(done){
			request(app)
				.put('/infos/No%20binarie/No%20identificarse%20como%20hombre%20ni%20como%20mujer/rodri@correo.es')
				.send(putData)
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Obtiene todas las experiencias y términos
	describe("GET todas las experiencias y términos", function(){
		it('Obtiene todas las experiencias y términos', function(done){
			request(app)
				.get('/infoandexperiences')
				.set('Accept', 'application/json')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Borra un término HU11
	describe("DELETE info", function(){
		it('Borra información sobre un término', function(done){
			request(app)
				.delete('/infos/No%20binarie/No%20identificarse%20ni%20como%20hombre%20ni%20como%20mujer/rodri@correo.es')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Borra una experiencia HU11
	describe("DELETE experiencia", function(){
		it('Borra información sobre una experiencia', function(done){
			request(app)
				.delete('/experiences/Experiencia/Soy%20bisexual/lisa@correo.es')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// No borra un término al no encontrarlo HU11
	describe("DELETE info", function(){
		it('Devuelve error al no encontrar el término', function(done){
			request(app)
				.delete('/infos/No%20binarie/No%20identificarse%20como%20hombre%20ni%20como%20mujer/rodri@correo.es')
				.expect('Content-Type',/json/)
				.expect(404,done);
		});
	});

	// No borra una experiencia al no encontrarlo HU11
	describe("DELETE experiencia", function(){
		it('Devuelve error al no encontrar la experiencia', function(done){
			request(app)
				.delete('/experiences/Experiencia/Soy%20lesbiana/lisa@correo.es')
				.expect('Content-Type',/json/)
				.expect(404,done);
		});
	});
});
