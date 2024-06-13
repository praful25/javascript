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
console.log(typeof(valueInBoolean));
console.log(valueInBoolean);

// "" => false
// 1 => true
// 0 => false
// "1" => true
// "Praful" => true
// null => false
// undefined => false