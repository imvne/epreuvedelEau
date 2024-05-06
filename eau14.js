// Par ordre ASCII


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

function toBigLetter(letter) {
	if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
	    let bigLetter = String.fromCharCode(letter.charCodeAt(0) - 32);
	    return bigLetter;
	} 
	else {
	    return letter
	}
}

function upperFirstLetter(arr){
	let upperFirstLetterArr = [];
	let upperFrst = "";
	for (element of arr){
		upperFrst = toBigLetter(element[0]) + slice(element, 1, element.length-1) // refaire la fonction slice
		upperFirstLetterArr.push(upperFrst)
	}
	return upperFirstLetterArr;
}

function asciiOrderSort(arr){
	for (let i = 0 ; i < arr.length-1 ; i++){
		
		for (let j = 0 ; j < arr.length-1 ; j++){
			if (arr[j].charCodeAt(0) > arr[j+1].charCodeAt(0)){
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
		
	}
	return arr
}

// Error management

function checkArgument(arg){
	if (arg.length < 2){
		return false
	}
	return true
}

function checkArgumentType(arg){
	if (/^\D*$/.test(arg)){
		return true;
	}
	return false
}


// Parsing

function getArguments(){
	let arguments = slice(process.argv, 2, process.argv.length-1);
	return arguments
}



// Solving

function asciiOrderSorted(){
	const argument = getArguments();
	if (!checkArgument(argument)){
		return 'erreur : insérez au moins deux arguments'
	}
	else if (!checkArgumentType(argument)){
		return "erreur: n'insérez que des lettres"
	}
	else {
		return asciiOrderSort(upperFirstLetter(argument))
	}
}


// Print

console.log(asciiOrderSorted())