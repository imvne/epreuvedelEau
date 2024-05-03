// Entre min et max

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

function getMinMax(arg1, arg2){
	let minMaxArr = [];
	if (arg1 < arg2){
		let min = arg1;
		let max = arg2;
		minMaxArr.push(min, max)
	}
	else {
		let min = arg2;
		let max = arg1;
		minMaxArr.push(min, max)
	}
	return minMaxArr
}

function getBetweenMinMax(arg1, arg2){
	const minMaxArr = getMinMax(arg1, arg2);
	const min = parseInt(minMaxArr[0]);
	const max = parseInt(minMaxArr[1]);
	let betweenMinMaxArr = [];
	for (let i = 0; i < max-min; i++){
		betweenMinMaxArr.push(min+i)
	}
	return betweenMinMaxArr
}

// Error management

function checkArguments(arg){
	if (arg.length === 2) {
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

function betweenMinMax(){
	const argument = getArguments();
	if (!checkArguments(argument)){
		return 'erreur : insérez deux arguments'
	}
	else if (!checkArgumentType(argument)){
		return "erreur : n'insérez que des nombres"
	}
	else {
		return getBetweenMinMax(argument[0], argument[1])
	}
}


// Print

console.log(betweenMinMax())