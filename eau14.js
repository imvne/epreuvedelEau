// Par ordre ASCII


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

function asciiOrderSort(array){
	
	for (let i = 0 ; i < array.length-1 ; i++){ // i : compteur nombre de tours de tri
		
		for (let j = 0 ; j < array.length-1 ; j++){ // j : position de la chaîne de caractère dans le tableau
			
			let stringLength = Math.min(array[j].length, array[j + 1].length);
			
			for (let k = 0 ; k < stringLength ; k++){  // k : position du caratère dans la chaîne de caractère
				
				if ( array[j].charCodeAt(k) === array[j+1].charCodeAt(k) ){
					continue
				}
				else if ( array[j].charCodeAt(k) > array[j+1].charCodeAt(k) ){
					let temp = array[j]
					array[j] = array[j+1]
					array[j+1] = temp
					break
				}
				else if ( array[j].charCodeAt(k) < array[j+1].charCodeAt(k) ){
					break
				}
				
			}
		}
		
	}
	
	return array.join(' ')
}

function verifAsciiSorted(array){
	let asciiArray = [];
	for (let j = 0; j < array.length; j++) {
	    let asciiString = [];
	    for (let k = 0; k < array[j].length; k++) {
		  asciiString.push(array[j].charCodeAt(k));
	    }
	    asciiArray.push([asciiString]);
	}
	return asciiArray
}

// Error management

function isValidArguments(arguments){
	if (arguments.length > 1) {
		return true;
	}
	return false
}


// Parsing

function getArguments(){
	let arguments = slice(process.argv, 2);
	return arguments
}


// Solving

function getAsciiOrderSorted(){
	const argument = getArguments();
	
	if (!isValidArguments(argument)){
		return 'erreur : insérez au moins deux arguments'
	}
	else {
		return asciiOrderSort(argument)
	}
}


// Print

console.log(getAsciiOrderSorted())
console.log(verifAsciiSorted(getAsciiOrderSorted()))