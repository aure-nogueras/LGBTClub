// Clase HistoricalEvent
class HistoricalEvent{
	
	constructor(name, day, month, year, description){
		this.name = name;
		this.day = day;
		this.month = month;
		this.year = year;
		this.description = description;
	}
	
	getName(){
		return this.name;
	}
	
	getDay(){
		return this.day;
	}
	
	getMonth(){
		return this.month;
	}
	
	getYear(){
		return this.year;
	}
	
	getDescription(){
		return this.description;
	}
	
	setName(name){
		this.name = name;
	}
	
	setDay(day){
		this.day = day;
	}
	
	setMonth(month){
		this.month = month;
	}
	
	setYear(year){
		this.year = year;
	}
	
	setDescription(description){
		this.description = description;
	}
	
}
