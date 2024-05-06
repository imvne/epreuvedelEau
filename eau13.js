// Tri par sélection


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

function selectionSort(array){
	for (let i = 0 ; i < array.length-1 ; i++){
		let min = i;
		
		for (let j = i + 1 ; j < array.length ; j++){
			if (array[j] < array[min]){
				min = j;
			}
		}
		let temp = array[min];
		array[min] = array[i];
		array[i] = temp;
		
	}
	return array.join(' ')
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
	let arguments = slice(process.argv, 2, process.argv.length-1);
	return arguments
}

// Solving

function selectionSorted(){
	const argument = getArguments();
	if (!checkArgument(argument)){
		return 'erreur : insérez au moins deux arguments'
	}
	else if (!checkArgumentType(argument)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		const numbers = charToNumber(argument)
		return selectionSort(numbers)
	}
}


// Print

console.log(selectionSorted());