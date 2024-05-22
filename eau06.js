// Majuscule sur deux

// Useful functions

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
	for (char of arguments){
		
		if (!isNaN(char)){
			return false;
		}
	}
	return true
}


// Parsing

function getArguments() {
	let arguments = process.argv.slice(2);
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