// Paramètres à l'envers

// Useful functions
function reverse(arg) {
	const argumentsList = [];
	for (let i = arg.length - 1 ; i >= 0 ; i--) {
		argumentsList.push(arg[i]);
	}
	return argumentsList;
}

// Error management
function checkArguments(arg){
	if (arg.length > 0) {
		return true;
	}
}

// Parsing
function getArguments() {
	return process.argv.slice(2);
}


// Solving

function getResolution() {
	const arguments = getArguments();
	if (!checkArguments(arguments)){
		return ['erreur'];  
	}
	else {
		return reverse(arguments);
	}		
}

const reversedArguments = getResolution();

// Print

for (const arguments of reversedArguments) {
	console.log(arguments);
}


// j'ai print avec for..of afin que ce qui soit retourné dans la fonction reverse soit affiché un élément après l'autre, 
// sinon ça s'affichait sous forme de tableau en vert
// je met 'erreur' dans un tableau pour qu'il soit affiché d'un coup et pas lettre après lettre à cause de for..of 