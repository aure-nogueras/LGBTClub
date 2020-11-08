var info = require("./InfoAndExperiences.js"),
assert = require("assert");

describe('InfoAndExperiences', function(){

	// Prueba que se cargue bien la librería
	describe('Carga', function(){
		it('Debería cargar la librería de forma correcta', function(){
			assert(info, "Cargada");
		});
	});	

	// Prueba que se haya creado el objeto InfoAndExperiences
	describe('Crea', function(){
		it('Debería crear un objeto InfoAndExperiences de forma correcta', function(){
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
			assert(experience, "Creado término");
		});
	});
	
	// Prueba que el email se almacene bien
	describe('Obtener email', function(){
		it('Debería obtener el mismo email con el que se ha creado la experiencia o el término', function(){
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "k_nl@gmail.com");
			assert.equal(experience.getEmail(), "k_nl@gmail.com");
		});
	});
	
	// Prueba que el nombre de la experiencia o término se almacene bien
	describe('Obtener nombre de la experiencia o el término', function(){
		it('Debería obtener el mismo nombre con el que se ha creado la experiencia', function(){
			var experience = new info("Experiencia", "Soy una persona gay que al fin ha podido casarse", "k_nl@gmail.com");
			assert.equal(experience.getName(), "Experiencia");
		});
	});
	
	// Prueba que la descripción se almacene bien
	describe('Obtener descripción', function(){
		it('Debería obtener la misma descripción con la que se ha creado el término o experiencia', function(){
			var experience = new info("Trans", "Que no se identifica con el género asignado al nacer", "k_nl@gmail.com");
			assert.equal(experience.getDescription(), "Que no se identifica con el género asignado al nacer");
		});
	});
	
	// Prueba que la descripción de un evento se modifica correctamente
	describe('Comprobar que la descripción se modifica', function(){
		it('Debería comprobar que la descripción del término o la experiencia se modifica correctamente', function(){
			var experience = new info("Experiencia", "Soy una persona gay que al fin ha podido casarse", "k_nl@gmail.com");
			experience.setDescription("Modificada la descripción");
			assert.equal(experience.getDescription(), "Modificada la descripción");
		});
	});

});


