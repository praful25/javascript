let score = 30;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// 30 => number
// "30" => number
// "30abc" => NaN
// "" => number
// null => number
// undefined => NaN

let isLoogedIn = 0;
let valueInBoolean = Boolean(isLoogedIn);
// console.log(typeof(valueInBoolean));
// console.log(valueInBoolean);

// "" => false
// 1 => true
// 0 => false
// "1" => true
// "Praful" => true
// null => false
// undefined => false

let someNumber = 30;
let valueInString = String(someNumber);
// console.log(typeof(someNumber));
// console.log(typeof(valueInString));



/****** Operations *****/ 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + 1 + "3");
// console.log(1 + "1" + "3");
// console.log(1 + "1" + 3);
// console.log(1 + 6 + "1" + 3);

let gameCounter = 100;
// gameCounter++; // gameCounter = gameCounter + 1;
gameCounter = gameCounter + 1;
console.log(gameCounter);
