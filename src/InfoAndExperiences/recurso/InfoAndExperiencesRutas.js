/*jshint esversion: 6 */

const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

var info = require("../modelo/InfoAndExperiences.js");
var infoController = require("../modelo/InfoAndExperiencesController.js");
var controller = new infoController();

var express=require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

// Crea una experiencia HU9
app.post('/experiences', function (req, res) {
	var name = req.body.name;
	var description = req.body.description;
	var email = req.body.email;
	var nueva_experiencia = new info(name, description, email);
	controller.addInfoAndExperiences(nueva_experiencia);
	logger.info("Crea una experiencia");
	res.status(200).send(nueva_experiencia);
});

// Crea un término HU9
app.post('/infos', function (req, res) {
	var name = req.body.name;
	var description = req.body.description;
	var email = req.body.email;
	var nuevo_termino = new info(name, description, email);
	controller.addInfoAndExperiences(nuevo_termino);
	logger.info("Crea un término");
	res.status(200).send(nuevo_termino);
});

// Obtener todas las experiencias y términos
app.get('/infoandexperiences', function (req, res) {
	logger.info("Obtiene todos los términos y experiencias");
	res.status(200).send(controller.getInfoAndExperiencesList());
});


module.exports = app;
