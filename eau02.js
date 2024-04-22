// Paramètres à l'envers

// Useful functions
function reverse (arg) {
	const argumentsList = [];
	for (let i = arg.length - 1 ; i >= 0 ; i--) {
		argumentsList.push(arg[i]);
	}
	return argumentsList;
}

// Error management
function isArguments() {	
if (process.argv[2]) {
	return true;
}
}

// Parsing
function getArguments() {
	return process.argv.slice(2);
}

// Solving

function resolution() {
	const arguments = getArguments();
	if (!isArguments()){
		return 'erreur';
	}
	else {
		return reverse(arguments);
	}		
}

const reversedArguments = resolution();

// Print
if (reversedArguments == 'erreur') {
	console.log(reversedArguments);
}
else {
	for (const arguments of reversedArguments) {
		console.log(arguments);
	}
}

// j'ai print de cette manière afin que si ce qui est retourné dans la fonction resolution est une erreur alors afficher 'erreur' normalement
// mais si ce qui est retourné dans la fonction est la liste inversée des arguments donnés, alors afficher chaque argument un à un, sinon ça s'affichait sous forme de tableau en vert