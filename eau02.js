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
	return argumentsList.join('\n');
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

function getReversed() {
	const arguments = getArguments();
	if (!checkArguments(arguments)){
		return 'erreur';  
	}
	else {
		return reverse(arguments);
	}		
}


// Print

console.log(getReversed());
