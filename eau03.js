// Suite de Fibonacci

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


function whereIsFibonacciSuiteNumber(arguments){
	const num = parseInt(arguments);
	let fibonacciSuiteArray = [0,1];	
	let nextFibonacciNumber;
	
	if (num === 0){
		return 0
	}
	else {
		
		for (let i = fibonacciSuiteArray.length - 1; i < num ; i++){
			nextFibonacciNumber = fibonacciSuiteArray[i] + fibonacciSuiteArray[i - 1];
			fibonacciSuiteArray.push(nextFibonacciNumber);
		};
		
		return(fibonacciSuiteArray[fibonacciSuiteArray.length - 1]);
	}
}

	
// Error management

function isValidArguments(arguments){
	if (arguments.length === 1) {
		return true;
	}
}

function isPositiveInteger(arguments){
	const numberValue = Number(arguments);
	
	if (numberValue >= 0 && Number.isInteger(numberValue)){ //inclus le zéro
		return true;
	}
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2);
	return arguments
}


// Solving

function getFibonacciSuiteNumber(){
	const arguments = getArguments();
	if (!isValidArguments(arguments)){
		return "erreur : insérez un seul argument"
	}
	else if (!isPositiveInteger(arguments)) {
		return 'erreur: insérez un nombre entier positif'
	}
	else {
		return whereIsFibonacciSuiteNumber(arguments);
	}
}


// Print

console.log(getFibonacciSuiteNumber());