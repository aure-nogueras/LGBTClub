/*jshint esversion: 6 */

// Clase InfoAndExperiences
class InfoAndExperiences{
	
	// La experiencia personal incluye un email 
	// Alude a la persona que añadió la experiencia
	constructor(name, description, email){
		this.name = name;
		this.description = description;
		this.email = email;
	}
	
	// Relacionado con la clase User
	getEmail(){
		return this.email;
	}
	
}

module.exports = InfoAndExperiences;

