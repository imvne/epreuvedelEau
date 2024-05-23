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

function charactersToNumbers(arguments){
	let numbersArray = [];
	for (string of arguments){
		numbersArray.push(parseInt(string))
	}
	return numbersArray
}

function smallestAbsoluteDifference(arguments){
	const array = charactersToNumbers(arguments)
	let smallestDifference = undefined ;
	let numbersDifferences;
	
	for (let i = 0 ; i < array.length ; i++){
		
		for (let j = 0 ; j < array.length ; j++){
			if(i === j){
				continue
			}
			else {
				let result = array[i] - array[j];
				numbersDifferences = Math.abs(result);
			}
			
			if (smallestDifference === undefined || numbersDifferences <= smallestDifference){
				smallestDifference = numbersDifferences;
			}
			
		}
		
	}
	return smallestDifference;
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

function getSmallestAbsoluteDifference(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return 'erreur : insérez au moins trois arguments'
	}
	else if (!isIntegers(arguments)){
		return "erreur : n'insérez que des nombres entiers"
	}
	else {
		return smallestAbsoluteDifference(arguments)
	}
}


// Print

console.log(getSmallestAbsoluteDifference());