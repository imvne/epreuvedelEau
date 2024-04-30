// String dans string

// Useful functions

function checkStringInString(str1, str2){
	for (i = 0 ; i <= str1.length - str2.length ; i++){
		let testString = str1.slice(i, i + str2.length);
		if (testString.toLowerCase() === str2.toLowerCase()){
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
	let arguments = process.argv.slice(2);
	return arguments
}
const argument = getArguments();
const containerSring = argument[0];
const contentSring = argument[1];

// Solving

function stringInString(){
	const argument = getArguments();
	const string1 = argument[0];
	const string2 = argument[1];
	const argumentsString = argument.join(' ')
	if (!checkArguments(argument)){
		return 'erreur : insérez deux arguments'
	}
	else if (!checkArgumentType(argumentsString)){
		return 'erreur: insérez uniquement des lettres'
	}
	else {
		return checkStringInString(string1, string2)
	}
}


// Print

console.log(stringInString());