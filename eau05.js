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
		let smalLetters = [];
		
		for (string of arguments){
			smalLetters.push(toSmallLetters(string))
		}
		return smalLetters
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
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return 'erreur : insérez deux arguments'
	}
	
	else {
		return stringInString(arguments)
	}
}


// Print

console.log(isStringInString());