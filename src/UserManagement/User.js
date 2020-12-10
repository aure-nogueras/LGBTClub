/*jshint esversion: 6 */
var history = require("../HistoricalEvent/HistoricalEventController.js");
var info = require("../InfoAndExperiences/InfoAndExperiencesController.js");

// Clase User
class User{
	
	constructor(name, email, isLGTB){
		this.name = name;
		this.email = email;
		this.isLGTB = isLGTB;
		this.subscribed = false;
	}
	
	// Hay dos tipos de usuarios, LGTB y no LGTB
	// El get nos servirá para obtener el tipo
	getUserLGTB(){
		return this.isLGTB;
	}
	
	// Saber si se está suscrito al servicio, relacionado con HU18
	getSuscription(){
		return this.subscribed;
	}
	
	// Asignar un nuevo valor a la suscripción del usuario
	// Relacionado con #55
	setSuscription(subscribed){
		this.subscribed = subscribed;
	}
	
	// Añadir un evento histórico como usuario HU1
	// Comprobar suscripción #55
	addHistoricalEvent(historicalEvent, historicalEventsList){
		if(this.subscribed){
			historicalEventsList.addHistoricalEvent(historicalEvent);
		}else{
			console.log("El usuario no está suscrito al servicio");
		}
	}
	
	// Añadir términos como usuario LGTB HU2
	// Comprobar suscripción #55
	addInfoAndExperiences(experience, infoAndExperiencesList){
		if(this.getUserLGTB() && this.subscribed){
			infoAndExperiencesList.addInfoAndExperiences(experience);
		}else{
			if(!this.getUserLGTB()){
				console.log("Este usuario no puede añadir términos ni experiencias porque no es LGTB");
			}
			if(!this.subscribed){
				console.log("El usuario no está suscrito al servicio");
			}
		}
	}
	
	// Eliminar un evento histórico como usuario HU3
	// Comprobar suscripción #55
	deleteHistoricalEvent(historicalEvent, historicalEventsList){
		if(historicalEvent.getEmail() == this.email && this.subscribed()){
			historicalEventsList.deleteHistoricalEvent(historicalEvent);
		}else{
			if(historicalEvent.getEmail() != this.email){
				console.log("Este usuario no ha creado este evento, así que no puede eliminarlo");
			}
			if(!this.subscribed){
				console.log("El usuario no está suscrito al servicio");
			}
		}
	}
	
	// Eliminar un término como usuario LGTB HU4
	// Comprobar suscripción #55
	deleteInfoAndExperiences(experience, infoAndExperiencesList){
		if(this.subscribed){
			if(experience.getEmail() == this.email && this.getUserLGTB()){
				infoAndExperiencesList.deleteInfoAndExperiences(experience);
			}else{
				console.log("Este usuario no ha creado este término o no es LGTB, así que no puede borrarlo");
			}
		}else{
			console.log("El usuario no está suscrito al servicio");
		}
	}
	
	// Modificar un término como usuario LGTB HU5
	// Comprobar suscripción #55
	modifyInfoAndExperiences(experience, description, infoAndExperiencesList){
		if(this.subscribed){
			if(experience.getEmail() == this.email && this.getUserLGTB()){
				infoAndExperiencesList.modifyInfoAndExperiences(experience, description);
			}else{
				console.log("Este usuario no ha creado este término o no es LGTB, así que no puede modificarlo");
			}
		}else{
			console.log("El usuario no está suscrito al servicio");
		}
	}
	
	// Notificar error en evento histórico HU17
	// De momento lo borra directamente, más adelante se harán más comprobaciones
	notifyErrorHistoricalEvent(historicalEvent, historicalEventsList){
		historicalEventsList.deleteHistoricalEvent(historicalEvent);
	}
	
	// Suscribirse al servicio de mensajería como usuario HU6
	addUser(usersList){
		usersList.addUser(this);
	}
	
	// Desuscribirse del servicio de mensajería como usuario HU7
	deleteUser(usersList){
		usersList.deleteUser(this);
	}
}

module.exports = User;
