// Combinaison de deux nombres

// Solving

function getTwoNumbersCombinationList(){
	let list = [];
	
	for (let i = 0; i < 99; i++) {
		
		for (let j = i + 1 ; j <= 99 ; j++) {
			let firstNumber = i.toString().padStart(2, 0);
			let secondNumber = j.toString().padStart(2, 0);
			
			list.push(firstNumber + ' ' + secondNumber)
		}
	}
	
	return list.join(', ')
}


// Print

console.log(getTwoNumbersCombinationList());