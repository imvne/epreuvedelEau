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

function getFibonacci(num){
	let fibonacciSuiteArray = [0,1];	
	let nextFibonacciNumber;
	let lastIndex = fibonacciSuiteArray.length - 1;
	
	if (num === 0){
		return 0
	}
	else {
		
		for (let i = fibonacciSuiteArray.length - 1; i < num ; i++){
			nextFibonacciNumber = fibonacciSuiteArray[i] + fibonacciSuiteArray[i - 1];
			fibonacciSuiteArray.push(nextFibonacciNumber);
		};
		return(fibonacciSuiteArray[lastIndex]);
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
	
	if (numberValue > 0 && Number.isInteger(numberValue)){
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
		const number = parseInt(getArguments());
		return getFibonacci(number);
	}
}


// Print

console.log(getFibonacciSuiteNumber());