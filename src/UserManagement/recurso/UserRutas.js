/*jshint esversion: 6 */

const winston = require('winston');
/*const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});
*/
const logger = require('winston-logstash-transport').createLogger(null, {
  application: 'website-ssr-prod',
  logstash: {port: 8089},
  transports: [
    new winston.transports.Console(),
  ]
})

var user = require("../modelo/User.js");
var userController = require("../modelo/UserController.js");
var controller = new userController();

var express=require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

//var config = require("./UserRutasPortConfig");
//import {connection} from UserRutasPortConfig.js
const {Config} = require("./UserRutasPortConfig.js");
const config = new Config;

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

// Borra un usuario HU14
app.delete('/users/:name/:email', function (req, res) {
	var nuevo_usuario = new user(req.params.name, req.params.email, null);
	var valor = (req.params.subscription == 'true');
	var mensaje;
	nuevo_usuario.setSubscription(valor);
	if(controller.findUser(nuevo_usuario) != -1){
		mensaje = "Borrado con éxito\n";
		logger.info("Borra a un usuario");
		res.status(200).send({mensaje});
		controller.deleteUser(nuevo_usuario);
	}else{
		mensaje = "No existe ese usuario\n";
		logger.info("No borra a un usuario porque no existe");
		res.status(404).send(nuevo_usuario);
	}
});


// Modifica los datos de un usuario HU15
app.put('/users/:name/:email', function (req, res) {
	var antiguo_usuario = new user(req.params.name, req.params.email, req.body.isLGTB);
	antiguo_usuario.setSubscription(req.body.subscription);
	var nuevo_usuario = new user(req.body.new_name, req.body.new_email, req.body.new_isLGTB);
	nuevo_usuario.setSubscription(req.body.new_subscription);
	controller.modifyUser(antiguo_usuario, nuevo_usuario);
	logger.info("Modifica los datos de un usuario");
	res.status(200).send(nuevo_usuario);
});

// Obtener todos los usuarios
app.get('/users', function (req, res) {
	logger.info("Obtiene la lista de todos");
	res.status(200).send(controller.getUsersList());
});

app.listen(config.port, config.ip, function(){
	console.log("El servidor se está ejecutando en " + config.ip + ":" + config.port);
});


module.exports = app;
