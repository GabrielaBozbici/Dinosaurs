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
}

(function convertor(){
	if (units === 'metric') {
		this.weight = Math.round(dinosaurData.weight / 2.21);
		this.height = Math.round(dinosaurData.height * 2.54);
} else {
		this.weight = dinosaurData.weight;
		this.height = dinosaurData.height;
}
})();
    // Create Dino Objects
		function createDinosaur(units) {
			const dinos = dinosaurData();
			const dinosArray = [];
	
			dinos.forEach(function (dino) {
					dinosArray.push(new DinoConstructor(dino, units));
			});
	
			// Insert the human placeholder here so that iteration works properly
			// in the grid element construction.  Human should be in the centre square.
			dinosArray.splice(4, 0, 'human placeholder');
			return dinoArray;
	}

    // Create Human Object
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
	}
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

	
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