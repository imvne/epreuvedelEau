// Différence minimum absolue


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

function charToNumber(arg){
	let numberArr = [];
	for (a of arg){
		numberArr.push(parseInt(a))
	}
	return numberArr
}

function sortNumbers(arg, firstNum, lastNum){ // essayer de faire sans trier
	if (lastNum - firstNum < 2){
		return arg
	}
	else {
		let pivot = lastNum-1;
		let cursor = firstNum;
		for (let i = firstNum ; i < lastNum-1; i++){
			if (arg[i] <= arg[pivot]){
				let temp = arg[i];
				arg[i] = arg[cursor]
				arg[cursor] = temp;
				cursor ++;
			}
		}
		let temp = arg[pivot];
		arg[pivot] = arg[cursor];
		arg[cursor] = temp;
		sortNumbers(arg, firstNum, cursor);
		sortNumbers(arg, cursor + 1, lastNum);
		return arg
	}
	
}

function absoluteMinDifference(arguments){
	let minDifference = undefined ;
	let numbersDifferences;
	
	for (let i = 0 ; i <= arguments.length-2 ; i++){
		numbersDifferences = arguments[i+1] - arguments[i];
		
		if (minDifference === undefined || numbersDifferences <= minDifference){
			minDifference = numbersDifferences;
		}
		
	}
	return minDifference;
}


// Error management

function isValidArguments(arguments){
	if (arguments.length >= 3) {
		return true;
	}
	return false
}

function isIntegers(arguments){
	
	for (character of arguments){
		const numberValue = Number(character);
		
		if (!Number.isInteger(numberValue)){ 
			return false;
		}
	}
	return true
}


// Parsing

function getArguments(){
	const arguments = slice(process.argv, 2) 
	return arguments
	
}


// Solving

function getAbsoluteMinDifference(){
	const arguments = getArguments();
	const numbers = charToNumber(arguments)
	const numbersSorted = sortNumbers(numbers, 0, numbers.length);
	
	if (!isValidArguments(arguments)){
		return 'erreur : insérez au moins trois arguments'
	}
	else if (!isIntegers(arguments)){
		return "erreur : n'insérez que des nombres entiers"
	}
	else {
		return absoluteMinDifference(numbers)
	}
}


// Print

console.log(getAbsoluteMinDifference());