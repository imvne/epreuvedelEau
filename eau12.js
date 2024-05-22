// Tri à bulle


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

function charToNumber(arg){
	let numberArr = [];
	for (a of arg){
		numberArr.push(parseInt(a))
	}
	return numberArr
}

function toBubbleSort(numbers){
	for (let i = 0 ; i < numbers.length-1 ; i++){
		
		for (let j = 0 ; j < numbers.length-1 ; j++){
			if (numbers[j] > numbers[j+1]){
				let temp = numbers[j]
				numbers[j] = numbers[j+1]
				numbers[j+1] = temp
			}
		}
		
	}
	return numbers.join(' ')
}

// Error management

function isValidArguments(arguments){
	if (arguments.length < 2) {
		return true;
	}
	return false
}

function isANumber(arguments){
	let string = arguments.join('')
	
	for (character of string){
		
		if (isNaN(character)){
			return false
		}
	}
	return true
}


// Parsing

function getArguments(){
	let arguments = slice(process.argv, 2)
	return arguments
}


// Solving

function getBubbleSorted(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return 'erreur : insérez au moins deux arguments'
	}
	else if (!isANumber(arguments)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		return toBubbleSort(charToNumber(arguments))
	}
}


// Print

console.log(getBubbleSorted());