// String dans string

// Useful functions

function checkStringInString(){
	const stringTestScope = containerSring.length - contentSring.length;
	for (i = 0 ; i <= stringTestScope ; i++){
		let testString = containerSring.slice(i, i + contentSring.length);
		if (testString === contentSring){
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
	const string = argument;
	const argumentsString = argument.join(' ')
	if (!checkArguments(argument)){
		return 'erreur : insérez deux arguments'
	}
	else if (!checkArgumentType(argumentsString)){
		return 'erreur: insérez uniquement des lettres'
	}
	else {
		return checkStringInString(string)
	}
}


// Print

console.log(stringInString());