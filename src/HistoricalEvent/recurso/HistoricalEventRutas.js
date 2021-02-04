/*jshint esversion: 6 */

const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});


var express=require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

const {Config} = require("./HistoricalEventPortConfig");
const config = new Config;

var history = require("../modelo/HistoricalEvent.js");
var historyController = require("../modelo/HistoricalEventController.js");
var controller = new historyController();

// Obtener todos los eventos
app.get('/events', function (req, res) {
	logger.info("Obtiene todos los eventos históricos");
	res.status(200).send(controller.getHistoricalEventsList());
});

// Crea un evento histórico HU8
app.post('/events', function (req, res) {
	var name = req.body.name;
	var day = req.body.day;
	var month = req.body.month;
	var year = req.body.year;
	var description = req.body.description;
	var email = req.body.email;
	var nuevo_evento = new history(name, day, month, year, description, email);
	controller.addHistoricalEvent(nuevo_evento);
	logger.info("Crea un evento histórico");
	res.status(200).send(nuevo_evento);
});

// Borra un evento histórico HU10
app.delete('/events/:name/:day/:month/:year/:description/:email', function (req, res) {
	var nuevo_evento = new history(req.params.name, req.params.day, req.params.month, req.params.year, req.params.description, req.params.email);
	var mensaje;
	if(controller.findHistoricalEvent(nuevo_evento) != -1){
		mensaje = "Borrado con éxito\n";
		logger.info("Borra un evento histórico");
		res.status(200).send({mensaje});
		controller.deleteHistoricalEvent(nuevo_evento);
	}else{
		mensaje = "No existe ese evento\n";
		logger.info("No borra un evento porque no existe");
		res.status(404).send({mensaje});
	}
});

app.listen(config.port, config.ip, function(){
	console.log("El servidor se está ejecutando en " + config.ip + ":" + config.port);
});

module.exports = app;
