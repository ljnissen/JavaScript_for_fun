Math.log10 = Math.log10 || function(x) {
  return Math.log(x) * Math.LOG10E;
};

a = 1 + 1;
console.log(a);

b = 2 - 3;
console.log(b);

c = 3 * 3;
console.log(c);

d = 2 / 3;
console.log(d);

e = Math.PI;
console.log(e);

f = Math.pow(2, 3);
console.log(f);

g = Math.sqrt(3);
console.log(g);

h = Math.cos(2*Math.PI);
console.log(h);

i = Math.log(Math.E);
console.log(i);

j = Math.log(10);
console.log(j);

k = Math.log10(Math.E);
console.log(k);

var tau = 2 * Math.PI;
console.log(tau.toString());

l = 100.0.toString();
console.log(l);

m = String(100);
console.log(m);

n = String(100.0);
console.log(n);

o = String(tau);
console.log(o);

p = Number("6.283185307179586");
console.log(p);

q = String(Number("6.283185307179586"));
console.log(q);

r = Number('1.24e6');
console.log(r);