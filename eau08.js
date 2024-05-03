// Chiffres only

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

function checkNumberOnly(arg){
	for (let i = 0; i < arg.length ; i++){
		if (arg.charCodeAt(i) < 47 || arg.charCodeAt(i) > 58){
			return false
		}
	}
	return true
}


// Error management

function checkArguments(arg){
	if (arg.length === 1) {
		return true;
	}
	return false
}

// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2, process.argv.length-1)
	return arguments
}


// Solving

function numberOnly(){
	const argument = getArguments();
	const arg = argument[0];
	if (!checkArguments(argument)){
		return "erreur : n'insérez qu'un argument"
	}
	else {
		return checkNumberOnly(arg)
	}
}


// Print

console.log(numberOnly());