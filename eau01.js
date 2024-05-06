// Combinaison de deux nombres

// Solving

function twoNumbersCombination(){
	let list = [];

	for (let i = 0; i < 99; i++) {
		let j = i + 1;
		for (; j <= 99; j++) {
			let firstNumber = i.toString().padStart(2, 0);
			let secondNumber = j.toString().padStart(2, 0);
			if (i !== 98) {
				list += firstNumber + " " + secondNumber + ", ";
			}
			else {
				list += firstNumber + " " + secondNumber;
			}
			
		}
	}
	return list
}


// Print

console.log(twoNumbersCombination());