// Combinaison de trois chiffres

// Useful functions
function repeatedNumber(number) {
	if (number[0] == number[1] || number[1] == number[2] || number[0] == number[2]){
		return true;
	}
	else {
		return false
	}
}

function sortedNumber (number) {
	if (number[0] < number[1] && number[1] < number[2]) {
		return true;
	}
	else {
		return false;
	}
}


// Error management


// Parsing


// Solving
let i = 0;
let combinaisonList = "";

for (; i < 999; i++) {
	let number = i.toString().padStart(3, 0);			
	if (repeatedNumber(number)) {
		continue;
	}
	else if (!sortedNumber(number)) {
		continue;
	}
	let combinaison = number.padStart(3, '0')
	combinaisonList += number + " ";
}


// Print
console.log(combinaisonList);


// je défini number en tant que string pour qu'il soit considéré comme un tableau et que ce soit simple d'atteindre chaque chiffre d'un nombre
// je défini le format de number à trois unités, si on est rendu à 12, 012 est pris en compte pour pouvoir vérifier les deux fonctions
// j'ajoute ces zéros manquant sur mon affichage final
// résolu en 1h37