var postNummer = new RegExp("\\d{5}");

var result = postNummer.exec("Beverly Hills 90210");

console.log(result);
console.log(result.length);

var result2 = postNummer.exec("Beverly Hills 90210");
console.log(result2);

var s = "Beverly Hills 90201 was a '90s TV show set in Los Angeles.";
s += " 91125 is another ZIP code in the Los Angeles area.";
console.log(s);

console.log(!!s.match(postNummer));

if (s.match(postNummer)) {
	console.log("Looks like there's at least one ZIP code in the string.");
}

zipCode = /\d{5}/g;

console.log(s.match(zipCode));

var q = "ant bat cat duck".split(" ");
console.log(q);

var x = "ant bat cat duck".split(/\s+/);
console.log(x);

var z = "ant   bat\tcat\nduck".split(/\s+/);
console.log(z);