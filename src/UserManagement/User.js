/*jshint esversion: 6 */

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
	
}

module.exports = User;
