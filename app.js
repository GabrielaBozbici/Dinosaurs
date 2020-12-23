function dinosaurData (){
    const dinosaurs =[
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
    return dinosaurs;
};
    // Create Dino Constructor

	function DinoConstructor (dinosaurData, unitsOfMeasure) {
    this.species = dinosaurData.species;
		this.weight = dinosaurData.weight;
    this.height = dinosaurData.height
    this.diet = dinosaurData.diet;
    this.where = dinosaurData.where;
    this.when = dinosaurData.when;
		this.fact = dinosaurData.fact;
		
	// 	if (units === 'metric') {
	// 		this.weight = Math.round(dinosaurData.weight / 2.21);
	// 		this.height = Math.round(dinosaurData.height * 2.54);
	// } else {
	// 		this.weight = dinosaurData.weight;
	// 		this.height = dinosaurData.height;
	// }
}
    // Create Dino Objects
		function createDinosaur(units) {
			const dinos = dinosaurData();
			const dinosArray = [];
	
			dinos.forEach(function (dino) {
					dinosArray.push(new DinoConstructor(dino, units));
			});
	console.log('dinosArray: ', dinosArray);
			// Insert the human placeholder here so that iteration works properly
			// in the grid element construction.  Human should be in the centre square.
			dinosArray.splice(4, 0, 'placeholder for human');
			return dinosArray;
	}

    // Create Human Object
	
    // Use IIFE to get human data from form
		function collectHumanData() {
			let humanHeight, humanWeight, units;
	
			if (document.getElementById('metric').checked) {
				humanHeight = document.getElementById('height-metric').value;
				humanWeight = document.getElementById('weight-metric').value;
					units = 'metric';
			} else {
				humanHeight = (document.getElementById('feet').value * 12) + Number(document.getElementById('inches').value);
				humanWeight = document.getElementById('weight-imperial').value;
					units = 'imperial';
			}
	
			const humanData = {
					name: document.getElementById('name').value,
					humanHeight: humanHeight,
					humanWeight: humanWeight,
					diet: document.getElementById('diet').value,
					units: units
			};
			console.log('human data:', humanData)
			return humanData;
	};

    // Create Dino Compare Method 1: Weight
		compareWeight= function (humanData) {
			if (document.getElementById('metric').checked) {
				humanData.weight = document.getElementById('weight-metric').value;
				uom = 'kilograms';
			} else {
				humanData.weight = document.getElementById('weight-imperial').value;
				uom = 'pounds';
			}

			const weightDifference= this.weight - humanData.weight;
			if (weightDifference > 1) {
					return `${this.species} weighed with ${weightDifference} ${uom} more than you!`;
			}
			if (weightDifference < 1) {
					return `You weigh with ${weightDifference} ${uom} more than ${this.species}!`;
			}
			return `Your weight is the same as ${this.species}'s!`;

	}
    
    // Create Dino Compare Method 2: Diet
		compareDiet= function (humanData) {
			if (humanData.diet === this.diet) {
					return `${humanData.name}, you are ${humanDiet} and ${this.species} was too!`;
			} else {
					return `${humanData.name}, you are ${humanDiet}, but ${this.species} was ${this.diet}.`;
			}
	}
    
    // Create Dino Compare Method 3: Height
		compareHeight= function (humanHeight) {

			if (document.getElementById('metric').checked) {
				humanData.height = document.getElementById('height-metric').value;
					uom = 'meters';
			} else {
				humanData.height = (document.getElementById('feet').value * 12) + Number(document.getElementById('inches').value);
					uom = 'inches';
			}

			const heightDifference= this.height - humanHeight;

			if (heightDifference > 1) {
					return `${this.species} was with ${heightDifference} ${uom} taller than you!`;
			}
			if (heightDifference < 1) {
					return `You are with ${heightDifference} ${uom} taller than ${this.species}!`;
			}
			return `Your height as ${this.species}'s!`;
	}

		// Generate Tiles for each Dino in Array
		function createDinoElement(dinoData, humanData) {
			let fact;
			const randomNumber = dinoData.species === 'Pigeon' ? 2 : Math.round(Math.random() * 5);
			switch (randomNumber) {
					case 0: fact = `The ${dinoData.species} lived in ${dinoData.where}.`; break;
					case 1:fact = `The ${dinoData.species} lived in the ${dinoData.when} period.`; break;
					case 2:fact = dinoData.fact; break;
					case 3:fact = dinoData.compareWeight(humanData.weight); break;
					case 4:fact = dinoData.compareHeight(humanData.height);break;
					case 5:fact = dinoData.compareDiet(humanData.diet);break;
					default: fact = 'Dinosaurs are cool!';
			}
	
			// Create the new grid item with title, image, and chosen fact
			const newDiv = document.createElement('div');
			newDiv.className = 'grid-item';
			newDiv.innerHTML = `<h3>${dinoData.species}</h3><img src="images/${(dinoData.species.toLowerCase())}.png" alt="image of ${dinoData.species}"><p>${fact}</p>`;
	
			return newDiv;
	}
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic


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