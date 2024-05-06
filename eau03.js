// Suite de Fibonacci

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

function checkArguments(arg){
	if (arg.length == 1) {
		return true;
	}
}

function checkArgumentType(arg){
	if (/^\d+$/.test(arg)){
		return true;
	}
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2, process.argv.length-1);
	return arguments
}


// Solving

function fibonacciSuite(){
	const arguments = getArguments();
	if (!checkArguments(arguments)){
		return "erreur : insérez un seul argument"
	}
	else if (!checkArgumentType(arguments)) {
		return 'erreur: insérez un nombre'
	}
	else {
		const number = parseInt(getArguments());
		return getFibonacci(number);
	}
}


// Print

console.log(fibonacciSuite());