//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}

	get species(){
		return this._species
	}

	makeSound(){
		console.log(`the ${this._species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	
	bark(){
		return console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	
	purr(){
		return console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
