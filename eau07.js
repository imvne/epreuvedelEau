// Majuscule

// Useful functions

function toBigLetter(letter) {
	if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
	    let bigLetter = String.fromCharCode(letter.charCodeAt(0) - 32);
	    return bigLetter;
	} 
	else {
	    return letter
	}
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
	let upperFirstLetterArr = [];
	let upperFrst = "";
	for (element of array){
		upperFrst = toBigLetter(element[0]) + slice(element, 1, element.length-1) // refaire la fonction slice
		upperFirstLetterArr.push(upperFrst)
	}
	return upperFirstLetterArr.join(' ')
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

const argument = getArguments();

// Solving

function upperFirstLetter(){
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