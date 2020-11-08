var history = require("../HistoricalEvent/HistoricalEvent.js");

// Clase User
class User{
	
	constructor(name, email, isLGTB){
		this.name = name;
		this.email = email;
		this.isLGTB = isLGTB;
	}
	
	// Añadir un evento histórico como usuario HU1
	addHistoricalEvent(historicalEvent, email){
		history.addHistoricalEvent(historicalEvent, email);
	}
}

module.exports = User
