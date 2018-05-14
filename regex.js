var postNummer = new RegExp("\\d{5}");

var result = postNummer.exec("Beverly Hills 90210");

console.log(result);
console.log(result.length);

var result2 = postNummer.exec("Beverly Hills 90210");
console.log(result2);