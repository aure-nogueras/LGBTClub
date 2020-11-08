/*jshint esversion: 6 */
var history = require("../HistoricalEvent/HistoricalEventController.js");
var info = require("../InfoAndExperiences/InfoAndExperiencesController.js");

// Clase User
class User{
	
	constructor(name, email, isLGTB){
		this.name = name;
		this.email = email;
		this.isLGTB = isLGTB;
	}
	
	// Hay dos tipos de usuarios, LGTB y no LGTB
	// El get nos servirá para obtener el tipo
	getUserLGTB(){
		return this.isLGTB;
	}
	
	// Añadir un evento histórico como usuario HU1
	addHistoricalEvent(historicalEvent, historicalEventsList){
		historicalEventsList.addHistoricalEvent(historicalEvent);
	}
	
	// Añadir términos como usuario LGTB HU2
	addInfoAndExperiences(experience, infoAndExperiencesList){
		if(this.getUserLGTB()){
			infoAndExperiencesList.addInfoAndExperiences(experience);
		}else{
			console.log("Este usuario no puede añadir términos ni experiencias porque no es LGTB");
		}
	}
}

module.exports = User;
