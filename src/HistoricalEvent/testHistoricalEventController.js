var historicalEvent = require("./HistoricalEvent.js");
var historyController = require("./HistoricalEventController.js"),
assert = require("assert");

var controller = new historyController();
assert(controller, "Creado controlador de eventos históricos");
assert.equal(controller.getHistoricalEventsList().length,0);

var event = new historicalEvent("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
controller.addHistoricalEvent(event);
assert.equal(controller.getHistoricalEventsList().length,"1");

var event2 = new historicalEvent("Orgullo bisexual", 31, 9, 2020, "Día de visibilización de la bisexualidad", "d_lara@gmail.com");
controller.addHistoricalEvent(event2);

controller.deleteHistoricalEvent(event);
assert.equal(controller.getHistoricalEventsList().length,"0");


console.log("El controlador de eventos históricos ha pasado todos los tests");
