const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

console.log(balance.toString().length);
// output: 3

console.log(balance.toFixed(2));
// output: 100.00

const outherNumber = 4000000;
// console.log(outherNumber.toLocaleString('en-IN'));
// output: 40,00,000


///// Math //////

console.log(Math.random());
console.log(Math.abs(-40)); // output 40
console.log(Math.ceil(23.60)); // output 24
console.log(Math.floor(23.60)); // output 23
console.log(Math.round(23.40)); // output 23
console.log(Math.min(10, 23, 45, 59, 99)); // output 10
console.log(Math.max(10, 23, 45, 59, 99)); // output 99