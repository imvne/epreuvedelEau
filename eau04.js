// Prochain nombre premier 

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

function getRoundSquareRoot() {
	const squareRoot = Math.sqrt(getArguments());
	return Math.round(squareRoot);
}


function checkPrimeNumber(number) {
	const roundSquareRoot = getRoundSquareRoot();
	
	if (number <= 1){
		return false
	}
	if (number === 2){
		return true
	}
	for (let i = 2 ; i <= roundSquareRoot ; i++) {
		if (number % i === 0) {
			return false // pas nombre premier
		}
	}
	return true // nombre premier
}


function getNextPrimeNumber(number) {
	for (let j = number ;  ; j++) {
		
		if (checkPrimeNumber(j)) { 
			return j;
		}
	}	
}


// Error management

function checkArguments(arg){
	if (arg.length == 1) {
		return true;
	}
	return false
}

function checkArgumentType(arg){
	if (/^\d+$/.test(arg)){
		return true;
	}
	return false
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2, process.argv.length-1);
	return arguments
}


// Solving

function nextPrimeNumber(){
	const argument = getArguments();
	
	if (!checkArguments(argument)){
		return 'erreur : insérez un seul argument'
	}
	else if (!checkArgumentType(argument)){
		return 'erreur: insérez un nombre entier positif'
	}
	else {
		const number = parseInt(argument);
		return getNextPrimeNumber(number)
	}
	
}


// Print

console.log(nextPrimeNumber());