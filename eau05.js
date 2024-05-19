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

function toSmallLetter(word){
	let smallLetters = "";
	
	for ( let i = 0 ; i < word.length ; i++){
		
		if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90){
			smallLetters += String.fromCharCode(word.charCodeAt(i) + 32)
		}
		else {
			smallLetters += word[i]
		}
	}
	
	return smallLetters
}

function checkStringInString(string, stringWanted){
	for (let i = 0 ; i <= string.length - stringWanted.length ; i++){
		let testString = slice(string, i, i + stringWanted.length-1);
		
		if (toSmallLetter(testString) === toSmallLetter(stringWanted)){
			return true
		}
	}
	return false
}


// Error management

function isValidArguments(arg){
	if (arg.length == 2) {
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

function stringInString(){
	const argument = getArguments();
	
	if (!isValidArguments(argument)){
		return 'erreur : insérez deux arguments'
	}
	
	else {
		return checkStringInString(argument[0], argument[1])
	}
}


// Print

console.log(stringInString());