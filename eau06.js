// Majuscule sur deux

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
		
		for (string of arguments){
			bigLetters.push(toBigLetters(string))
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
  
function isLetter(character) {
	if (/[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(character)){
		return true
	}
}

function upperInEveryTwo(arguments){
	let string = arguments.join(' ')
	
	let newUpperLowerArray = '';
	let even = true;
	
	for (let i = 0 ; i < string.length ; i++){
		if (isLetter(string[i])){
			
			if (even) {
				newUpperLowerArray += toBigLetters(string[i])
				even = false;
			}
			else {
				newUpperLowerArray += string[i]
				even = true;
			}
		}
		else {
			newUpperLowerArray += string[i]
		}
	}
	return newUpperLowerArray;
}


// Error management

function isValidArguments(arguments){
	if (arguments.length > 0) {
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
	let arguments = slice(process.argv, 2);
	return arguments
}


// Solving

function getUpperInEveryTwo(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return 'erreur : insérez au moins un argument'
	}
	else if (!isNotANumber(arguments)){
		return "erreur: n'insérez pas de nombres"
	}
	else {
		return upperInEveryTwo(arguments)
	}
}


// Print

console.log(getUpperInEveryTwo())