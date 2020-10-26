// Clase User
class User{
	
	constructor(name, email, lgtb){
		this.name = name;
		this.email = email;
		this.lgtb = lgtb;
	}
	
	getName(){
		return this.name;
	}
	
	getEmail(){
		return this.email;
	}
	
	getLgtb(){
		return this.lgtb;
	}
	
	setName(name){
		this.name = name;
	}
	
	setEmail(email){
		this.email = email;
	}
	
	setLgtb(lgtb){
		this.lgtb = lgtb;
	}
}
