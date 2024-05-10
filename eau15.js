const phrase = [[
	"***** ",
	"*     ",
	"***   ",  // E
	"*     ",
	"***** "
],

[
	"  *   ",
	"*   * ",
	"***** ",  // E
	"*   * ",
	"*   * "
],

[
	"*   * ",
	"*   * ",
	"*   * ",  // E
	"*   * ",
	"***** "
],

[
	"   ",
	"   ",
	"   ",
	"   ",
	"   ",
],

[
	"*   * ",
	"*  *  ",
	"* *   ",  // E
	"*  *  ",
	"*   * "
]
];


for (let i = 0; i < phrase[0].length; i++) { // Utiliser la longueur de la première lettre (toutes les lettres ont la même longueur)
	let ligne = ""; // Chaîne pour stocker la ligne actuelle

	for (let j = 0; j < phrase.length; j++) { // Parcourir chaque lettre dans la phrase
	    ligne += phrase[j][i]; // Concaténer la ligne de la lettre actuelle
	}
	console.log(ligne); // Afficher la ligne complète
}
  