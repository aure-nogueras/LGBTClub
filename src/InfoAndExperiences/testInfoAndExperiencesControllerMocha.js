var info = require("./InfoAndExperiences.js");
var infoController = require("./InfoAndExperiencesController.js"),
assert = require("assert");

describe('InfoAndExperiencesController', function(){

	// Prueba que se carguen bien las librerías
	describe('Carga', function(){
		it('Debería cargar las librerías de forma correcta', function(){
			assert(infoController, "Cargada librería controlador de testimonios");
			assert(info, "Cargada librería de las experiencias y los términos");
		});
	});	

	// Prueba que se hayan creado los objetos InfoAndExperiences e InfoAndExperiencesController
	describe('Crea', function(){
		it('Debería crear un objeto InfoAndExperiences y un objeto InfoAndExperiencesController de forma correcta', function(){
			var controller = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
			assert(controller, "Creado controlador de testimonios");
			assert(experience, "Creada experiencia o término");
		});
	});
	
	// Prueba que se obtiene la lista de experiencias y términos
	describe('Obtener lista de experiencias y términos', function(){
		it('Debería obtener una lista vacía de experiencias y términos', function(){
			var controller = new infoController();
			assert.equal(controller.getInfoAndExperiencesList().length,0);
		});
	});
	
	// Prueba que se añade un término o experiencia de forma correcta
	describe('Añadir término o experiencia a la lista', function(){
		it('Debería obtenerse una lista con un término o experiencia', function(){
			var controller = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
			controller.addInfoAndExperiences(experience);
			assert.equal(controller.getInfoAndExperiencesList().length,"1");
		});
	});
	
	// Prueba que se elimina un evento histórico de forma correcta
	describe('Eliminar término o experiencia de la lista', function(){
		it('Debería obtenerse una lista con ningún término o evento', function(){
			var controller = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
			controller.addInfoAndExperiences(experience);
			controller.deleteInfoAndExperiences(experience);
			assert.equal(controller.getInfoAndExperiencesList().length,"0");
		});
	});
	
	// Prueba que se modifica un término o experiencia de forma correcta
	describe('Modificar término o experiencia', function(){
		it('Debería obtenerse una lista con un término o experiencia y su descripción modificada', function(){
			var controller = new infoController();
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
			controller.modifyInfoAndExperiences(experience, "Cambio descripción");
			assert.equal(controller.getInfoAndExperiencesList()[0].getDescription(), "Cambio descripción");
			assert.equal(controller.getInfoAndExperiencesList().length,"1");
		});
	});
	
	
});


