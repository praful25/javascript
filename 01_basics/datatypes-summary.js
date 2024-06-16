//  Primitive

// 7 Types: Number, String, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)

// Array, Object, Functions

const indianSuperHeros = ['shaktiman', 'naagraj', 'doga'];
// console.log(typeof indianSuperHeros);

const myDetails = {
    'name': 'Praful',
    'age': 30,
    'designation': 'SD'
}
// console.log(typeof myDetails);

const myFunc = function myFuntion() {
    console.log("Hello World");
}
// console.log(typeof myFunc);

///****** */
// Stack (Primitive), Heap (Non-Primitive)

let firstName = "Praful";
let name = firstName;

name = "Praful Bagde"
// console.log(firstName);
// console.log(name);

let userOne = {
    'name': 'Praful',
    'email': 'prafulbagde@gmail.com'
}

let userTwo = userOne;
userTwo.email = 'prafulbagde25@gmail.com';

console.log(userOne.email);
console.log(userTwo.email);