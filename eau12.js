// Tri à bulle


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

function charToNumber(arg){
	let numberArr = [];
	for (a of arg){
		numberArr.push(parseInt(a))
	}
	return numberArr
}

function bubblesort(arr){
	for (let i = 0 ; i < arr.length-1 ; i++){
		
		for (let j = 0 ; j < arr.length-1 ; j++){
			if (arr[j] > arr[j+1]){
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
		
	}
	return arr.join(' ')
}

// Error management

function checkArgument(arg){
	if (arg.length < 2){
		return false
	}
	return true
}

function checkArgumentType(arg){
	for (element of arg){
		if (!/^\d+$/.test(element)){
		return false
	}
	}
	return true
}


// Parsing

function getArguments(){
	let arguments = slice(process.argv, 2, process.argv.length-1)
	return arguments
}


// Solving

function bubbleSorted(){
	const argument = getArguments();
	
	if (!checkArgument(argument)){
		return 'erreur : insérez au moins deux arguments'
	}
	else if (!checkArgumentType(argument)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		const numbers = charToNumber(argument);
		return bubblesort(numbers)
	}
}


// Print

console.log(bubbleSorted());