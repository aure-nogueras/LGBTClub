var historyController = require("../HistoricalEvent/HistoricalEventController.js");
var event = require("../HistoricalEvent/HistoricalEvent.js");
var info = require("../InfoAndExperiences/InfoAndExperiences.js");
var infoController = require("../InfoAndExperiences/InfoAndExperiencesController.js");
var usersList = require("./UserController.js");
var user = require("./User.js"),
assert = require("assert");


describe('User', function(){

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

	// Prueba que se haya creado el objeto User 
	describe('Crea', function(){
		it('Debería crear un objeto User de forma correcta', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			assert(member, "Creado usuario");
		});
	});
	
	// Prueba que el hecho de que el usuario sea o no LGTB se almacene bien
	describe('Obtener si el usuario es LGTB', function(){
		it('Debería obtener si el usuario es LGTB o no de forma correcta', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			assert.equal(member.getUserLGTB(), true);
		});
	});
	
	// Prueba que el usuario añade un evento histórico correctamente
	describe('Añadir evento a la lista', function(){
		it('Debería obtenerse una lista con un evento histórico', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "lp_90@gmail.com");
			var controllerEH = new historyController();
			member.addHistoricalEvent(historicalEvent, controllerEH);
			assert.equal(controllerEH.getHistoricalEventsList().length,"1");
		});
	});
	
	// Prueba que el usuario elimina un evento histórico de forma correcta
	describe('Eliminar evento de la lista', function(){
		it('Debería obtenerse una lista con ningún evento histórico', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "lp_90@gmail.com");
			var controllerEH = new historyController();
			member.deleteHistoricalEvent(historicalEvent, controllerEH);
			assert.equal(controllerEH.getHistoricalEventsList().length,"0");
		});
	});
	
	// Prueba que el usuario no puede eliminar un evento si no es su autor
	describe('Eliminar evento de la lista sin ser su autor', function(){
		it('Debería obtenerse una lista con un evento, ya que el usuario no puede borrarlo', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var historicalEvent2 = new event("Orgullo bisexual", 23, 9, 2020, "Día de visibilización de la bisexualidad", "d_lara@gmail.com");
			var controllerEH = new historyController();
			controllerEH.addHistoricalEvent(historicalEvent2);
			member.deleteHistoricalEvent(historicalEvent2, controllerEH);
			assert.equal(controllerEH.getHistoricalEventsList().length,"1");
		});
	});
	
	// Prueba que el usuario añade un término o experiencia correctamente
	describe('Añadir término o experiencia a la lista', function(){
		it('Debería obtenerse una lista con un término o experiencia', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var controllerIAE = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
			member.addInfoAndExperiences(experience, controllerIAE);
			assert.equal(controllerIAE.getInfoAndExperiencesList().length,"1");
		});
	});
	
	// Prueba que el usuario no puede añadir un término o experiencia al no ser LGTB
	describe('Añadir término o experiencia de la lista', function(){
		it('Debería obtenerse una lista con ningún término o experiencia, ya que el usuario no puede añadir nada al no ser LGTB', function(){
			var member = new user("Laura", "l_jimenez@gmail.com", false);
			var controllerIAE = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
			member.addInfoAndExperiences(experience, controllerIAE);
			assert.equal(controllerIAE.getInfoAndExperiencesList().length,"0");
		});
	});
	
	// Prueba que el usuario elimina un término o experiencia correctamente
	describe('Eliminar término o experiencia a la lista', function(){
		it('Debería obtenerse una lista con ningún término o experiencia', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var controllerIAE = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
			member.addInfoAndExperiences(experience, controllerIAE);
			member.deleteInfoAndExperiences(experience, controllerIAE);
			assert.equal(controllerIAE.getInfoAndExperiencesList().length,"0");
		});
	});
	
	// Prueba que el usuario puede modificar un evento si es su autor y es LGTB
	describe('Modificar término o experiencia de la lista como autor', function(){
		it('Debería obtenerse una lista con un término o experiencia con la descripción modificada', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var controllerIAE = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
			member.addInfoAndExperiences(experience, controllerIAE);
			member.modifyInfoAndExperiences(experience, "Descripción nueva", controllerIAE);
			assert.equal(controllerIAE.getInfoAndExperiencesList()[0].getDescription(), "Descripción nueva");
			assert.equal(controllerIAE.getInfoAndExperiencesList().length,"1");
		});
	});
	
	
	// Prueba que el usuario puede suscribirse al servicio de mensajes
	describe('Suscribirse como usuario', function(){
		it('Debería obtenerse una lista con un usuario', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var listUsers = new usersList();
			member.addUser(listUsers);
			assert.equal(listUsers.getUsersList().length, "1");
		});
	});
	
	// Prueba que el usuario puede desuscribirse del servicio de mensajes
	describe('Desuscribirse como usuario', function(){
		it('Debería obtenerse una lista con ningún usuario', function(){
			var member = new user("Dylan", "lp_90@gmail.com", true);
			var listUsers = new usersList();
			member.addUser(listUsers);
			member.deleteUser(listUsers);
			assert.equal(listUsers.getUsersList().length, "0");
		});
	});
	

});


