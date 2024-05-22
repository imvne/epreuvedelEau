// Majuscule

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

function toBigLetters(arguments){
	if (Array.isArray(arguments)){
		let bigLetters = [];
		let bigWord = '';
		
		for (let j = 0 ; j < arguments.length ; j++){
			let word = arguments[j];
			for ( let i = 0 ; i < word.length ; i++){
				if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
					bigWord += String.fromCharCode(word.charCodeAt(i) - 32)
				}
				else {
					bigWord += word[i]
				}
			}
			bigLetters.push(bigWord)
			bigWord = '';
			
		}
		
		return bigLetters
	}
	else {
		let bigLetters = "";
		for ( let i = 0 ; i < arguments.length ; i++){
			
			if (arguments.charCodeAt(i) >= 97 && arguments.charCodeAt(i) <= 122){
				bigLetters += String.fromCharCode(arguments.charCodeAt(i) - 32)
			}
			else {
				bigLetters += arguments[i]
			}
		}
		return bigLetters
	}
}

function upperFirstLetter(string){
	let arrayString = string[0].split(' ');
	let upperFirstLetterString = "";
	let upperFirstLetter = "";
	
	for (element of arrayString){
		upperFirstLetter = toBigLetters(element[0]) + slice(element, 1)
		upperFirstLetterString += upperFirstLetter + ' '
	}
	
	return upperFirstLetterString
}


// Error management

function isValidArguments(arguments){
	if (arguments.length === 1) {
		return true;
	}
	return false
}

function isNotANumber(arguments){
	let string = arguments.join('')
	
	for (character of string){
		
		if (!isNaN(character)){
			return false
		}
	}
	return true
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2)
	return arguments
}


// Solving

function getUpperFirstLetterString(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return "erreur : n'insérez qu'un argument"
	}
	else if (!isNotANumber(arguments)){
		return "erreur: n'insérez pas de nombres"
	}
	else {
		return upperFirstLetter(arguments)
	}
}


// Print

console.log(getUpperFirstLetterString());