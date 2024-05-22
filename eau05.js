// String dans string

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

function toSmallLetters(arguments){
	if (Array.isArray(arguments)){
		let smallLetters = [];
		let smallWord = '';
		
		for (let j = 0 ; j < arguments.length ; j++){
			let word = arguments[j];
			for ( let i = 0 ; i < word.length ; i++){
				if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90){
					smallWord += String.fromCharCode(word.charCodeAt(i) + 32)
				}
				else {
					smallWord += word[i]
				}
			}
			smallLetters.push(smallWord)
			smallWord = '';
			
		}
		
		return smallLetters
	}
	else {
		let smallLetters = "";
		for ( let i = 0 ; i < arguments.length ; i++){
			
			if (arguments.charCodeAt(i) >= 65 && arguments.charCodeAt(i) <= 90){
				smallLetters += String.fromCharCode(arguments.charCodeAt(i) + 32)
			}
			else {
				smallLetters += arguments[i]
			}
		}
		return smallLetters
	}
}

function stringInString(strings){
	const string = strings[0];
	const stringWanted = strings[1];
	
	for (let i = 0 ; i <= string.length - stringWanted.length ; i++){
		let testString = slice(string, i, i + stringWanted.length-1);
		
		if (toSmallLetters(testString) === toSmallLetters(stringWanted)){
			return true
		}
	}
	return false
}


// Error management

function isValidArguments(arguments){
	if (arguments.length === 2) {
		return true;
	}
	return false
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2);
	return arguments
}


// Solving

function isStringInString(){
	const argument = getArguments();
	
	if (!isValidArguments(argument)){
		return 'erreur : insérez deux arguments'
	}
	
	else {
		return stringInString(argument)
	}
}


// Print

console.log(isStringInString());