/*jshint esversion: 6 */
var user = require("./User.js");

// Controlador de User
// En principio se usará un array de usuarios
// Más adelante se conectará con una base de datos de donde se añadirán o eliminarán los elementos

class UserController{

	constructor(){
		this.usersList = [];
	}
	
	getUsersList(){
		return this.usersList;
	}
	
	// Comprobar si un usuario existe ya
	isAdded(person){
		var added = false;
		let pos = this.usersList.indexOf(person);
		if(pos != -1){
			added = true;
		}
		return added;
	}
	
	// Añadir a un usuario HU13
	addUser(member){
		if(!this.isAdded(member)){
			this.usersList.push(member);
			member.setSuscription(true);
		}else{
			console.log("Ese usuario ya está añadido");
		}
	}
	
	// Eliminar a un usuario HU14
	deleteUser(member){
		let pos = this.usersList.indexOf(member);
		this.usersList.splice(member, 1);
		member.setSuscription(false);
	}
	
	// Modificar los datos de un usuario HU15
	modifyUser(oldUser, newUser){
		this.deleteUser(oldUser);
		this.addUser(newUser);
	}
	
	// Mandar información a los usuarios diariamente HU16
	// De momento se imprime por pantalla para probarlo
	sendInfoToUsers(historicalEvents, infoAndExperiences){
		var posHE = Math.floor(Math.random()*historicalEvents.getHistoricalEventsList().length);
		var posIAE = Math.floor(Math.random()*infoAndExperiences.getInfoAndExperiencesList().length);
		var message = "Evento diario: " + historicalEvents.getHistoricalEventsList()[posHE].getName() + " " + historicalEvents.getHistoricalEventsList()[posHE].getDescription() + "\nExperiencia diaria: " + infoAndExperiences.getInfoAndExperiencesList()[posIAE].getName() + " " + infoAndExperiences.getInfoAndExperiencesList()[posIAE].getDescription() + " \n";
		process.stdout.write(message);
		return message;
	}
}

module.exports = UserController;
