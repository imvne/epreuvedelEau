// Paramètres à l'envers

// Useful functions
function reverse (p) {
	for (i = p.length - 1 ; i >= 2 ; i--) {
		console.log(p[i]);
	}
}

// Error management
function noArguments() {	
if (!process.argv[2]) {
	return true;
}
}

// Parsing


// Solving

function resolution() {
	if (noArguments()){
		console.log('erreur')
	}
	else {
		reverse(process.argv);
	}		
}


// Print

resolution();





// résolu en 2h

// function reverse (p) {
// 	for (i = p.length - 1 ; i >= 2 ; i--) {
// 		console.log(p[i]);
// 	}
// }

// let arguments = process.argv;

// if (!process.argv[2]){
// 	console.log('erreur');
// }

// else {
// 	reverse(arguments);
// }