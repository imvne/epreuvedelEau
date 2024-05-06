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
	let element = arg[0]
	
	for (let i = 0; i < element.length ; i++){
		if (element.charCodeAt(i) < 47 || element.charCodeAt(i) > 58){
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
	
	if (!checkArguments(argument)){
		return "erreur : n'insérez qu'un argument"
	}
	else {
		return checkNumberOnly(argument)
	}
}


// Print

console.log(numberOnly());