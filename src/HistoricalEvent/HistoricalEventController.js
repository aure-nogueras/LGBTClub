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
		var pos = this.findHistoricalEvent(historicalEvent);
		this.infoAndExperiences.splice(pos, 1);
	}
	
	// Función auxiliar para el borrado
	findHistoricalEvent(historicalEvent){
		var found = false;
		var pos = -1;
		for(var i=0; i<this.historicalEventsList.length && !found; i++){
			if(JSON.stringify(this.historicalEventsList[i]) === JSON.stringify(historicalEvent)){
				found = true;
				pos = i;
			}
		}
		return pos;
	}
}

module.exports = HistoricalEventController;
