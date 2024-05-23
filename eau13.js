// Tri par sélection


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

function toSelectionSort(array){
	for (let i = 0 ; i < array.length-1 ; i++){
		let min = i;
		
		for (let j = i + 1 ; j < array.length ; j++){
			if (array[j] < array[min]){
				min = j;
			}
		}
		let temp = array[min];
		array[min] = array[i];
		array[i] = temp;
		
	}
	return array.join(' ')
}

// Error management

function isValidArguments(arguments){
	if (arguments.length > 2) {
		return true;
	}
	return false
}

function isANumber(arguments){ //areNumbers ?
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
	let arguments = slice(process.argv, 2);
	return arguments
}

// Solving

function getSelectionSorted(){
	const arguments = getArguments();
	if (!isValidArguments(arguments)){
		return 'erreur : insérez au moins deux arguments'
	}
	else if (!isANumber(arguments)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		return toSelectionSort(charToNumber(arguments))
	}
}


// Print

console.log(getSelectionSorted());