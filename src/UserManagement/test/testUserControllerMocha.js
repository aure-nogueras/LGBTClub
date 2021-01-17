var historyController = require("../../HistoricalEvent/modelo/HistoricalEventController.js");
var event = require("../../HistoricalEvent/modelo/HistoricalEvent.js");
var info = require("../../InfoAndExperiences/modelo/InfoAndExperiences.js");
var infoController = require("../../InfoAndExperiences/modelo/InfoAndExperiencesController.js");
var usersList = require("../modelo/UserController.js");
var user = require("../modelo/User.js"),
assert = require("assert");

describe('UserController', function(){

	// Prueba que se carguen bien las librerías
	describe('Carga', function(){
		it('Debería cargar las librerías de forma correcta', function(){
			assert(infoController, "Cargada librería controlador de testimonios");
			assert(info, "Cargada librería de las experiencias y los términos");
			assert(event, "Cargada librería del evento histórico");
			assert(historyController, "Cargada librería del controlador de eventos históricos");
			assert(user, "Cargada librería de los usuarios");
			assert(usersList, "Cargada librería del controlador de usuarios");
		});
	});	

	// Prueba que se hayan creado bien los objetos User y UserController
	describe('Crea', function(){
		it('Debería crear un objeto User y un objeto UserController de forma correcta', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			assert(member, "Creado usuario");
			var listUsers = new usersList();
			assert(listUsers, "Creado controlador");
		});
	});
	
	// Prueba que se obtiene la lista de usuarios
	describe('Obtener lista de usuarios', function(){
		it('Debería obtener una lista vacía de usuarios', function(){
			var listUsers = new usersList();
			assert.equal(listUsers.getUsersList().length,0);
		});
	});
	
	// Prueba que se obtiene si un usuario ha sido añadido o no
	describe('Obtener si un usuario ha sido añadido', function(){
		it('Debería obtener que el usuario ha sido añadido', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var listUsers = new usersList();
			listUsers.addUser(member);
			assert.equal(listUsers.isAdded(member), true);
			assert.equal(member.getSubscription(), true);
		});
	});
	
	// Prueba que puede añadirse un usuario al servicio de mensajes
	describe('Añadir un usuario', function(){
		it('Debería obtenerse una lista con un usuario', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var listUsers = new usersList();
			listUsers.addUser(member);
			assert.equal(listUsers.getUsersList().length, "1");
			assert.equal(member.getSubscription(), true);
		});
	});
	
	// Prueba que puede eliminarse un usuario del servicio de mensajes
	describe('Eliminar un usuario', function(){
		it('Debería obtenerse una lista con ningún usuario', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var listUsers = new usersList();
			listUsers.addUser(member);
			listUsers.deleteUser(member);
			assert.equal(listUsers.getUsersList().length, "0");
			assert.equal(member.getSubscription(), false);
		});
	});
	
	// Prueba que pueden modificarse los datos de un usuario del servicio de mensajes
	describe('Modificar los datos de un usuario', function(){
		it('Debería obtenerse una lista con un usuario y sus datos cambiados', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var member2 = new user("Laura", "l_jimenez@gmail.com", false);
			var listUsers = new usersList();
			listUsers.addUser(member);
			listUsers.modifyUser(member, member2);
			assert.equal(listUsers.getUsersList()[0].name, "Laura");
			assert.equal(listUsers.getUsersList().length, "1");
		});
	});
	
	// Prueba que se envía un evento y un término a los usuarios
	// Por ahora lo imprime por pantalla
	describe('Enviar un término y un evento a los usuarios', function(){
		it('Deberían obtenerse un término y un evento', function(){
			var listUsers = new usersList();
			var controllerEH = new historyController();
			var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
			controllerEH.addHistoricalEvent(historicalEvent);

			var controllerIAE = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
			controllerIAE.addInfoAndExperiences(experience);

			assert.equal(listUsers.sendInfoToUsers(controllerEH, controllerIAE), "Evento diario: Día del orgullo Día de celebración y reclamación de los derechos del colectivo\n" + "Experiencia diaria: Trans Que no se identifica con el género asignado al nacer \n");
		});
	});

});

