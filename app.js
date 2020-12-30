// Create Dino Constructor
function Dinosaur (species, weight, height, diet, where, when, fact, image){
	this.species = species;
	this.weight = weight;
	this.height = height;
	this.diet = diet;
	this.when = when;
	this.where = where;
	this.fact = fact;
	this.image = "images/" + species.toLowerCase() + ".png";
}

	// Create Dino Objects
	function Dino(species, weight, height, diet, where, when, fact, image){
			Dinosaur.call(this,species,weight,height,diet, where, when,fact)
	}
	Dino.prototype = Object.create(Dinosaur.prototype);
	Dino.prototype.constructor = Dino
	
	let dinosaurs =[
		{
				"species": "Triceratops",
				"weight": 13000,
				"height": 114,
				"diet": "herbavor",
				"where": "North America",
				"when": "Late Cretaceous",
				"fact": "First discovered in 1889 by Othniel Charles Marsh"
		},
		{
				"species": "Tyrannosaurus Rex",
				"weight": 11905,
				"height": 144,
				"diet": "carnivor",
				"where": "North America",
				"when": "Late Cretaceous",
				"fact": "The largest known skull measures in at 5 feet long."
		},
		{
				"species": "Anklyosaurus",
				"weight": 10500,
				"height": 55,
				"diet": "herbavor",
				"where": "North America",
				"when": "Late Cretaceous",
				"fact": "Anklyosaurus survived for approximately 135 million years."
		},
		{
				"species": "Brachiosaurus",
				"weight": 70000,
				"height": "372",
				"diet": "herbavor",
				"where": "North America",
				"when": "Late Jurasic",
				"fact": "An asteroid was named 9954 Brachiosaurus in 1991."
		},
		{
				"species": "Stegosaurus",
				"weight": 11600,
				"height": 79,
				"diet": "herbavor",
				"where": "North America, Europe, Asia",
				"when": "Late Jurasic to Early Cretaceous",
				"fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
		},
		{
				"species": "Elasmosaurus",
				"weight": 16000,
				"height": 59,
				"diet": "carnivor",
				"where": "North America",
				"when": "Late Cretaceous",
				"fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
		},
		{
				"species": "Pteranodon",
				"weight": 44,
				"height": 20,
				"diet": "carnivor",
				"where": "North America",
				"when": "Late Cretaceous",
				"fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
		},
		{
				"species": "Pigeon",
				"weight": 0.5,
				"height": 9,
				"diet": "herbavor",
				"where": "World Wide",
				"when": "Holocene",
				"fact": "All birds are living dinosaurs."
		}
	]

	//this method of getting dinos returns a CORS error
	// let dinosaurs = [];
	// fetch('dino.json')
	// .then(response => response.json)
	// .then(json => {
	// 	dinos = json.Dinos.map(dino =>new Dinosaur(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact))
	// })

	dinos = dinosaurs.map(dino => new Dino(
		dino.species, 
		dino.weight,
		dino.height,
		dino.diet, 
		dino.where, 
		dino.when,
		dino.fact, ))
	// Create Human Object
	function Human(name, weight, height, diet, unit, image){
			this.name =  name;
			this.weight = weight;
			this.height = height;
			this.diet = diet;
			this.unit= unit;
			this.image = "images/human.png";
	}	
	// Use IIFE to get human data from form
	function getHuman() {
		return (function () {
			let name = document.getElementById('name').value;
			let diet = document.getElementById('diet').value;
				if (document.getElementById('metric').checked) {
						height = document.getElementById('height-metric').value;
						weight = document.getElementById('weight-metric').value;
						unit = 'metric';
				} else {
						height = (document.getElementById('feet').value * 12) + Number(document.getElementById('inches').value);
						weight = document.getElementById('weight-imperial').value;
						unit = 'imperial';
				}
		return new Human(name, weight,height, diet, unit);
	})();
	}


	// Create Dino Compare Method 1: DIET
	// NOTE: Weight in JSON file is in lbs, height in inches. 
	Dinosaur.prototype.compareDiet = function(diet,name){
		let fact = `${name}, your diet is the same as ${this.species}'s!`;
		if (this.diet === diet) {
			fact = `${name}, you are ${diet} and ${this.species} was too!`;
		} else {
			fact = `${name}, you are ${diet}, but ${this.species} was ${this.diet}!`;
		}
		return fact
		//console.log('fact:', fact)
		//this.addFact(fact);
	}
	
	// Create Dino Compare Method 2: HEIGHT
	// NOTE: Weight in JSON file is in lbs, height in inches.
	Dinosaur.prototype.compareHeight = function(height){
		let fact = `Your height is the same as ${this.species}'s!`;
	
		if (document.getElementById('metric').checked) {
			height = document.getElementById('height-metric').value;
			uom = 'meters';
		} else {
			height = (document.getElementById('feet').value * 12) + Number(document.getElementById('inches').value);
			uom = 'inches';
		}
	
		const heightDifference= this.height - height;
		if (heightDifference > 1) {
				fact = `${this.species} heighed with ${heightDifference} ${uom} more than you!`;
		}
		if (heightDifference < 1) {
			fact = `You heigh with ${heightDifference} ${uom} more than ${this.species}!`;
		}
		return fact
		//this.addFact(fact);
	}
	
	// Create Dino Compare Method 3: WEIGHT
	// NOTE: Weight in JSON file is in lbs, height in inches.
	Dinosaur.prototype.compareWeight = function(weight){
		let fact = `Your weight is the same as ${this.species}'s!`;
		if (document.getElementById('metric').checked) {
			weight = document.getElementById('weight-metric').value;
			uom = 'kilograms';
		} else {
			weight = document.getElementById('weight-imperial').value;
			uom = 'pounds';
		}
	
		const weightDifference= this.weight - weight;
		if (weightDifference > 1) {
				fact = `${this.species} weighed with ${weightDifference} ${uom} more than you!`;
		}
		if (weightDifference < 1) {
			fact = `You weigh with ${weightDifference} ${uom} more than ${this.species}!`;
		}
		//this.addFact(fact);
		return fact
	}


	// On button click, prepare and display infographic
	document.getElementById("btn").addEventListener("click", function () {
	// Generate Tiles for each Dino in Array
	function getGridItem(species, imageUrl, fact) {
		let gridItemDiv = document.createElement("div");
		gridItemDiv.className = "grid-item";
	
		// add species
		let speciesDiv = document.createElement("h3");
		speciesDiv.innerText = species;
		gridItemDiv.appendChild(speciesDiv);
	
		// add image
		let imageDiv = document.createElement("img");
		imageDiv.src = imageUrl;
		gridItemDiv.appendChild(imageDiv);
	
		// add fact
		if (fact) {
				// for humans, facts are not necessary
				let factDiv = document.createElement("p");
				factDiv.innerText = fact;
				gridItemDiv.appendChild(factDiv);
		}
	
		return gridItemDiv;
	}
	let facts= []
	for(let index in dinos){
		let dino = dinos[index];
		const randomNumber = dino.species === 'Pigeon' ? 2 : Math.round(Math.random()*5);
		switch(randomNumber){
			case 0:fact = `The ${dino.species} lived in ${dino.where}.`; break;
			case 1:fact = `The ${dino.species} lived in the ${dino.when} period.`; break;
			case 2:fact = dino.fact; break;
			case 3:fact = dino.compareWeight(human.weight); break;
			case 4:fact = dino.compareHeight(human.height);break;
			case 5:fact = dino.compareDiet(human.diet, human.name);break;
			default:fact = 'Dinosaurs are cool!';
		}
		facts.push(fact)
		// Add tiles to DOM
		let gridDiv = getGridItem(dino.species, dino.image, fact);
		document.getElementById("grid").appendChild(gridDiv);
		if (index == 3) {
				// human tile centered
				let humanTileDiv = getGridItem(human.name, human.image);

				document.getElementById("grid")
						.appendChild(humanTileDiv);
		}
	}

	// Remove form from screen
});


//Change the metric/imperial system function

function uomChange() {
if (document.getElementById('metric').checked) {
		document.getElementById('metric-system').style.display = 'block';
		document.getElementById('imperial-system').style.display = 'none';
} else {
		document.getElementById('metric-system').style.display = 'none';
		document.getElementById('imperial-system').style.display = 'block';
}
}