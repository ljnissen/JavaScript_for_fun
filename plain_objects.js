var user = {};

var a = user["firstName"] = "LJ";
var b = user["lastName"] = "Nissen";

console.log(a);
console.log(b);

console.log(user["firstName"]);
console.log(user["lastName"]);

console.log(user.firstName);
console.log(user.lastName);

console.log(user.dude);
console.log(!!user.dude);

console.log(user);