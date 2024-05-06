// String dans string

// Useful functions

function slice(arguments, firstIndex, endIndex){
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

function checkStringInString(str1, str2){
	for (i = 0 ; i <= str1.length - str2.length ; i++){
		let testString = slice(str1, i, i + str2.length-1);
		
		if (toSmallLetter(testString) === toSmallLetter(str2)){
			return true
		}
	}
	return false
}


// Error management

function checkArguments(arg){
	if (arg.length == 2) {
		return true;
	}
	return false
}

function checkArgumentType(arg){
	if (/^[a-zA-Z\s]+$/.test(arg)){
		return true;
	}
	return false
}


// Parsing

function getArguments() {
	let arguments = slice(process.argv, 2, process.argv.length-1);
	return arguments
}


// Solving

function stringInString(){
	const argument = getArguments();
	const argumentsString = argument.join(' ')
	if (!checkArguments(argument)){
		return 'erreur : insérez deux arguments'
	}
	else if (!checkArgumentType(argumentsString)){
		return 'erreur: insérez uniquement des lettres'
	}
	else {
		const string1 = argument[0];
		const string2 = argument[1];
		return checkStringInString(string1, string2)
	}
}


// Print

console.log(stringInString());