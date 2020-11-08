var event = require("./HistoricalEvent.js"),
assert = require("assert");

describe('HistoricalEvent', function(){

	// Prueba que se cargue bien la librería
	describe('Carga', function(){
		it('Debería cargar la librería de forma correcta', function(){
			assert(event, "Cargada");
		});
	});	

	// Prueba que se haya creado el objeto HistoricalEvent
	describe('Crea', function(){
		it('Debería crear un objeto HistoricalEvent de forma correcta', function(){
			var newEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
			assert(newEvent, "Creado evento histórico");
		});
	});
	
	// Prueba que el email se almacene bien
	describe('Obtener email', function(){
		it('Debería obtener el mismo email con el que se ha creado el evento', function(){
			var newEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "felipe@gmail.com");
			assert.equal(newEvent.getEmail(), "felipe@gmail.com");
		});
	});
	
	// Prueba que el nombre del evento se almacene bien
	describe('Obtener nombre del evento', function(){
		it('Debería obtener el mismo nombre con el que se ha creado el evento', function(){
			var newEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "felipe@gmail.com");
			assert.equal(newEvent.getName(), "Día del orgullo");
		});
	});
	
	// Prueba que la descripción se almacene bien
	describe('Obtener descripción', function(){
		it('Debería obtener la misma descripción con la que se ha creado el evento', function(){
			var newEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "felipe@gmail.com");
			assert.equal(newEvent.getDescription(), "Día de celebración y reclamación de los derechos del colectivo");
		});
	});
	
	// Prueba que la fecha sea correcta
	describe('Comprobar que la fecha es correcta', function(){
		it('Debería comprobar que la fecha indicada para el evento es correcta y devolver un mensaje de error en caso de que no lo sea', function(){
			var newEvent = new event("Día del orgullo", 32, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "felipe@gmail.com");
			assert.equal(newEvent.isDateValid(), false);
			var newEvent2 = new event("Orgullo bisexual", 23, 9, 2020, "Día de visibilización de la bisexualidad", "d_lara@gmail.com");
			assert.ok(newEvent2.isDateValid());
		});
	});

});


