/*jshint esversion: 6 */

var history = require("./HistoricalEvent.js");

// Controlador de HistoricalEvent
// En principio se usará un array de eventos históricos
// Más adelante se conectará con una base de datos de donde se añadirán o eliminarán los elementos

class HistoricalEventController{

	constructor(){
		this.historicalEventsList = [];
	}
	
	getHistoricalEventsList(){
		return this.historicalEventsList;
	}
	
	// Añadir un evento histórico HU8
	addHistoricalEvent(historicalEvent){
		if(historicalEvent.isDateValid()){
			this.historicalEventsList.push(historicalEvent);
		}else{
			console.log("La fecha del evento es incorrecta");
		}
	}
	
	// Eliminar un evento histórico HU10
	deleteHistoricalEvent(historicalEvent){
		let pos = this.historicalEventsList.indexOf(historicalEvent);
		this.historicalEventsList.splice(pos, 1);
	}
}

module.exports = HistoricalEventController;
