// Majuscule sur deux

// Useful functions

function upperInEveryTwo(arg){
	let newUpperLowerArray = [];
	for (i = 0 ; i < arg.length ; i+=2){
		let upper = arg[i].toUpperCase();
		newUpperLowerArray.push(upper, arg[i+1])
	}
	return newUpperLowerArray.join('');
}


// Error management

function checkArguments(arg){
	if (arg.length > 0) {
		return true;
	}
	return false
}

function checkArgumentType(arg){
	if (/^\D*$/.test(arg)){
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
const argumentsString = argument.join(' ')


// Solving

function upperEveryTwo(){
	if (!checkArguments(argument)){
		return 'erreur : insérez au moins un argument'
	}
	else if (!checkArgumentType(argumentsString)){
		return "erreur: n'insérez pas de nombres"
	}
	else {
		return upperInEveryTwo(argumentsString)
	}
}


// Print

console.log(upperEveryTwo())