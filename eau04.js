// Prochain nombre premier 

// Useful functions

function slice(arguments, firstIndex, endIndex = arguments.length-1){
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

function checkPrimeNumber(number) {
	
	if (number <= 1){
		return false
	}
	if (number === 2){
		return true
	}
	for (let i = 2 ; i <= number / 2 ; i++) {
		if (number % i === 0) {
			return false // pas nombre premier
		}
	}
	return true // nombre premier
}


function nextPrimeNumber(number) {
	for (let j = number ;  ; j++) {
		
		if (checkPrimeNumber(j)) { 
			return j;
		}
	}	
}


// Error management

function isValidArguments(arguments){
	if (arguments.length == 1) {
		return true;
	}
	return false
}

function isPositiveNumber(arguments){
	const numberValue = Number(arguments);
	
	if (!isNaN(numberValue) && numberValue > 0) {
	    return true;
	}
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2);
	return arguments
}


// Solving

function getNextPrimeNumber(){
	const argument = getArguments();
	
	if (!isValidArguments(argument)){
		return 'erreur : insérez un seul argument'
	}
	else if (!isPositiveNumber(argument)){
		return 'erreur: insérez un nombre positif'
	}
	else {
		return nextPrimeNumber(parseInt(argument))
	}
	
}


// Print

console.log(getNextPrimeNumber());