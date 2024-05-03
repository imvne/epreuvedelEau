// Index wanted

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

function getWantedIndex(arr){
	let phrase = slice(arr, 0, arr.length-2)
	let wantedArg = arr[arr.length-1]
	for (let i = 0 ; i < phrase.length ; i++){
		if (phrase[i] === wantedArg){
			return i;
		}
	}
	return "erreur : l'index wanted n'est pas ici"
}


// Error management

function checkArguments(arg){
	if (arg.length >= 2) {
		return true;
	}
	return false
}


// Parsing

function getArguments(){
	const argumments = slice(process.argv, 2, process.argv.length-1) 
	return argumments
	
}


// Solving

function indexWanted(){
	const argument = getArguments();
	if (!checkArguments(argument)){
		return 'erreur : insérez au moins deux arguments'
	}
	else {
		return getWantedIndex(argument)
	}
}


// Print

console.log(indexWanted())