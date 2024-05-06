// Paramètres à l'envers

// Useful functions

function slice(arguments, firstIndex, endIndex){
	if (Array.isArray(arguments)){
		let argumentsSliced = [];
		for (let i = firstIndex ; i <= endIndex ; i++){
			argumentsSliced.push(arguments[i])
		}
		return argumentsSliced
	}
	else {
		let argumentsSliced = "";
		for (let i = firstIndex ; i <= endIndex ; i++){
			argumentsSliced += arguments[i]
		}
		return argumentsSliced
	}
}

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
	let arguments = slice(process.argv, 2, process.argv.length-1)
	return arguments;
}


// Solving

function reversed() {
	const arguments = getArguments();
	if (!checkArguments(arguments)){
		return ['erreur'];  
	}
	else {
		return reverse(arguments);
	}		
}

const reversedArguments = reversed();


// Print

for (const arguments of reversedArguments) {
	console.log(arguments);
}



// j'ai print avec for..of afin que ce qui soit retourné dans la fonction reverse soit affiché un élément après l'autre, 
// sinon ça s'affichait sous forme de tableau en vert
// je met 'erreur' dans un tableau pour qu'il soit affiché d'un coup et pas lettre après lettre à cause de for..of 