const humanForm = document.getElementById('dino-compare');
const gridContainer = document.getElementById('grid');


function Creature(species, weight, height, facts) {
	this.species = species;
	this.weight = weight;
	this.height = height;
	this.facts = facts;
	this.image = "images/" + species + ".png";
}

Creature.prototype.addFact = function(fact) {
  this.facts.push(fact);
};

Creature.prototype.getRandomFact = function () {
  let index = Math.floor(Math.random() * 10) % this.facts.length;
  return this.facts[index];
};
// Create Dino Compare Method 1: Weight

Creature.prototype.compareWeight = function(weight){
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
	this.addFact(fact);
}

// Create Dino Compare Method 2: Diet

Creature.prototype.compareDiet = function(name,diet){
		let fact = `Your diet is the same as ${this.species}'s!`;

		if (this.diet === diet) {
			fact = `${name}, you are ${diet} and ${this.species} was too!`;
		} else {
			fact = `${name}, you are ${diet}, but ${this.species} was ${this.diet}.`;
		}
		this.addFact(fact);
}
// Create Dino Compare Method 3: Height

Creature.prototype.compareHeight = function(height){
	let fact = `Your height is the same as ${this.species}'s!`;

	if (document.getElementById('metric').checked) {
		height = document.getElementById('height-metric').value;
		uom = 'meters';
	} else {
		height = (document.getElementById('feet').value * 12) + Number(document.getElementById('inches').value);
		uom = 'inches';
	}

	const heightDifference= this.weight - weight;
	if (heightDifference > 1) {
			fact = `${this.species} heighed with ${heightDifference} ${uom} more than you!`;
	}
	if (heightDifference < 1) {
		fact = `You heigh with ${heightDifference} ${uom} more than ${this.species}!`;
	}
	this.addFact(fact);
}

Creature.prototype.getRandomFact = function () {
  let index = Math.floor(Math.random() * 10) % this.facts.length;
  return this.facts[index];
};

function Dino(species, weight, height, fact, where, when) {
  Creature.call(this, species, weight, height, fact, where, when);
}

Dino.prototype = Object.create(Creature.prototype);
Dino.prototype.constructor = Dino;

function Human(name, weight, height, diet, unit) {
  Creature.call(this, "human", weight, height, diet, unit);
	this.name = name;
	this.unit = unit
}
Human.prototype = Object.create(Creature.prototype);
Human.prototype.constructor = Human;

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

console.log('dinosaurs: ', dinosaurs);
dinos = dinosaurs.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.fact, dino.where, dino.when))


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

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", function () {
				const human = getHuman();
				console.log('-----', human)
				//field validation
				if (!human.name || human.name === "") {
					createErrorElem("Name filed can not be empty!");
					return;
					}
				if (!human.height || human.height === "") {
					createErrorElem("Height filed can not be empty!");
					return;
					}
					if (!human.weight || human.weight === "") {
					createErrorElem("Weight filed can not be empty!");
					return;
					}
        dinos.forEach(dino => {
					dino.compareHeight(human.height);
          dino.compareWeight(human.weight);
					dino.compareDiet(human.diet);
					console.log('compare---',dino.compareHeight(human.height))
				});
        // Hide Form from UI
        document.getElementById("dino-compare").style.display = "none";
        // Generate Grids and add back to DOM
        for (let dinoIndex in dinos) {
						let dino = dinos[dinoIndex];
						let fact = dino.getRandomFact();
						//const randomNumber = dino.species === 'Pigeon' ? 2 : Math.round(Math.random() * 5);
						// switch (randomNumber) {
						// 		case 0:fact = `The ${dino.species} lived in ${dino.where}.`; break;
						// 		case 1:fact = `The ${dino.species} lived in the ${dino.when} period.`; break;
						// 		case 2:fact = dino.fact; break;
						// 		case 3:fact = dino.compareWeight(human.weight); break;
						// 		case 4:fact = dino.compareHeight(human.height);break;
						// 		case 5:fact = dino.compareDiet(human.diet);break;
						// 		default:fact = 'Dinosaurs are cool!';
   					//  }
            if (dino.species ==='Pigeon') {
              fact = "All birds are dinosaurs."
						}
						console.log('fact', randomNumber, fact, dino)
            let gridItemDiv = getGridItem(dino.species, dino.image, fact);

            document.getElementById("grid")
                .appendChild(gridItemDiv);
            if (dinoIndex == 3) {
                // insert human tile at center
                let humanTileDiv = getGridItem(human.name, human.image);

                document.getElementById("grid")
                    .appendChild(humanTileDiv);
            }
        }
    });


function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}

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
      let factFiv = document.createElement("p");
      factFiv.innerText = fact;
      gridItemDiv.appendChild(factFiv);
  }

  return gridItemDiv;
}

function createErrorElem(message){
	let errorDiv = document.createElement("div");
  errorDiv.id= "error-msg";

  // add msg
  let errortxt = document.createElement("h4");
  errortxt.innerText = message;
	errorDiv.appendChild(errortxt);
	console.log("errorDiv: ", errorDiv)

	document.getElementById("error").appendChild(errorDiv);
}


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