// Majuscule

// Useful functions

function toBigLetter(word) {
	let bigLetters = "";
	
	for ( let i = 0 ; i < word.length ; i++){
		
		if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122){
			bigLetters += String.fromCharCode(word.charCodeAt(i) - 32)
		}
		else {
			bigLetters += word[i]
		}
	}
	
	return bigLetters
}

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

function getUpperFirstLetter(arg){
	let array = arg[0].split(' ');
	let upperFirstLetterArray = "";
	let upperFirstLetter = "";
	
	for (element of array){
		upperFirstLetter = toBigLetter(element[0]) + slice(element, 1, element.length-1)
		upperFirstLetterArray += upperFirstLetter + ' '
	}
	
	return upperFirstLetterArray
}


// Error management

function checkArguments(arg){
	if (arg.length === 1) {
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
	let arguments = slice(process.argv, 2, process.argv.length-1)
	return arguments
}


// Solving

function upperFirstLetter(){
	const argument = getArguments();
	
	if (!checkArguments(argument)){
		return "erreur : n'insérez qu'un argument"
	}
	else if (!checkArgumentType(argument)){
		return "erreur: n'insérez pas de nombres"
	}
	else {
		return getUpperFirstLetter(argument)
	}
}


// Print

console.log(upperFirstLetter());