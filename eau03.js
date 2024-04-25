// Suite de Fibonacci

// Useful functions

const fibonacciSuite = [0,1,1,2];

function checkFirstFibonacciNumbers() {
	if (number == 0 || number == 1){
		return true
	}
}

function getFibonacci(num){
	let suiteArr = [0,1];			// on a seulement besoin des deux premiers chiffres de la suite car n[i] = n[i-1] + n[i-2]
	let nextFibonacciNumber;
	for (let i = suiteArr.length - 1; i < num ; i++){
		nextFibonacciNumber = suiteArr[i] + suiteArr[i - 1];
		suiteArr.push(nextFibonacciNumber);
	};
	return(suiteArr[suiteArr.length - 1]);
}

// Error management

function checkArguments(arg){ 	     // vérifier si il y'a un argument, et qu'un seul
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
	let arguments = process.argv.slice(2);
	return arguments
}

let number = parseInt(getArguments());

// Solving

function resolution(){
	let arguments = getArguments();
	if (!checkArguments(arguments)){
		return "erreur : insérez un seul argument"
	}
	else if (!checkArgumentType(arguments)) {
		return 'erreur: insérez un nombre'
	}
	else if (checkFirstFibonacciNumbers()){
		return fibonacciSuite[number];
	} 
	else {
		return getFibonacci(number);
	}
}

// Print

console.log(resolution());