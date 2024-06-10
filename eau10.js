// Index wanted

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

function wantedIndex(array){ // mettre en parametre le tableau et l'index recherché
	let searchArray = slice(array, 0, array.length-2)
	let wantedIndex = array[array.length-1]
	
	for (let i = 0 ; i < searchArray.length ; i++){
		if (searchArray[i] === wantedIndex){
			return i;
		}
	}
	return "erreur : l'élément cherché n'est pas ici"
}


// Error management

function isValidArguments(arguments){
	if (arguments.length >= 2) {
		return true;
	}
	return false
}


// Parsing

function getArguments(){
	const arguments = slice(process.argv, 2) 
	return arguments
	
}


// Solving

function getWantedIndex(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return 'erreur : insérez au moins deux arguments'
	}
	else {
		return wantedIndex(arguments)
	}
}


// Print

console.log(getWantedIndex())