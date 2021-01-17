/*jshint esversion: 6 */

var request = require('supertest'),
app = require('../recurso/HistoricalEventRutas.js');
assert = require("assert");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

describe('HistoricalEventRutas', function(){
	// Prueba que se carguen bien las librerías
	describe('Carga', function(){
		it('Debería cargar las librerías de forma correcta', function(){
			assert(app, "Cargada librería de rutas");
		});
	});	

	// Relacionado con HU8
	describe("POST evento", function(){
		it('Crea un evento', function(done){
			var postData = 
			{
				"name": "Orgullo",
				"day": "28",
				"month": "6",
				"year": "2020",
				"description": "Celebracion",
				"email": "lisa@correo.es"
			}
			request(app)
				.post('/events')
				.send(postData)
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Relacionado con HU10
	describe("DELETE evento", function(){
		it('Borra información sobre un evento', function(done){
			request(app)
				.delete('/events/Orgullo/28/6/2020/Celebracion/lisa@correo.es')
				.set('Accept', 'application/json')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Obtener todos los eventos
	describe("GET todos los eventos", function(){
		it('Obtiene todos los eventos', function(done){
			request(app)
				.get('/events')
				.set('Accept', 'application/json')
				.expect('Content-Type',/json/)
				.expect(200,done);
		});
	});

	// Relacionado con HU10
	describe("DELETE evento", function(){
		it('Devuelve error al no encontrar el evento', function(done){
			request(app)
				.delete('/events/Orgullo/28/6/2020/Celebracion/lisa@correo.es')
				.set('Accept', 'application/json')
				.expect('Content-Type',/json/)
				.expect(404,done);
		});
	});
});
