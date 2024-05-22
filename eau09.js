// Entre min et max

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

function sortTwoNumbers(firstArgument, secondArgument){
	let minMaxSortedArray = [];
	
	if (firstArgument < secondArgument){
		let min = firstArgument;
		let max = secondArgument;
		minMaxSortedArray.push(min, max)
	}
	else {
		let min = secondArgument;
		let max = firstArgument;
		minMaxSortedArray.push(min, max)
	}
	return minMaxSortedArray
}

function betweenMinMax(arguments){
	const minMaxSorted = sortTwoNumbers(arguments[0], arguments[1]);
	
	const min = parseInt(minMaxSorted[0]);
	const max = parseInt(minMaxSorted[1]);
	
	let betweenMinMaxString = "";
	
	for (let i = 0 ; i < max-min ; i++){
		betweenMinMaxString += min + i + " "
	}
	return betweenMinMaxString
}


// Error management

function isValidArguments(arguments){
	if (arguments.length === 2) {
		return true;
	}
	return false
}

function isANumber(arguments){
	let string = arguments.join('')
	
	for (character of string){
		
		if (isNaN(character)){
			return false
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

function getNumbersBetweenMinMax(){
	const arguments = getArguments();
	if (!isValidArguments(arguments)){
		return 'erreur : insérez deux arguments'
	}
	else if (!isANumber(arguments)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		return betweenMinMax(arguments)
	}
}


// Print

console.log(getNumbersBetweenMinMax())