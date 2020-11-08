/*jshint esversion: 6 */

var info = require("./InfoAndExperiences.js");

// Controlador de InfoAndExperiences
// En principio se usará un array de términos y experiencias personales
// Más adelante se conectará con una base de datos de donde se añadirán o eliminarán los elementos

class InfoAndExperiencesController{

	constructor(){
		this.infoAndExperiences = [];
	}
	
	getInfoAndExperiencesList(){
		return this.infoAndExperiences;
	}
	
	// Añadir un término o experiencia HU9
	addInfoAndExperiences(experience){
		this.infoAndExperiences.push(experience);
	}
	
	// Eliminar un término o experiencia HU11
	deleteInfoAndExperiences(experience){
		let pos = this.infoAndExperiences.indexOf(experience);
		this.infoAndExperiences.splice(pos, 1);
	}
	
	
}

module.exports = InfoAndExperiencesController;

