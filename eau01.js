// Combinaison de deux nombres

// Solving

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


// Print
console.log(list);

// résolu en 1h