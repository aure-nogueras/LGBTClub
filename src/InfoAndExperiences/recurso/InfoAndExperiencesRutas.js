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

var config = require("./InfoAndExperiencesPortConfig");

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

// Modifica la descripción de una experiencia HU12
app.put('/experiences/:name/:description/:email', function (req, res) {
	var name = req.params.name;
	var description = req.params.description;
	var email = req.params.email;
	var nueva_descripcion = req.body.new_description;
	var nueva_experiencia = new info(name, description, email);
	var mensaje;
	if(controller.findInfoAndExperiences(nueva_experiencia) != -1){
		mensaje = "Modificado con éxito\n";
		logger.info("Modifica una experiencia");
		res.status(200).send({mensaje});
		controller.modifyInfoAndExperiences(nueva_experiencia, nueva_descripcion);
	}else{
		mensaje = "No existe esa experiencia\n";
		logger.info("No modifica una experiencia porque no existe");
		res.status(404).send({mensaje});
	}
});

// Borra una experiencia HU11
app.delete('/experiences/:name/:description/:email', function (req, res) {
	var nueva_experiencia = new info(req.params.name, req.params.description, req.params.email);
	var mensaje;
	if(controller.findInfoAndExperiences(nueva_experiencia) != -1){
		mensaje = "Borrado con éxito\n";
		logger.info("Borra una experiencia");
		res.status(200).send({mensaje});
		controller.deleteInfoAndExperiences(nueva_experiencia);
	}else{
		mensaje = "No existe esa experiencia\n";
		logger.info("No borra una experiencia porque no existe");
		res.status(404).send({mensaje});
	}
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

// Modifica la descripción de un término HU12
app.put('/infos/:name/:description/:email', function (req, res) {
	var name = req.params.name;
	var description = req.params.description;
	var email = req.params.email;
	var nueva_descripcion = req.body.new_description;
	var nuevo_termino = new info(name, description, email);
	var mensaje;
	if(controller.findInfoAndExperiences(nuevo_termino) != -1){
		mensaje = "Modificado con éxito\n";
		logger.info("Modifica un término");
		res.status(200).send({mensaje});
		controller.modifyInfoAndExperiences(nuevo_termino, nueva_descripcion);
	}else{
		mensaje = "No existe ese término\n";
		logger.info("No modifica un término porque no existe");
		res.status(404).send({mensaje});
	}
});

// Borra un término HU11
app.delete('/infos/:name/:description/:email', function (req, res) {
	var nuevo_termino = new info(req.params.name, req.params.description, req.params.email);
	var mensaje;
	if(controller.findInfoAndExperiences(nuevo_termino) != -1){
		mensaje = "Borrado con éxito\n";
		logger.info("Borra un término");
		res.status(200).send({mensaje});
		controller.deleteInfoAndExperiences(nuevo_termino);
	}else{
		mensaje = "No existe ese término\n";
		logger.info("No borra un término porque no existe");
		res.status(404).send({mensaje});
	}
});

// Obtener todas las experiencias y términos
app.get('/infoandexperiences', function (req, res) {
	logger.info("Obtiene todos los términos y experiencias");
	res.status(200).send(controller.getInfoAndExperiencesList());
});

var connection = config.connection;

connection().then(val=>{
	app.listen(val.port, val.ip, function(){
		console.log("El servidor se está ejecutando en " + val.ip + ":" + val.port);
  	});

});


module.exports = app;
