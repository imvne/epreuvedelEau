// Majuscule sur deux

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
  
function isLetter(char) {
	if (/[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(char)){
		return true
	}
}

function checkEven(number) {
	if (number % 2 === 0){
		return true
	}
}

function upperInEveryTwo(arg){
	let newUpperLowerArray = [];
	let even = true;
	for (let i = 0 ; i < arg.length ; i++){
		if (isLetter(arg[i])){
			
			if (even) {
				newUpperLowerArray.push(toBigLetter(arg[i]))
				even = false;
			}
			else {
				newUpperLowerArray.push(arg[i])
				even = true;
			}
		}
		else {
			newUpperLowerArray.push(arg[i])
		}
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