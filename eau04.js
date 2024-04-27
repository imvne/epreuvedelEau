// Prochain nombre premier 

// Useful functions

function getRoundSquareRoot() {
	const squareRoot = Math.sqrt(getArguments());
	return Math.round(squareRoot);
}

const roundSquareRoot = getRoundSquareRoot();


function checkPrimeNumber(number) {
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
	let arguments = process.argv.slice(2);
	return arguments
}

const argument = getArguments();


// Solving

function nextPrimeNumber(){
	const argument = getArguments();
	const number = parseInt(argument);
	if (!checkArguments(argument)){
		return 'erreur : insérez un seul argument'
	}
	else if (!checkArgumentType(argument)){
		return 'erreur: insérez un nombre entier positif'
	}
	else {
		return getNextPrimeNumber(number)
	}
	
}


// Print

console.log(nextPrimeNumber(argument));