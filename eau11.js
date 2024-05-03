// Différence minimum absolue


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

function sort(arg, firstNum, lastNum){
	if (lastNum - firstNum < 2){
		return arg
	}
	else {
		let pivot = lastNum-1;
		let cursor = firstNum;
		for (let i = firstNum ; i < lastNum-1; i++){
			if (arg[i] <= arg[pivot]){
				let temp = arg[i];
				arg[i] = arg[cursor]
				arg[cursor] = temp;
				cursor ++;
			}
		}
		let temp = arg[pivot];
		arg[pivot] = arg[cursor];
		arg[cursor] = temp;
		sort(arg, firstNum, cursor);
		sort(arg, cursor + 1, lastNum);
		return arg
	}
	
}

function getAbsoluteMinDifference(arg){
	let minDifference = undefined ;
	let numbersDifferences;
	for (let i = 0 ; i <= arg.length-2 ; i++){
		numbersDifferences = arg[i+1] - arg[i];
		if (minDifference === undefined){
			minDifference = numbersDifferences;
		}
		else if (numbersDifferences <= minDifference){
			minDifference = numbersDifferences;
		}
	}
	return minDifference;
}

// Error management

function checkArguments(arg){
	if (arg.length >= 3) {
		return true;
	}
	return false
}

function checkArgumentType(arg){
	for (element of arg){
		if (!/^\d+$/.test(element)){
			return false;
		}
	}
	return true
}

// Parsing

function getArguments(){
	const arguments = slice(process.argv, 2, process.argv.length-1) 
	return arguments
	
}

// Solving

function absoluteMinDifference(){
	const argument = getArguments();
	const numbers = charToNumber(argument)
	const numbersSorted = sort(numbers, 0, numbers.length);
	if (!checkArguments(argument)){
		return 'erreur : insérez au moins trois arguments'
	}
	else if (!checkArgumentType(argument)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		return getAbsoluteMinDifference(numbersSorted)
	}
}

// Print

console.log(absoluteMinDifference());