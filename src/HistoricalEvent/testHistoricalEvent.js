var event = require("./HistoricalEvent.js"),
assert = require("assert");

var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
assert(historicalEvent, "Creado evento");
assert.equal(historicalEvent.getName(), "Día del orgullo");
assert.equal(historicalEvent.getDescription(), "Día de celebración y reclamación de los derechos del colectivo");
assert.ok(historicalEvent.isDateValid());

var historicalEvent2 = new event("Orgullo bisexual", 23, 9, 2020, "Día de visibilización de la bisexualidad", "d_lara@gmail.com");
assert(historicalEvent2, "Creado evento");
assert.equal(historicalEvent2.getName(), "Orgullo bisexual");
assert.equal(historicalEvent2.getDescription(), "Día de visibilización de la bisexualidad");

var historicalEvent3 = new event("Prueba fecha", 29, 2, 2019, "");
assert.equal(historicalEvent3.isDateValid(), false);

console.log("Los eventos históricos han pasado todos los tests");
