var sonnet = 'Let me not to the marriage of true minds Admit impediments. Love is not Love Which alters when it alteration finds, Or bends with the remover to remove. O no, it is an ever-fixed mark That looks on tempests and is never shaken; It is the star to every wandring bark, Whose worth is unknown'


var uniques = {};
var words = sonnet.match(/[\w']+/g);

for (var i = 0; i < words.length; i++) {
	var word = words[i];
	if (uniques[word]) {
		uniques[word] += 1;
	} else {
		uniques[word] = 1;
	}
}

console.log(uniques);

var uniques = new Map();
Map {}
	uniques.set("loved", 0);
