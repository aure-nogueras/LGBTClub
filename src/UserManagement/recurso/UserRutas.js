/*jshint esversion: 6 */

const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

var user = require("../modelo/User.js");
var userController = require("../modelo/UserController.js");
var controller = new userController();

var express=require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies


// Crea un usuario HU13
app.post('/users', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var isLGTB = req.body.isLGTB;
	var nuevo_usuario = new user(name, email, isLGTB);
	controller.addUser(nuevo_usuario);
	logger.info("Añade un usuario");
	res.status(200).send(nuevo_usuario);
});

// Obtener todos los usuarios
app.get('/users', function (req, res) {
	logger.info("Obtiene la lista de todos");
	res.status(200).send(controller.getUsersList());
});


module.exports = app;
