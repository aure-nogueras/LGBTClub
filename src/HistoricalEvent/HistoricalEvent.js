/*jshint esversion: 6 */

// Clase HistoricalEvent
class HistoricalEvent{
	
	// El evento histórico incluye un email 
	// Alude a la persona que añadió el evento, en el caso de que sea un usuario del sistema
	
	constructor(name, day, month, year, description, email){
		this.name = name;
		this.day = day;
		this.month = month;
		this.year = year;
		this.description = description;
		this.email = email;
	}
	
	// Relacionado con la HU 16
	getName(){
		return this.name;
	}
	
	// Relacionado con la HU 16
	getDescription(){
		return this.description;
	}
	
	// Comprobar que la fecha de un evento histórico es válida	
	isDateValid(){
		var valid = false;
		if(this.year < 2021){
			if(this.month >= 1 && this.month <=12){	
				if(this.day >= 1 && this.day <= 28){
					valid = true;
				}else if(this.day > 28 && this.day <=31){
					valid = true;
					if(this.day == 31 && (this.month != 1 && this.month != 3 && this.month != 5 && 					this.month != 7 && this.month != 8 && this.month != 10 && this.month != 12)){
						valid = false;
					}
					if(this.month == 2){
						if(this.day >= 30){
							valid = false;
						}
						if(this.day == 29 && this.year % 4 != 0){
							valid = false;
						}
					}
				}
			}
		}
		return valid;
	}
	
}

module.exports = HistoricalEvent;
