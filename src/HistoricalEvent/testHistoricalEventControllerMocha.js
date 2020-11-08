var historicalEvent = require("./HistoricalEvent.js");
var historyController = require("./HistoricalEventController.js"),
assert = require("assert");

describe('HistoricalEventController', function(){

	// Prueba que se carguen bien las librerías
	describe('Carga', function(){
		it('Debería cargar las librerías de forma correcta', function(){
			assert(historicalEvent, "Cargada librería del evento histórico");
			assert(historyController, "Cargada librería del controlador");
		});
	});	

	// Prueba que se hayan creado los objetos HistoricalEvent e HistoricalEventController
	describe('Crea', function(){
		it('Debería crear un objeto HistoricalEvent y un objeto HistoricalEventController de forma correcta', function(){
			var event = new historicalEvent("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
			var controller = new historyController();
			assert(event, "Creado evento histórico");
			assert(controller, "Creado controlador de eventos históricos");
		});
	});
	
	// Prueba que se obtiene la lista de eventos históricos
	describe('Obtener lista de eventos históricos', function(){
		it('Debería obtener una lista vacía de eventos históricos', function(){
			var controller = new historyController();
			assert.equal(controller.getHistoricalEventsList().length,0);
		});
	});
	
	// Prueba que se añade un evento histórico de forma correcta
	describe('Añadir evento a la lista', function(){
		it('Debería obtenerse una lista con un evento histórico', function(){
			var event = new historicalEvent("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
			var controller = new historyController();
			controller.addHistoricalEvent(event);
			assert.equal(controller.getHistoricalEventsList().length,"1");
		});
	});
	
	// Prueba que se elimina un evento histórico de forma correcta
	describe('Eliminar evento de la lista', function(){
		it('Debería obtenerse una lista con ningún evento histórico', function(){
			var event = new historicalEvent("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
			var controller = new historyController();
			controller.addHistoricalEvent(event);
			controller.deleteHistoricalEvent(event);
			assert.equal(controller.getHistoricalEventsList().length,"0");
		});
	});
	
});


