var s = new String("A man, a plan, a canal-Panama!");

console.log(s.split(", "));

var a = new Array();
a.push(3);
a.push(4);
a.push("Hello, world!");

console.log(a);

var now = new Date();

console.log(now);

var moonLanding = new Date("July 20, 1969 20:18");

console.log(now - moonLanding);

console.log(now.getYear());

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDay());

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(daysOfTheWeek[now.getDay()]);