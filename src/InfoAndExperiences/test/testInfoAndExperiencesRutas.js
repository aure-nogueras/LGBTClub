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

});
